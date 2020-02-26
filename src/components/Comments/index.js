import React from "react";
import "./Comments.css";

class Comments extends React.Component {
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
                <span>{this.props.textComment}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Comments;
