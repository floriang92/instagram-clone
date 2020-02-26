import React from "react";
import "./Comments.css";

class Comments extends React.Component {

  state = {
    comments: this.props.commentaires
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.state.comments.unshift({
      textComment: this.state.term,
      userImgComment: "/images/users/homer.jpg",
    });
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div>
        <div className="card-body d-flex flex-row">
          <div>

            <form onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} placeholder="Ajouter un commentaire" className="form-control" />
              <button className="btn btn-primary">Envoyer</button>
            </form>
            <br />
            <ul>
              {this.state.comments.map((comment) => {
                return (
                  <li>
                    <img
                      id="img_com"
                      className="rounded-circle mr-3"
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
