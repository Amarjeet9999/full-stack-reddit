const express = require( "express" );
const Comment = require( "../models/comment.model" );
const Post = require( "../models/post.model" );
const authenticate = require( "../middlewares/authenticate" );
const router = express.Router();

router.post( "/", async ( req, res ) => {
  try {
    const comment = await Comment.create( req.body );
    return res.status( 201 ).json( { comment } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.get( "/", async ( req, res ) => {
  try {
    const comments = await Comment.find().lean().exec();
    return res.status( 200 ).json( { comments } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.get( "/:postId", async ( req, res ) => {
  try {
    const comments = await Comment.find( { postId: req.params.postId } ).populate( "commentedBy", "username" );
    return res.status( 200 ).json( { comments } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.delete( "/:id", authenticate, async ( req, res ) => {
  try {
    //Authorized : commentedBy, or postOwner(postId=>postedBy);
    let comment = await Comment.findById( req.params.id ).lean().exec();
    let post = await Post.findById( comment.postId ).lean().exec();
    if (
      req.user._id !== comment.commentedBy &&
      req.user._id !== post.postedBy
    ) {
      return res.status( 403 ).json( { error: "Unauthorized" } );
    }
    comment = await Comment.findByIdAndDelete( req.params.id );
    return res.status( 200 ).json( { comment } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.patch( "/:id", async ( req, res ) => {
  try {
    //Authorized : commentedBy, or postOwner(postId=>postedBy);
    let comment = await Comment.findById( req.params.id ).lean().exec();
    if ( req.user._id !== comment.commentedBy ) {
      return res.status( 403 ).json( { error: "Unauthorized" } );
    }
    comment = await Comment.findByIdAndUpdate( req.params.id, req.body );
    return res.status( 203 ).json( { comment } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

module.exports = router;
