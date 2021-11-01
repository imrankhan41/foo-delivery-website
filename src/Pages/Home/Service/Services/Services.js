import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("https://bloodcurdling-nightmare-55136.herokuapp.com/services")
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div id="services" className="m-auto mt-5 row ">
        <h1 className="text-primary fw-bolder">Our Services</h1>
      <div className="cards">
      {
            services.map(service=><Service
            
            key={service.name}
            service={service}>

            </Service>)
        }
      </div>
    </div>
    );
};

export default Services;