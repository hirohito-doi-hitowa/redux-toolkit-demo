import React from "react";
import Count from "./Count";
import Buttons from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import { fetchImage } from "../store/imageSlice";

export default function Card() {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.image.imageUrl);

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <button
        className="btn btn-light"
        onClick={() => {
          dispatch(fetchImage());
        }}
      >
        <i className="fa fa-chevron-right" />
      </button>
      <Count />
      <div className="card-body">
        <Buttons />
      </div>
    </div>
  );
}
