
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFood = () => {

    const updateCoffee = useLoaderData();

    const { _id, title, quantity, price, taste, details, img } = updateCoffee;
   

    const handleUpdateFood = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const title = form.title.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const img = form.img.value;
    
        const updateFood = {
          title,
          quantity,
          price,
          taste,
          details,
          img,
        };
    
        console.log(updateFood);
    
        // (A) send the 'newCoffee' data to the server
    
        // have to send from client to server, so have to use server side's url where the data will be stored
        fetch(`http://localhost:5000/food/${_id}`, {
          // request will be sent to this url
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateFood),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Information Updated Successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
          });
      };

    return (
    <div>

    
    <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-3xl text-center font-extrabold text-black">
          Update <span className="text-purple-600">{title}</span> info here
        </h1>

        <form onSubmit={handleUpdateFood}>
          {/* coffe-name and quantity */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  className="input input-bordered rounded-sm w-full"
                  name="title"
                  defaultValue={title}
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered rounded-sm w-full"
                  name="quantity"
                  defaultValue={quantity}
                />
              </label>
            </div>
          </div>

          {/* supplier and taste */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price Name"
                  className="input input-bordered rounded-sm w-full"
                  name="price"
                  defaultValue={price}
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Taste"
                  className="input input-bordered rounded-sm w-full"
                  name="taste"
                  defaultValue={taste}
                />
              </label>
            </div>
          </div>

          {/* category and details */}

          <div className="md:flex gap-8">
            {/* <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered rounded-sm w-full"
                  name="category"
                  defaultValue={category}
                />
              </label>
            </div> */}

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Details"
                  className="input input-bordered rounded-sm w-full"
                  name="details"
                  defaultValue={details}
                />
              </label>
            </div>
          </div>

          {/* photoURL */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered rounded-sm w-full"
                  name="img"
                  defaultValue={img}
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-slate-500"
          />
        </form>
      </div>

  






    </div>
    );
};

export default UpdateFood;