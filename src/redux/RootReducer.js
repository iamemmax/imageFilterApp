import {combineReducers} from "redux"
import { getImages, getImagesById, getImagesByTag } from "./Reducer/getImage"

const rootReducer = combineReducers ({
    photos:getImages,
    single:getImagesById,
    tags:getImagesByTag
   
})

export default rootReducer

