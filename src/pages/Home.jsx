import React, { useEffect, useState } from 'react'
import {getImages, LoadMoreImage} from "../redux/Action/product/fetch"
import {useDispatch, useSelector} from "react-redux"
import DisplayImage from '../component/DisplayImage';
import "../pages/scss/home.scss"
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from '../component/Search';
import Loading from '../component/Loading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Helmet} from "react-helmet";
function Home() {
    // filter

    const filter = document.querySelector(".filter")
const filterButton = document.querySelectorAll(".filterBtn")
    for (const filterBtn of filterButton) {
        filterBtn.addEventListener("click", (e)=>{
            filter.querySelector(".active").classList.remove("active")
            filterBtn.classList.add("active")
        })
    }


    const [query, setQuery] = useState("");
    const [input, setInput] = useState(""); 
    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setQuery(input)
        setInput("")
    }


    const [sort, setSort] = useState('latest');
    const [orient, setOrientation] = useState('squarish');
    const handleSort = (e) =>{
        setSort(e.target.value)
    }
// console.log(sort);

const handleOrientation = (e) =>{
    setOrientation(e.target.value)
}


    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    let {loading, images} = photos
    
    
    const [page, setPage] = useState(2);
    // const [color, setColor] = useState('black');
    
    // const handleColor = (e) =>{
    //     setColor(e.target.value)
    // }
    
    
    useEffect(() => {
        dispatch(getImages(orient, sort, query))
    }, [dispatch, query, orient, sort]);

const fetchMore =() =>{
    dispatch(LoadMoreImage(query, orient, sort, page))
    setPage(page+1)
}


const [fixedFilter, setfixedFilter] = useState(false);
  console.log(query);


  const handleHeader = () => {
  
      if(window.pageYOffset >  320){
          setfixedFilter(true)
          
      }else{
          setfixedFilter(false)
      }
  }
  window.addEventListener("scroll", handleHeader)
  const settings_3 = {
    dots: false,
    infinite: false,
    speed: 500,
    arrow:true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 2000,
    className:"filter",

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
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
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]

    

    
    };
    
    
    return (

        <div className='home-container'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Homepage</title>
                <meta name="description" content="Image gallery application" />
                <meta name="keyword" content="iamge, search latest popular landscape portriate" />
            </Helmet>
            
            <Search handleInput={handleInput} input={input} handleSubmit={handleSubmit} />
      
              
                <InfiniteScroll
                dataLength={images.length}
                next={fetchMore}
                hasMore={true}
                // scrollThreshold={0.5}
                loader={loading && <Loading />}>
    
                { images.length > 0  && 
                    <div className={fixedFilter ?"filter fixedFilter" : "filter"}>
                        <Slider {...settings_3}>

                            <button value="latest" onClick={handleSort} className=' active filterBtn'>latest</button>
                    <button value="popular" onClick={handleSort} className=' filterBtn'>popular</button>
                    <button value="oldest" onClick={handleSort} className='filterBtn'>oldest</button> 
                    <button value="portrait" onClick={handleOrientation} className='filterBtn'>portrait</button>
                    <button value='landscape' onClick={handleOrientation} className='filterBtn'>landscape</button>
                    <button value='squarish'  onClick={handleOrientation} className='filterBtn'>squarish</button>


                </Slider>
                    
                     </div>
                
            }
        {/* </Slider> */}

          <div className="display-container">

                    {/* {loading && <Loading /> } */}
                <div className="display">
                { images?.map((data, index) => <DisplayImage data={data} index={index}/>)}

                </div>
            </div>
            </InfiniteScroll>


        </div>
       
    )
}

export default Home
