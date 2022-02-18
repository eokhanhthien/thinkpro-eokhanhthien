import React from 'react';
import SkeletonsElement from "./SkeletonsElement";

function SkeletonNewsItem(props) {
    return (
        <div className="Content-container News_title">
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
      </div>
    );
}

export default SkeletonNewsItem;