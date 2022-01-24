import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ShowTags from '../component/ShowTags';
import {getImageByTag, loadMoreTags} from "../redux/Action/product/fetch"
import Loading from "../component/Loading"
import InfiniteScroll from 'react-infinite-scroll-component';
import "./scss/tags.scss"
import Search from '../component/Search';

function Tags() {
    const {tag} = useParams()
    const dispatch = useDispatch()
    const imgTag = useSelector(state => state.tags)
    let {loading, imgTags} = imgTag
    
    // dispatch  getImageByTag action when page load 
    useEffect(() => {
       dispatch(getImageByTag(tag))
    }, [dispatch, tag]);

    const [page, setPage] = useState(2);

    const fetchMore = () =>{
      setPage(page+1)
      dispatch(loadMoreTags(tag, page))
    }

    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [fixedTag, setFixedTag] = useState(false);
    const handleInput = (e)=>{
      setInput(e.target.value)
    }
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
      e.preventDefault()
      setQuery(input)
      setInput("")
      // dispatch(getImageByTag(query))
      
      
      
    }
    useEffect(() => {
      query && navigate(`/search/${query}`)
     
    }, [query]);
  
  // fixed tags on scroll 
  const fixedTagsOnScroll = (e) =>{
    if(window.pageYOffset > 300) {
      setFixedTag(true)
    }else{
      setFixedTag(false)
    }
  }
  window.addEventListener("scroll", fixedTagsOnScroll)
  
  
  
  return <div>
            <Search handleInput={handleInput} input={input} handleSubmit={handleSubmit} />

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
