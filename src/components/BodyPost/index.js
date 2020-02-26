import React from "react";
import "./BodyPost.css";

class HeaderPost extends React.Component {
  state = {
    nbLike: this.props.nbLike,
    like: false,
    likeImg: "/images/heart.png",
  };

  incrementLike = () => {
    this.setState(state => {
      return { nbLike: state.nbLike + 1, like: true, likeImg: "/images/heart_like.png" };
    });
  };

  decrementLike = () => {
    this.setState(state => {
      return { nbLike: state.nbLike - 1, like: false, likeImg: "/images/heart.png" };
    });
  };

  likeClick = () => {
    if (this.state.like) {
      this.decrementLike();
    } else {
      this.incrementLike();
    }
  };

  render() {
    return (
      <div className="card-body" >
        <img className="card-img-top" id="img_post" alt="" src={this.props.postImg} />
        <img
          id="img_heart"
          src={this.state.likeImg}
          alt=""
          onClick={this.likeClick}
        />
        <img className="img_icon bubble" alt="" src="/images/speech-bubble.png" />
        <img className="img_icon send" alt="" src="/images/send.png" />
        <p>{this.state.nbLike} likes</p>
        <p className="card-text">{this.props.description}</p>
      </div>

    );
  }
}
export default HeaderPost;
