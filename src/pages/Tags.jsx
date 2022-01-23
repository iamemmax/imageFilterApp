import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShowTags from '../component/ShowTags';
import {getImageByTag, loadMoreTags} from "../redux/Action/product/fetch"
import Loading from "../component/Loading"
import InfiniteScroll from 'react-infinite-scroll-component';
import "./scss/tags.scss"

function Tags({match}) {
    const {tag} = useParams()
    console.log(tag);
    const dispatch = useDispatch()
    const imgTag = useSelector(state => state.tags)
    let {loading, imgTags} = imgTag
    
    console.log(match);
    // dispatch  getImageByTag action when page load 
    useEffect(() => {
       dispatch(getImageByTag(tag))
    }, [dispatch, tag]);

    const [page, setPage] = useState(2);

    const fetchMore = () =>{
      setPage(page+1)
      dispatch(loadMoreTags(tag, page))
    }
  return <div>
    {loading &&  <Loading /> }
    <>
    <InfiniteScroll
                dataLength={imgTags.length}
                next={fetchMore}
                hasMore={true}
                // scrollThreshold={0.5}
                // loader={loading && <Loading />}
                >
    
          <div className="tag__container">
            <div className="arrange__tag">

          {imgTags && imgTags.map((data, index) =><ShowTags  data={data} index={index}/>)}
      </div>

    </div>
    </InfiniteScroll>
                </>
{/* } */}
  </div>;
}

export default Tags;
