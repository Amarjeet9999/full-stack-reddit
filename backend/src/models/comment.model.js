const mongoose = require( 'mongoose' );

const commentSchema = new mongoose.Schema( {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
    commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    comment: { type: String, required: true }
}, { versionKey: false, timestamps: true } )

const Comment = mongoose.model( 'comment', commentSchema );

module.exports = Comment;