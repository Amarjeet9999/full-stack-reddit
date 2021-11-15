const express = require( "express" );
const Post = require( "../models/post.model" );
const Comment = require( "../models/comment.model" );
const router = express.Router();
const upload = require( "../utils/fileUpload" );
const fs = require( "fs" );
const authenticate = require( "../middlewares/authenticate" );
const imgur = require( "imgur" );


router.post( "/", upload.single( "img" ), async ( req, res ) => {
  try {
    let post;
    if ( !req.file ) {
      post = await Post.create( req.body );
    } else {
      let link;
      imgur
        .uploadFile( req.file.path )
        .then( async ( li ) => {
          fs.unlinkSync( req.file.path );
          link = li.link;
          post = await Post.create( {
            ...req.body,
            img: link,
          } );
          return res.status( 201 ).json( { post } );
        } )
        .catch( ( err ) => {
          return res.status( 500 ).json( { error: err.message } );
        } );
    }
  } catch ( err ) {
    if ( req.file ) {
      fs.unlinkSync( req.file.path );
    }
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.get( "/", async ( req, res ) => {
  try {
    const posts = await Post.find().populate( "postedBy", "username" ).sort( { "createdAt": -1 } );
    // posts.forEach( async ( post ) => {
    //     const comments = await Comment.countDocuments( { postId: post._id } );
    //     post.addComments( comments );
    //     console.log( post.comments );
    // } )
    return res.status( 200 ).json( { posts } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.get( "/:id", async ( req, res ) => {
  try {
    const post = await Post.findById( req.params.id ).lean().exec();
    return res.status( 200 ).json( { post } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.delete( "/:id", authenticate, async ( req, res ) => {
  try {
    let post = await Post.findById( req.params.id ).lean().exec();
    if ( req.user._id !== post.postedBy ) {
      return res.status( 403 ).json( { error: "Unauthorized!" } );
    }
    post = await Post.findByIdAndDelete( req.params.id ).lean().exec();
    return res.status( 200 ).json( { post } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.patch( "/:id/vote", async ( req, res ) => {
  try {
    let post = await Post.findById( req.params.id );
    post.vote( req.body.val );
    // if ( req.user._id !== post.postedBy ) {
    //     return res.status( 403 ).json( { error: "Unauthorized!" } );
    // }
    post = await Post.findByIdAndUpdate( req.params.id, post ).lean().exec();
    return res.status( 203 ).json( { post } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

router.patch( "/:id", authenticate, async ( req, res ) => {
  try {
    let post = await Post.findById( req.params.id ).lean().exec();
    if ( req.user._id !== post.postedBy ) {
      return res.status( 403 ).json( { error: "Unauthorized!" } );
    }
    post = await Post.findByIdAndUpdate( req.params.id, req.body ).lean().exec();
    return res.status( 203 ).json( { post } );
  } catch ( err ) {
    return res.status( 500 ).json( { error: err.message } );
  }
} );

module.exports = router;
