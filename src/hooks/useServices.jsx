// custom hook

// Custom hook is used for DRY (Do not repeat yourself)

import { useEffect, useState } from "react";

const useServices = (asc) => {
   const [services,setServices] = useState([]);
   useEffect(()=>{
    fetch(`http://localhost:5000/services?sort=${asc?'asc':'desc'}`)
    .then(res=>res.json())
    .then(data=>setServices(data));
   },[asc])

   return services;
};

export default useServices;