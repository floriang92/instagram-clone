import React from "react";
import "./Post.css";
import Comments from "../Comments/index";

class Post extends React.Component {
  state = {
    nbLike: 100,
    like: false
  };

  incrementLike = function() {
    this.setState(state => {
      return { nbLike: state.nbLike + 1, like: true };
    });
  };

  decrementLike = function() {
    this.setState(state => {
      return { nbLike: state.nbLike - 1, like: false };
    });
  };

  changeLikeIcon = function() {
    if (!this.state.like) {
      return (document.getElementById("img_heart").src =
        "/images/heart_like.png");
    } else {
      return (document.getElementById("img_heart").src = "/images/heart.png");
    }
  };

  likeClick = function() {
    if (!this.state.like) {
      this.incrementLike();
    } else {
      this.decrementLike();
    }
    this.changeLikeIcon();
  };

  render() {
    return (
      <div class="card centre" id="card_style">
        <div class="card-body d-flex flex-row">
          <img id="img_logo" class="rounded-circle mr-3" alt="" />
          <div>
            <h4 class="card-title font-weight-bold mb-2">Une bière et jivay</h4>
            <p class="card-text">
              <i class="far fa-clock pr-2"></i>28/03/2019
            </p>
          </div>
        </div>
        <div class="card-body">
          <img class="card-img-top" id="img_post" alt="" />
          <img
            id="img_heart"
            src="/images/heart.png"
            alt=""
            onClick={this.likeClick.bind(this)}
          />
          <img class="img_icon bubble" alt="" src="/images/speech-bubble.png" />
          <img class="img_icon send" alt="" src="/images/send.png" />
          <p>{this.state.nbLike} likes</p>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Comments></Comments>
        </div>
      </div>
    );
  }
}
export default Post;
