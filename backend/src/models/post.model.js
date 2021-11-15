const mongoose = require( 'mongoose' );

const postSchema = new mongoose.Schema( {
    community: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    text: String,
    img: String,
    votes: { type: Number, default: 0 }
    // comments: { type: Number, default: 0 }
}, { versionKey: false, timestamps: true } )

postSchema.methods.vote = function ( val ) {
    this.votes += Number( val );
}

postSchema.methods.addComments = function ( val ) {
    this.comments = Number( val );
}


const Post = mongoose.model( 'post', postSchema );

module.exports = Post;