import React from "react";
import "./Post.css";
import Comments from "../Comments/index";
import HeaderPost from "../HeaderPost/index";
import BodyPost from "../BodyPost/index";
import postData from "../../data/postData.json";

class Post extends React.Component {
  render() {
    return (
      postData.map((postDetail, index) => {
        return (
          <div class="card centre" id="card_style">
            <HeaderPost
              userImg={postDetail.userImg}
              userName={postDetail.userName}
              date={postDetail.date}
            ></HeaderPost>
            <BodyPost
              postImg={postDetail.postImg}
              nbLike={postDetail.nbLike}
              description={postDetail.description}
            ></BodyPost>
            <Comments
              commentaires={postDetail.comments}
            ></Comments>
          </div>
        )
      })
    )
  }
}
export default Post;
