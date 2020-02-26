import React from "react";
import "./Post.css";
import Comments from "../Comments/index";
import HeaderPost from "../HeaderPost/index";
import BodyPost from "../BodyPost/index";
import postData from "../../data/postData.json";
import commentsData from "../../data/commentsData.json";
console.log(postData[0].comments);

// class Post extends React.Component {
//   render() {

//       return (
//         postData.map((postDetail, index) => {
//         <div class="card centre" id="card_style">
//           <HeaderPost
//             userImg={postDetail.userImg}
//             userName={postDetail.userName}
//             date={postDetail.date}
//           ></HeaderPost>
//           <BodyPost
//             postImg={postDetail.postImg}
//             nbLike={postDetail.nbLike}
//             description={postDetail.description}
//           ></BodyPost>
//         </div>
//         });
//       );

//   }
// }
// export default Post;

export default props => {
  return (
    <>
      {postData.map(postDetail => (
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
          {/* <div style={{ padding: 20, alignItems: "center", marginBottom: 10 }}> */}
          {commentsData.map(comments => (
            <Comments
              img={comments.userImgComment}
              comment={comments.textComment}
            ></Comments>
          ))}
        </div>
      ))}
    </>
  );
};
