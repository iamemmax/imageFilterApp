import React from 'react';
import { useState } from 'react';
import * as faIcons  from "react-icons/fa";
// import {Link} from "react-router-dom"
import OutsideClickHandler from 'react-outside-click-handler';


function DisplayImage({img, alt, title, userImg, download}) {

    const [toggleDownloadInfo, setToggleDownloadInfo] = useState(null);
  return <div  className='img-container'>
      
        <div className="img">
        <img src={img} alt={alt} />
        </div>
           <OutsideClickHandler onOutsideClick={() => setToggleDownloadInfo(false)} >
        <div className="title-info">
           <div className="userInfo">
               <img src={userImg} alt="" />
           <p>{title}</p>
           </div>
           

           <div className="download">
            <button onClick={()=> setToggleDownloadInfo(!toggleDownloadInfo)}><faIcons.FaDownload/></button>

           </div>
        </div>
                <div className={toggleDownloadInfo ? 'download-info showdownload' : 'download-info '}>
                    <li><a href={`${download}/&force=true&w=640`}>small</a></li>
                    <li><a href={`${download}/&force=true&w=1920`}>medium</a></li>
                    <li><a href={`${download}/&force=true&w=2400`}>large</a></li>
                 
                </div>


      
    </OutsideClickHandler>
    
  </div>;
}

export default DisplayImage;
