import React from "react";
import { useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Users} from '../../Dummydata';

function Post({post}) {
const[like,setLike] = useState(post.like);
const[isLiked,setIsLiked] = useState(false);

const likeHandler = () => {
  setLike(isLiked ? like-1 : like+1);
}

  return (
    <>
      <div className="post">
        <div className="postwrapper">
          <div className="posttop">
            <div className="posttopleft">
              <img
                src={Users.filter((u) => u.id === post.userId)[0].profilepicture}
                alt=""
                className="posttopleftimage"
              />
              <span className="postusername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
              <span className="postdate">{post.date}</span>
            </div>
            <div className="posttopright">
              <MoreVertIcon className="posttoprightverticaldots" />
            </div>
          </div>
          <div className="postcenter">
            <span className="postcentertext">{post?.desc}</span>
            <img src={post.photo} alt="" className="postcenterimage" />
          </div>
          <div className="postbottom">
            <div className="postbottomleft">
              <ThumbUpIcon className="postbottomherticon" onClick={likeHandler} />
              <FavoriteIcon className="postbottomherticon" onClick={likeHandler} />
              <span className="peoplelikecounter">{like} People liked it.</span>
            </div>
            <div className="postbottomright">
              <span className="postbottomcomment">{post.comment} Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
