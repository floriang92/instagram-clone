import React from "react";
import "./Comments.css";

class Comments extends React.Component {

  state = {
    comments: this.props.commentaires
  }

  sendComment = function () {
    let texte = document.getElementById("inputComment").value;
    const commentaire = this.state.comments.slice();
    commentaire.unshift({ textComment: texte, userImgComment: "/images/users/homer.jpg" });
    this.setState({ comments: commentaire });
    document.getElementById("inputComment").value = "";
  };

  render() {
    return (
      <div>
        <div class="card-body d-flex flex-row">
          <div>
            <form>
              <input
                type="text"
                class="form-control noBorder"
                placeholder="Add a comment..."
                id="inputComment"
              />
              <boutton
                type="button"
                class="btn btn-primary"
                onClick={this.sendComment.bind(this)}
              >
                Commenter
              </boutton>
            </form>
            <br />
            <ul>
              {this.state.comments.map((comment, k) => {
                return (
                  <li>
                    <img
                      id="img_com"
                      class="rounded-circle mr-3"
                      alt="userImg"
                      src={comment.userImgComment}
                    />
                    <span>{comment.textComment}</span>
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Comments;
