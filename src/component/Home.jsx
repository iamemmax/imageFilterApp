import React, { useEffect, useState } from 'react'
import {getImages, LoadMoreImage} from "../redux/Action/product/fetch"
import {useDispatch, useSelector} from "react-redux"
import DisplayImage from './DisplayImage';
import "./css/home.scss"
// import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from './Search';
import Loading from '../component/Loading';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

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
    dispatch(LoadMoreImage(page, orient, sort, query))
    setPage(page+1)
}


const [fixedFilter, setfixedFilter] = useState(false);
  console.log(query);


  const handleHeader = () => {
  
      if(window.pageYOffset >  100){
          setfixedFilter(true)
          
      }else{
          setfixedFilter(false)
      }
  }
  window.addEventListener("scroll", handleHeader)

//   const settings_3 = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrow:true
//         }
//       }
//     ]
//   };
    return (
        <div>
            
            <Search handleInput={handleInput} input={input} handleSubmit={handleSubmit} />
      
              
                <InfiniteScroll
                dataLength={images.length}
                next={fetchMore}
                hasMore={true}
                // scrollThreshold={0.5}
                loader={loading && <Loading />}>
    {/* <Slider {...settings_3}> */}
    
                <div className={fixedFilter ?"filter fixedFilter" : "filter"}>
                    <button value="popular" onClick={handleSort} className='active filterBtn'>popular</button>
                    <button value="latest" onClick={handleSort} className='filterBtn'>latest</button>
                    <button value="oldest" onClick={handleSort} className='filterBtn'>oldest</button> 
                    <button value="portrait" onClick={handleOrientation} className='filterBtn'>portrait</button>
                    <button value='landscape' onClick={handleOrientation} className='filterBtn'>landscape</button>
                    <button value='squarish'  onClick={handleOrientation} className='filterBtn'>squarish</button>

                    {/* <select  className='filterBtn'  onChange={handleColor} id="">
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="yellow">yellow</option>
                        <option value="orange">orange</option>
                        <option value="red">red</option>
                        <option value="purple">purple</option>
                        <option value="magenta">magenta</option>
                        <option value="green">green</option>
                        <option value="teal">teal</option>
                        <option value="blue">blue</option>
                        <option value="black_and_white">black_and_white</option>
                        </select> */}
                    
                </div>
        {/* </Slider> */}

            <div className="display">
                {images?.map((data, index) => <DisplayImage img={data.urls.regular} alt={data.alt_description} title={data.user.username} userImg={data.user.profile_image.small} download={data.links.download} key={index}/>)}
            </div>
            </InfiniteScroll>


        </div>
    )
}

export default Home
