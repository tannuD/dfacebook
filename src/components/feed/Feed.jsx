import React from "react";
import Post from "../post/Post";
import Sharefeed from "../sharefeed/Sharefeed";
import "./Feed.css";
import { posts } from "../../Dummydata";

function Feed() {
  return (
    <>
      <div className="feedbar">
        <div className="feedwrapper">
          <Sharefeed />
          {posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
