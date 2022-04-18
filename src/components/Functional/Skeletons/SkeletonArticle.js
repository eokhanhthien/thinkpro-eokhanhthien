import React from "react";
import SkeletonsElement from "./SkeletonsElement";

function SkeletonArticle(props) {
  return (

<div className="col l-2-4 m-3 c-6 Content-2-container-product-item">
      
      
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

export default SkeletonArticle;
