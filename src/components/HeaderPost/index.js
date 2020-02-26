import React from "react";
import "./HeaderPost.css";

class HeaderPost extends React.Component {
  render() {
    return (
      <div className="card-body d-flex flex-row">
        <img id="img_logo" src={this.props.userImg} className="rounded-circle mr-3" alt="" />
        <div>
          <h4 className="card-title font-weight-bold mb-2">{this.props.userName}</h4>
          <p className="card-text">
            <i className="far fa-clock pr-2"></i>{this.props.date}
          </p>
        </div>
      </div>
    );
  }
}
export default HeaderPost;
