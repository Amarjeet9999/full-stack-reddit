import React from "react";
import { PostTitle } from "./PostTitle";
import { PostComponent } from "./Post";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SinglePostData = () => {
  const [singlePost, setSinglePost] = React.useState("");
  const { id } = useParams();

  const fetchData = async () => {
    try {
      await axios.get(`http://localhost:8000/posts/${id}`).then((data) => {
        setSinglePost(data.data.post);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleVotes = async (val) => {
    await axios
      .patch(`https://reddit-backendwork.herokuapp.com/posts/${id}/vote`, {
        val,
      })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PostTitle
        singlePost={singlePost}
        fetchData={fetchData}
        handleVotes={handleVotes}
        id={id}
      />
      <PostComponent
        singlePost={singlePost}
        id={id}
        fetchData={fetchData}
        handleVotes={handleVotes}
      />
    </div>
  );
};
