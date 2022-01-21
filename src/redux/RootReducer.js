import {combineReducers} from "redux"
import { getImages } from "./Reducer/getImage"

const rootReducer = combineReducers ({
    photos:getImages,
   
})

export default rootReducer

