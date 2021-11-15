const express = require( "express" );
const connect = require( "./configs/db" );
const cors = require( "cors" );

const app = express();
app.use( cors() );
app.use( express.json() );

// Controllers
const { register, login } = require( "./controllers/auth.controller" );
app.use( "/login", login );
app.use( "/register", register );

const postController = require( "./controllers/post.controller" );
app.use( '/posts', postController );

const commentController = require( "./controllers/comment.controller" );
app.use( '/comments', commentController );

const userController = require( "./controllers/user.controller" );
app.use( "/users", userController );

app.listen( "8000", async () => {
  try {
    await connect();
    console.log( "listening at 8000" );
  } catch ( err ) {
    console.log( err );
  }
} );
