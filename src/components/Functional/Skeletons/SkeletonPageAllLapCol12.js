import React from "react";
import Shimmer from "./Shimmer";
import SkeletonsElement from "./SkeletonsElement";

function SkeletonArticle(props) {
  return (
    <div className="col l-12 Content-2-container-product-col-12 animation-shimmer">
    <div className="row no-gutters">
      <div className="col l-3">

        <div className="Content-2-container-product">
        <SkeletonsElement type="thumbnail-200"></SkeletonsElement>
        </div>

      </div>
      <div className="col l-5">
        <div className="Content-2-container-product-item-name"><SkeletonsElement type="text-70"></SkeletonsElement></div>
        <div className="Content-2-container-product-item-gift"><SkeletonsElement type="text-70"></SkeletonsElement></div>
        <div className="row no-gutters">
            
            
       <SkeletonsElement type="thumbnail-30"></SkeletonsElement> 
              
          {/* <div className="Content-2-container-product-info-detail-laptop-item-size-img mt-50 mt-r-10"> <img src="./image/logo.svg" alt="" /></div>
          <div className="Content-2-container-product-info-detail-laptop-item-size-img mt-50 mt-r-10"> <img src="./image/logo.svg" alt="" /></div> */}
        </div>
      </div>
      <div className="col l-4">
        <span></span> <span className="Content-2-container-product-item-price"><SkeletonsElement type="text-50"></SkeletonsElement></span>
        <div className="Content-2-container-product-item-gift Detail-sticky-price-sale"><SkeletonsElement type="text-50"></SkeletonsElement></div>
        <div className="Content-2-container-product-item-gift"><SkeletonsElement type="text-50"></SkeletonsElement></div>
      </div>
    </div>
    <Shimmer></Shimmer>
  </div>
  );
}

export default SkeletonArticle;
