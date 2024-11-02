import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const axiosSecure = useAxiosSecure()

  // const url = `https://khabar-server.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
 

    axiosSecure.get(url)  // use of custom hook
    .then(res=> {
      setBookings(res.data)
    })

  }, [url,axiosSecure]);


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm delete!",
    })
    .then(result => {
      if(result.isConfirmed) { 
        fetch(`https://khabar-server.vercel.app/bookings/${id}`, {
          method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Removed!",
              icon: "success",
            });

            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
      }
    })
  }



  const handleConfirm = (id) => {

    fetch(`https://khabar-server.vercel.app/bookings/${id}`,{
      method: 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({status : 'Confirm'})
    })
    .then(res => res.json())
    .then(data => {
   

      if(data.modifiedCount > 0) {
        // uptate state

        const remaining = bookings.filter(booking => booking._id !== id);

        const updated = bookings.find(booking => booking._id === id);
        

        updated.status = 'Confirm'

        const newBooking = [updated, ...remaining]

        setBookings(newBooking);

      }
    })
    
  }

  return (
    <div> 
    
      <div className="overflow-x-auto mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {
                bookings.map(booking => <BookingTable key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingTable>)
            }
     
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
