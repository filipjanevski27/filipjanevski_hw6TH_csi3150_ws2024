import React from "react";
import "./TravelBlog.css";

function TravelBlog(props) {
  return (
    <div className="TravelBlog">
      <h3>{props.place}</h3>
      <div className="imgs">
        <img src={props.placeImg1} alt="place 1" />
        <img src={props.placeImg2} alt="place 2" />
        <img src={props.placeImg3} alt="place 3" />
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default TravelBlog;
