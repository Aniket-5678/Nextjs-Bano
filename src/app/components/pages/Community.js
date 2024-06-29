import React from "react";
import "../style/style.css";

const Community = () => {
  return (
    <div className="community-container">
      <div className="commnuity-main">
        <h3>
          Your <span className="hobbyhighlight">Hobby</span> Your{" "}
          <span className="comunnity-highlight">commnuity</span>
        </h3>

        <button className="get-start-btn">Get started</button>

        <div className="hobby-image">
          <img src="communityone.svg"  alt="hobby" />

          <img src="communitytwo.svg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Community;
