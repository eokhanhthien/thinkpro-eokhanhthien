import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import postApi from '../../api/postApi';
import SkeletonNews from '../Functional/Skeletons/SkeletonNews';
import "./News.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function News(props) {
    const [News, setNews] = useState('');
    useEffect (()=>{
        (async function () {
            let dbNews = await postApi.getAll("/posts", {
                _start: 0,
                _limit: 12,
              })
              setNews(dbNews.data)   
        }
        
        )()
        window.scrollTo(0, 0)
    },[])


    // console.log(News);
    return (
        <div className="Content-container News_container">
  <div className="grid wide">
    <div className="row">

        <div className="col l-1 dis-padding">
            <div className=" Size-logo">
              <img src="../../image/logosmall.svg" alt="" /> 
            </div>
        </div>
    <div className="col l-1"><span>/ News</span></div>
    <div className="col l-12 Content-2-container-reduce-price"><h1>Tin tức mới nhất</h1></div>
     

        {
            News ? News.map((item,index)=>{
                return ( 
                <div className="col l-4 m-6 c-12" 
                key={index}>
                 <div className="News_item">
                 <NavLink to={`/PageNewsDetail/${item.id}`}><img src={`https://media-api-beta.thinkpro.vn/${item.thumbnail}`} alt="" /></NavLink>
                  <div className="News_item_time">{item.created_at}     </div>
                   <NavLink to={`/PageNewsDetail/${item.id}`}><div className="News_item_title">{item.title} </div></NavLink>
                </div>
              </div>)
            }) : (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12].map((item, index) => {
                return <SkeletonNews key={index}></SkeletonNews>;
              })
            )
        }




    </div>
  </div>
</div>

    );
}

export default News;