import React from 'react';
import Shimmer from './Shimmer';
import SkeletonsElement from "./SkeletonsElement";

function SkeletonNews(props) {
    return (
        <div className="col l-4 m-6 c-12 animation-shimmer">
        <div className="News_item">
            <SkeletonsElement type="img-thumbnail_2"></SkeletonsElement>
            <SkeletonsElement type="text-50"></SkeletonsElement>
            <SkeletonsElement type="title"></SkeletonsElement>
        </div>
        <Shimmer></Shimmer>
      </div>
    );
}

export default SkeletonNews;