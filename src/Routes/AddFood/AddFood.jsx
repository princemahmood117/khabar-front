

import Swal from "sweetalert2";

const AddFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const quantity = form.quantity.value;
    const pickup = form.pickup.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const price = form.price.value;
    const img = form.img.value;

    const newFood = {
      title,
      quantity,
      pickup,
      taste,
      details,
      img,
      price,
    };

  

    fetch("https://khabar-server.vercel.app/food", {
      // request will be sent to this url
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food Added",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
        form.reset();
      });
  };
  return (
    <div>
     

      <div className="bg-[#F4F3F0] p-20">
        <h1 className="text-red-500 text-3xl text-center font-bold">
          Add New Food 🥫 
        </h1>

        <form onSubmit={handleAddFood}>
          {/* coffe-name and quantity */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Food Name"
                  className="input input-bordered rounded-sm w-full"
                  name="title"
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
                />
              </label>
            </div>
          </div>

          {/* supplier and taste */}

          <div className="md:flex gap-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="input input-bordered rounded-sm w-full"
                  name="pickup"
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
                />
              </label>
            </div>
          </div>

          {/* category and details */}

          <div className="md:flex gap-8">
         

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered rounded-sm w-full"
                  name="price"
                />
              </label>
            </div>

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
                />
              </label>
            </div>


          </div>

          {/* photoURL */}

          <div className="md:flex gap-8 mb-4">
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
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Food"
            className="btn btn-block bg-slate-500"
          />
        </form>
      </div>
    </div>
  );
};

export default AddFood;
