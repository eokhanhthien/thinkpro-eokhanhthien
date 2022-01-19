import React from "react";
import SkeletonsElement from "./SkeletonsElement";

function SkeletonArticle(props) {
  return (

<div className="col l-2-4 m-3 c-6 Content-2-container-product-item">
        <div className="Content-2-container-product">
          <img src={`https://lumen.thinkpro.vn/${props.thumbnail}`} alt="" />
        </div>
  
      <div className="Content-2-container-product-info">
        <div className="Content-2-container-product-item-name">
        <SkeletonsElement type="img-thumbnail"></SkeletonsElement>
        </div>
        <div className="Content-2-container-product-item-small-text">
        <SkeletonsElement type="text"></SkeletonsElement>
        </div>
        <div className="Content-2-container-product-item-price">
        <SkeletonsElement type="text"></SkeletonsElement>
        </div>

        <div className="Content-2-container-product-item-gift">
        <SkeletonsElement type="text"></SkeletonsElement>
        </div>
      </div>

    </div>
    

  );
}

export default SkeletonArticle;
