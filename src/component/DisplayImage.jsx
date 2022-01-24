import React from 'react';
import { useState } from 'react';
import * as faIcons  from "react-icons/fa";
// import {Link} from "react-router-dom"
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';


function DisplayImage({data}) {

    const [toggleDownloadInfo, setToggleDownloadInfo] = useState(null);
  return (
    <div  className='img-container'>
      
           <Link to={`/${data.id}`}>
        <div className="img">
        <img src={data.urls.regular} alt={data.alt_description} />
        </div>
           </Link>
           <OutsideClickHandler onOutsideClick={() => setToggleDownloadInfo(false)} >
            <div className="title-info">
              <div className="userInfo">
                  <img src={data.user.profile_image.small} alt={data.user.profile_image.small} />
              <p>{data.user.username}</p>
              </div>


           <div className="download">
            <button onClick={()=> setToggleDownloadInfo(!toggleDownloadInfo)}><faIcons.FaDownload/></button>

           </div>
        </div>
                <div className={toggleDownloadInfo ? 'download-info showdownload' : 'download-info '}>
                    <li><a href={`${data.links.download}/&force=true&w=640`}>small</a></li>
                    <li><a href={`${data.links.download}/&force=true&w=1920`}>medium</a></li>
                    <li><a href={`${data.links.download}/&force=true&w=2400`}>large</a></li>
                 
                </div>


      
    </OutsideClickHandler>
    
  </div>
  )
  
}

export default DisplayImage;
