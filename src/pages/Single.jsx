import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {getImages, getImagesById} from "../redux/Action/product/fetch"
import moment from "moment"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import "../pages/scss/single.scss"
import Search from '../component/Search';
import { useState } from 'react';
import Loading from '../component/Loading';

const Single = () => {
const {id} = useParams()
const dispatch = useDispatch()
const singleImage = useSelector(state => state.single)
let {loading, single} = singleImage



useEffect(() => {
  
    dispatch(getImagesById(id))

   
}, [id, dispatch]);

const settings_3 = {
    dots: false,
    infinite: false,
    speed: 500,
    arrow:true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 2000,
    className:"tags",

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]

    

    
  };
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setQuery(input)
    setInput("")
    dispatch(getImages( query))


}
  return <div>
            <Search handleInput={handleInput} input={input} handleSubmit={handleSubmit} />
      
       {loading ? <p><Loading /></p> :
      
     <>{single && 
      <div key={single.id}>
          {/* tags */}
          <div className="tags">
              <Slider {...settings_3}> 
              {single.tags.map((data, index) => <Link to={`/search/${data.title}`}><li key={index}>{data.title}</li></Link>)}
              </Slider>

          </div>

{/* img */}
            <div className="single__img" >
            <img src={single.urls.regular} alt={single.alt_description} />
            <button><a href={`${single.links.download}/&force=true`}>click to download</a> </button>
            </div>
          <div className="more-info">
             
            

              <div className="id"> <p>id</p><span>{single.id}</span></div>
               <div className="creat"><p>Created Date</p><span>{moment(single.created_at).format("MMM Do YY")}</span></div>
               <div className="creat"><p>Promoted Date</p><span>{moment(single.promoted_at).format("MMM Do YY")}</span></div>
                <div className="width"><p>Width</p><span>{single.width}px</span></div>
                <div className="height"><p>Height</p><span>{single.height}px</span></div>

            <div className="color"><p>Color</p><span>{single.color}</span> </div>

          {single.description &&  <div className="description"><p>description</p><span>{single.description}</span> </div>}
            <div className="like"><p>like</p><span>{single.likes}</span> </div>
            <div className="view"><p>views</p><span>{single.views}</span> </div>
            <div className="download"><p>downloads</p><span>{single.downloads}</span> </div>
            {single.location.title && <div className="download"><p>Location</p><span>{single.location.title}</span> </div>}


          </div>
      </div>
      }</> 
      }
  </div>;
};

export default Single;