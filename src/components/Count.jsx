import React, { useContext } from "react";
import { useSelector } from "react-redux";

export default function Count() {
  const likesCount = useSelector((state) => state.likes.value);
  const commentsCount = useSelector((state) => state.comments.length);

  return (
    <div className="row reactions-count">
      <div className="col-sm" align="left">
        <i className="fa fa-thumbs-up" />
        {likesCount}
      </div>
      <div className="col-sm" align="right">
        {commentsCount} comments
      </div>
    </div>
  );
}
