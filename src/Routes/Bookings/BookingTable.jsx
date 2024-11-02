

const BookingTable = ({ booking,handleDelete,handleConfirm }) => {
  const { email, img, price, date, service, _id, status } = booking;


  return (
    <tr>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            {img && <img src={img} alt="service images" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {
          status === 'Confirm' ? <span className="font-bold text-green-600">Confirmed</span>
          : 
          <button onClick={()=> handleConfirm(_id)} className="btn btn-ghost btn-xs text-red-600">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookingTable;
