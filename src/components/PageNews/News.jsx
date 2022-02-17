import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import postApi from '../../api/postApi';
import "./News.css"

function News(props) {
    const [News, setNews] = useState('');
    useEffect (()=>{
        (async function () {
            let dbNews = await postApi.getAll("/posts", {
                _start: 0,
                _limit: 12,
              })
              setNews(dbNews)   
        }
        
        )()
    },[])


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
                return ( <div className="col l-4 m-6 c-12" key={index}>
                <div className="News_item">
                  <img src={`https://lumen.thinkpro.vn/${item.thumbnail}`} alt="" />
                  <div className="News_item_time">{item.created_at}  |   {item.created_by.name}</div>
                  <div className="News_item_title">Ngày hội Công nghệ Giáo dục 2021  Tương lai Giáo dục hậu Covid </div>
                </div>
              </div>)
            }) : null
        }

 {/* <div className="col l-4 m-6 c-12">
        <div className="News_item">
          <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/463/2021/12/Picture1-480x270.png" alt="" />
          <div className="News_item_time">Dec 24, 2021  |   Microsoft Vietnam Communications</div>
          <div className="News_item_title">Ngày hội Công nghệ Giáo dục 2021 – Tương lai Giáo dục hậu Covid </div>
        </div>
      </div>
      <div className="col l-4 m-6 c-12">
        <div className="News_item">
          <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/463/2021/12/Picture1-480x270.png" alt="" />
          <div className="News_item_time">Dec 24, 2021  |   Microsoft Vietnam Communications</div>
          <div className="News_item_title">Ngày hội Công nghệ Giáo dục 2021 – Tương lai Giáo dục hậu Covid </div>
        </div>
      </div>
      <div className="col l-4 m-6 c-12">
        <div className="News_item">
          <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/463/2021/12/Picture1-480x270.png" alt="" />
          <div className="News_item_time">Dec 24, 2021  |   Microsoft Vietnam Communications</div>
          <div className="News_item_title">Ngày hội Công nghệ Giáo dục 2021 – Tương lai Giáo dục hậu Covid </div>
        </div>
      </div>
      <div className="col l-4 m-6 c-12">
        <div className="News_item">
          <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/463/2021/12/Picture1-480x270.png" alt="" />
          <div className="News_item_time">Dec 24, 2021  |   Microsoft Vietnam Communications</div>
          <div className="News_item_title">Ngày hội Công nghệ Giáo dục 2021 – Tương lai Giáo dục hậu Covid </div>
        </div>
      </div> */}


    </div>
  </div>
</div>

    );
}

export default News;