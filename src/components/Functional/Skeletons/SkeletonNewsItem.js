import React from 'react';
import Shimmer from './Shimmer';
import SkeletonsElement from "./SkeletonsElement";

function SkeletonNewsItem(props) {
    return (
        <div className="Content-container News_title animation-shimmer">
        <div className="grid wide">
        <SkeletonsElement type="img-full"></SkeletonsElement>
        <SkeletonsElement type="text-50"></SkeletonsElement>
        <SkeletonsElement type="text-70"></SkeletonsElement>
        <SkeletonsElement type="text"></SkeletonsElement>
        <SkeletonsElement type="text-50"></SkeletonsElement>
        <SkeletonsElement type="text-70"></SkeletonsElement>
        <SkeletonsElement type="text-70"></SkeletonsElement>
        <SkeletonsElement type="text-70"></SkeletonsElement>
        <SkeletonsElement type="text-70"></SkeletonsElement>
        <SkeletonsElement type="text"></SkeletonsElement>
        <SkeletonsElement type="img-full"></SkeletonsElement>
        <SkeletonsElement type="text-50"></SkeletonsElement>
        <SkeletonsElement type="text-70"></SkeletonsElement>
        <SkeletonsElement type="text"></SkeletonsElement>
        <SkeletonsElement type="img-full"></SkeletonsElement>

        </div>
        <Shimmer></Shimmer>
      </div>
    );
}

export default SkeletonNewsItem;