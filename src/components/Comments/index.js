import React from "react";
import "./Comments.css";

class Comments extends React.Component {
  state = {
    commentaires: [
      { id: 1, texte: "Lorem ipsum" },
      { id: 2, texte: "est simplement du faux texte employé" },
      {
        id: 3,
        texte: "dans la composition et la mise en page avant impression."
      }
    ]
  };

  sendComment = function() {
    let texte = document.getElementById("inputComment").value;
    const commentaires = this.state.commentaires.slice();
    commentaires.push({ texte: texte });
    this.setState({ commentaires: commentaires });
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

            <ul>
              <li>
                <img
                  id="img_com"
                  class="rounded-circle mr-3"
                  alt=""
                  src={this.props.img}
                />
                <span>{this.props.comment}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Comments;
