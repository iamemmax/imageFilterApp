import React from 'react';
import * as faIcons  from "react-icons/fa";
import { Link } from 'react-router-dom';


function ShowTags({data, index}) {
  return <div>
      
          <div className="tag__box" >
         <Link to={`/${data.id}`}>
         <div className="img-tag" key={index}>
          <img src={data.urls.regular} alt="" />
         </div>
         </Link>
        
       <div className="more__info">
              <div className="username">

                  <div className="img">
                      <img src={data.user.profile_image.small} alt="" />
              </div>
              <div className="user">
                      <p>{data.user.username}</p>
                  </div>
              </div>

              <div className="download">
              <button> <a href={`${data.links.download}/&force`}><faIcons.FaDownload/></a></button>

              </div>
          </div>
      </div>
      
      
  </div>;
}

export default ShowTags
