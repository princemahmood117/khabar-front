// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const ServiceCard = ({ service,services }) => {
//     const { title, img, price, _id } = service;

//     const [foods,setFoods] = useState(services)



//     const handleDelete = (_id) => {
    
    
//         Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, confirm delete!",
//         }).then((result) => {
//           if (result.isConfirmed) {
    
       
//             fetch(`http://localhost:5000/food/${_id}`, {
//               method: "DELETE",
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 if (data.deletedCount > 0) {
//                   Swal.fire({
//                     title: "Deleted!",
//                     text: "Your coffee has been removed!",
//                     icon: "success",
//                   });
    
//                   const remaining = foods.filter(cof => cof._id !== _id)
//                   setFoods(remaining)
//                 }
    
//               });
    
//           }
//         });
//       }

//     return (
//         <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl">
//             <figure className="w-full h-48 md:h-60 overflow-hidden">
//                 <img 
//                     className="w-full h-full object-cover" 
//                     src={img} 
//                     alt={title} 
//                 />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">{title}</h2>
//                 <p className="text-orange-600 font-bold">Price: ${price}</p>

//                 <div className="card-actions">
//                     <Link to={`/checkout/${_id}`}>
//                     <button className="btn btn-md bg-red-500 hover:bg-red-700 text-white">Order Now</button></Link>
//                     <button onClick={() => handleDelete(_id)}  className="btn btn-md bg-red-500 hover:bg-red-700 text-white">Delete</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServiceCard;












import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceCard = ({ service, onDelete }) => {
  const { title, img, price, _id } = service;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/food/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food item has been removed!",
                icon: "success",
              });
              onDelete(_id); // Notify parent of deletion
            }
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl">
      <figure className="w-full h-48 md:h-60 overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600 font-bold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-md bg-red-500 hover:bg-red-700 text-white">Order Now</button>
          </Link>
          <button onClick={handleDelete} className="btn btn-md bg-red-500 hover:bg-red-700 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

