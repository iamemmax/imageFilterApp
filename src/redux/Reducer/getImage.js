import { FETCH_IMG_FAIL, FETCH_IMG_RESPONSE, FETCH_IMG_SUCCESS, GET_IMG_BY_ID_FAIL, GET_IMG_BY_ID_RESPONSE, GET_IMG_BY_ID_SUCCESS, GET_IMG_BY_TAG_FAIL, GET_IMG_BY_TAG_RESPONSE, GET_IMG_BY_TAG_SUCCESS, LOADMORE_IMG_FAIL, LOADMORE_IMG_RESPONSE, LOADMORE_IMG_SUCCESS, LOAD_MORE_TAG_FAIL, LOAD_MORE_TAG_RESPONSE, LOAD_MORE_TAG_SUCCESS } from "../constant/constant";

const initialState ={
    images:[],
    loading:true,
    page:0
}

export const getImages = (state = initialState, {type, payload}) =>{
    switch (type) {
        case FETCH_IMG_RESPONSE:
            return {...state, loading:true}
        case FETCH_IMG_SUCCESS:
                return {...state, images:[ ...payload],  loading:false}

        case LOADMORE_IMG_RESPONSE:
                return {...state, loading:true}
        case LOADMORE_IMG_SUCCESS:
            return{...state, images:[...state.images, ...payload], page:state.page+1, loading:false}
        case FETCH_IMG_FAIL:
            return{...state, loading:false, error:payload}
        case LOADMORE_IMG_FAIL:
                return{...state, loading:false, error:payload}
        default:
            return state;
    }
}
export const getImagesById = (state={}, {type, payload}) =>{
    switch (type) {
        case GET_IMG_BY_ID_RESPONSE:
            return {...state, loading:true}
            
        case GET_IMG_BY_ID_SUCCESS:
            return {...state, loading:false, single:payload}
        case GET_IMG_BY_ID_FAIL:
            return {...state, loading:false, error:payload}
        default:
            return state;
    }
}



const initial ={
    imgTags:[]
}
export const getImagesByTag = (state=initial, {type, payload}) =>{
    switch (type) {
        case GET_IMG_BY_TAG_RESPONSE:
        case LOAD_MORE_TAG_RESPONSE:
            return {...state, loading:true}
            
        case GET_IMG_BY_TAG_SUCCESS:
            return {...state, loading:false, imgTags:payload}
        case LOAD_MORE_TAG_SUCCESS:
            return{...state, imgTags:[...state.imgTags, ...payload], loading:false}

        case GET_IMG_BY_TAG_FAIL:
        case LOAD_MORE_TAG_FAIL:
            return {...state, loading:false, error:payload}
        default:
            return state;
    }
}

