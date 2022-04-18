import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import postApi from "../../api/postApi";
import SkeletonNewsItem from '../Functional/Skeletons/SkeletonNewsItem';
import "./NewsDetail.css"

function NewsDetail(props) {
    const { id } = useParams();
    const [News, setNews] = useState('');
    useEffect (()=>{  
        (async function () {
            let dbNews = await postApi.getAll("/posts", {
                _start: 0,
                _limit: 12,
                id:id,
              })
              setNews(dbNews.data[0])   
         
        }
        
        )()
        window.scrollTo(0, 0)
    },[])
    // console.log(News);
    return (
        <div>
{News?   <div className="Content-container News_title">
        <div className="grid wide">
          <img className="News_img_title" src={`https://media-api-beta.thinkpro.vn/${News.thumbnail}`} alt="" />
          <h2 className="News_detail_title">Windows 11 có cập nhật lớn đầu tiên, chính thức hỗ trợ ứng dụng Android</h2>
          <div className="News_item_time">{News.created_at}     </div>
        
          <div 
                className="Custom-for-SetInnerHTML "
                dangerouslySetInnerHTML={{
                  __html: News.content,
                }}
              />

        </div>
      </div> : <SkeletonNewsItem></SkeletonNewsItem>}

      </div>
    );
}

export default NewsDetail;