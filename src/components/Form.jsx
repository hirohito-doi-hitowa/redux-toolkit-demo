import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postComment } from "../store/slices/commentsSlice";

export default function Form() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const onCommentChanged = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment(comment));
    setComment("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          id={"comment"}
          className="form-control"
          placeholder={"Write a comment ..."}
          value={comment}
          onChange={onCommentChanged}
        />
      </div>
    </form>
  );
}
