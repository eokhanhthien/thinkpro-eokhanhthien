import React from 'react';
import SkeletonsElement from "./SkeletonsElement";

function SkeletonNews(props) {
    return (
        <div className="col l-4 m-6 c-12">
        <div className="News_item">
            <SkeletonsElement type="img-thumbnail"></SkeletonsElement>
            <SkeletonsElement type="text-50"></SkeletonsElement>
            <SkeletonsElement type="title"></SkeletonsElement>
        </div>
      </div>
    );
}

export default SkeletonNews;