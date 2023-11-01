// custom hook

// Custom hook is used for DRY (Do not repeat yourself)

import { useEffect, useState } from "react";

const useServices = () => {
   const [services,setServices] = useState([]);
   useEffect(()=>{
    fetch('https://car-doctor-server-i2w9ixknm-shahidul-islams-projects.vercel.app/services')
    .then(res=>res.json())
    .then(data=>setServices(data));
   },[])

   return services;
};

export default useServices;