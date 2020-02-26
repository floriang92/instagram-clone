import React from "react";
import "./BodyPost.css";

class HeaderPost extends React.Component {
  state = {
    nbLike: this.props.nbLike,
    like: false,
    likeImg: "/images/heart.png",
  };

  incrementLike = function () {
    this.setState(state => {
      return { nbLike: state.nbLike + 1, like: true, likeImg: "/images/heart_like.png" };
    });
  };

  decrementLike = function () {
    this.setState(state => {
      return { nbLike: state.nbLike - 1, like: false, likeImg: "/images/heart.png" };
    });
  };

  //TODO revoir la forme
  likeClick = function () {
    if (!this.state.like) {
      this.incrementLike();
    } else {
      this.decrementLike();
    }
  };

  render() {
    return (
      <div class="card-body" >
        <img class="card-img-top" id="img_post" alt="" src={this.props.postImg} />
        <img
          id="img_heart"
          src={this.state.likeImg}
          alt=""
          onClick={this.likeClick.bind(this)}
        />
        <img class="img_icon bubble" alt="" src="/images/speech-bubble.png" />
        <img class="img_icon send" alt="" src="/images/send.png" />
        <p>{this.state.nbLike} likes</p>
        <p class="card-text">{this.props.description}</p>
      </div>

    );
  }
}
export default HeaderPost;
