
// import { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const services = useServices(); // using custom-hook for not duplicating

    // const [services,setServices] = useState([])

    // // loads services from the database

    // useEffect(()=>{

    //     fetch('http://localhost:5000/services')
    //     .then(res=> res.json())
    //     .then(data => setServices(data))

    // },[])
    
    return (
        <div className="mt-4 p-2">

            <div className="space-y-2 text-center">
                <h3 className="text-2xl text-orange-600 font-bold">Available Foods</h3>
              
                <p>Find your desired foods here </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 space-y-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;