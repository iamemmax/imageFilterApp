import { FETCH_IMG_FAIL, FETCH_IMG_RESPONSE, FETCH_IMG_SUCCESS, LOADMORE_IMG_FAIL, LOADMORE_IMG_RESPONSE, LOADMORE_IMG_SUCCESS } from "../constant/constant";

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

