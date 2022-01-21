import axios from "axios"
import { FETCH_IMG_FAIL, FETCH_IMG_RESPONSE, FETCH_IMG_SUCCESS, LOADMORE_IMG_FAIL, LOADMORE_IMG_RESPONSE, LOADMORE_IMG_SUCCESS } from "../../constant/constant"



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

export const LoadMoreImage = (page, orient, sort,  query) => async (dispatch) =>{
    dispatch({type:LOADMORE_IMG_RESPONSE})
    
    
   

   let url
let mainUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=30&page=${page}&order_by=${sort}`

 let SearchUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${page}&per_page=30&orientation=${orient}&order_by=${sort}&query=${query}&orientation=${orient}`

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