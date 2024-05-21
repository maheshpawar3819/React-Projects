import React from "react";

const Webseries = (props) => {
  return (
    <>
      <h2 className="heading">
        Hotstar <span className="Head-span">Specials</span>
      </h2>

      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="img_card" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link}>
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webseries;
