import React from "react";
import SkeletonsElement from "./SkeletonsElement";

function SkeletonArticle1(props) {
  return (

<div className="col l-3 m-4 c-6 Content-2-container-product-item">

<SkeletonsElement type="img-thumbnail"></SkeletonsElement>
  
  <div className="Content-2-container-product-item-small-text">
  <SkeletonsElement type="text"></SkeletonsElement>
  </div>
  <div className="Content-2-container-product-item-price">
  <SkeletonsElement type="text-8"></SkeletonsElement>
  </div>

  <div className="Content-2-container-product-item-gift">
  <SkeletonsElement type="text-8"></SkeletonsElement>
  </div>
  <div className="Content-2-container-product-item-gift">
  <SkeletonsElement type="text-8"></SkeletonsElement>
  </div>
    </div>
    

  );
}

export default SkeletonArticle1;
