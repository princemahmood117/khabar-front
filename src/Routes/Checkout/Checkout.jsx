import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();

  const {price,title,_id,img} = service;

  const {user} = useContext(AuthContext)

  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const date = form.date.value;
    const email =  user?.email;


    const order = {
        customerName : name, 
        date,
        email,
        serviceID : _id,
        service : title,
        price,
        img
    }

    // console.log(order);


    fetch('http://localhost:5000/bookings',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(order)

    })
    .then(res=> res.json())
    .then(data=>{
        // console.log(data);
        if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "OrderConfirmed",
              icon: "success",
              confirmButtonText: "Done",
            });
          }

          form.reset()
    })




  }

  return (
    <div className="mt-6">
      <h1 className="text-xl md:text-3xl text-center">{title}</h1>

      <form className="p-2" onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              defaultValue={user?.displayName}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
            name="date"
              type="date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              defaultValue={user?.email}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
            // name="due"
              type="text"
              defaultValue={'$' + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
