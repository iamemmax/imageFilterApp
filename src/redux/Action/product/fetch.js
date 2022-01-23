import axios from "axios"
import { FETCH_IMG_FAIL, FETCH_IMG_RESPONSE, FETCH_IMG_SUCCESS, GET_IMG_BY_ID_FAIL, GET_IMG_BY_ID_RESPONSE, GET_IMG_BY_ID_SUCCESS, GET_IMG_BY_TAG_FAIL, GET_IMG_BY_TAG_RESPONSE, GET_IMG_BY_TAG_SUCCESS, LOADMORE_IMG_FAIL, LOADMORE_IMG_RESPONSE, LOADMORE_IMG_SUCCESS, LOAD_MORE_TAG_FAIL, LOAD_MORE_TAG_RESPONSE, LOAD_MORE_TAG_SUCCESS } from "../../constant/constant"



let accessKey = process.env.REACT_APP_ACCESSKEY
// get image
export const getImages = (orient, sort,  query) => async (dispatch) =>{
    dispatch({type:FETCH_IMG_RESPONSE})
    console.log(orient, sort,  query);
     
    
   let url
   let mainUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=1&per_page=30&order_by=${sort}&orientation=${orient}`

   let SearchUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&orientation=${orient}&per_page=30&order_by=${sort}&query=${query}`

 query ? url = `${SearchUrl}` : url = `${mainUrl}`

let data
    try {
        const response = await axios.get(url)
      console.log(response);
      query ? data = response.data.results : data=response.data
        dispatch({type:FETCH_IMG_SUCCESS, payload:data})
        console.log(data);
    } catch (error) {
       dispatch({type:FETCH_IMG_FAIL, payload:error.message}) 
    }
}

export const LoadMoreImage = (query, orient, sort, page) => async (dispatch) =>{
    dispatch({type:LOADMORE_IMG_RESPONSE})
    
    
   

   let url
let mainUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=30&page=${page}&order_by=${sort}`

 let SearchUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&per_page=30&orientation=${orient}&order_by=${sort}&page=${page}`

 query ? url = `${SearchUrl}` : url = `${mainUrl}`

let data
    try {
        const response = await axios.get(url)
      console.log(response);
      query ? data = response.data.results : data=response.data
        dispatch({type:LOADMORE_IMG_SUCCESS, payload:data})
        console.log(data);
    } catch (error) {
       dispatch({type:LOADMORE_IMG_FAIL, payload:error.message}) 
    }
}

export const getImagesById = (id) => async (dispatch) =>{
  dispatch({type:GET_IMG_BY_ID_RESPONSE})

  try {
    let url = `https://api.unsplash.com/photos/${id}?client_id=${accessKey}`
    const  response = await axios.get(url)
    dispatch({type:GET_IMG_BY_ID_SUCCESS, payload:response.data})

  } catch (error) {
    dispatch({type:GET_IMG_BY_ID_FAIL, payload:error.message})

    
  }
 
}

// fetch images by tags
export const getImageByTag = (tag) => async (dispatch) =>{
  
  dispatch({type:GET_IMG_BY_TAG_RESPONSE})
  try {
    let url = `https://api.unsplash.com/search/photos?query=${tag}&client_id=${accessKey}&per_page=30&page=1`
     const response = await axios.get(url)
     console.log(response);
     dispatch({type:GET_IMG_BY_TAG_SUCCESS, payload:response.data.results})
  } catch (error) {
    dispatch({type:GET_IMG_BY_TAG_FAIL, payload:error.message })
  }
}


// loadmore images on scroll
export const loadMoreTags = (tag, page) => async(dispatch) =>{
  console.log(tag);
  dispatch({type:LOAD_MORE_TAG_RESPONSE})
  try {
    let url =`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${tag}&per_page=30&page=${page}`
    const response = await axios.get(url)
    dispatch({type:LOAD_MORE_TAG_SUCCESS, payload:response.data.results})
  } catch (error) {
    dispatch({type:LOAD_MORE_TAG_FAIL, payload:error.message})
  }
}