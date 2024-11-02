import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl">
            <figure className="w-full h-48 md:h-60 overflow-hidden">
                <img 
                    className="w-full h-full object-cover" // Cover the container while maintaining aspect ratio
                    src={img} 
                    alt={title} 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-600 font-bold">Price: ${price}</p>

                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-md bg-orange-600 hover:bg-orange-700 text-white">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
