import React from "react";
import preloaderImg from '../../assets/images/loader.svg'


 const Preloader = () => {
   return  <div>
         <img src={preloaderImg} alt={'loading... '}/>
     </div>
 }

export default Preloader;