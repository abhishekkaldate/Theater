import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import { dateFormat } from '../../lib/dateFormat';

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || '₹';

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllBookings = async () => {

    setBookings(dummyBookingData)
    setIsLoading(false);
  };

  useEffect(()=>{
    getAllBookings();
  },[])

  return !isLoading ? (
    <>
      <Title text1='List' text2='Bookings'/>
      <div className='max-w-4xl mt-6 overflow-x-auto'>
      <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
        <thead>
          <tr className='bg-gray-600/20 text-left text-white'>
            <th className='p-2 font-medium pl-5'>User Name</th>
            <th className='p-2 font-medium'>Movie Name</th>
            <th className='p-2 font-medium'>Show Time</th>
            <th className='p-2 font-medium'>Seats</th>
            <th className='p-2 font-medium'>Amount</th>
          </tr>
        </thead>
        <tbody className='text-sm font-light'>
          {bookings.map((item, index) => (
            <tr key={index} className='border-b border-gray-200/50 '>
              <td className='p-2 pl-5'>{item.user.name}</td>
              <td className='p-2'>{item.show.movie.title}</td>
              <td className='p-2'>{dateFormat(item.show.showDateTime)}</td>
              <td className='p-2'>{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(', ')}</td>
              <td className='p-2'>{currency}{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  ) : <Loading />
}

export default ListBookings


// import React, { useEffect, useState } from 'react'
// import { dummyBookingData } from '../../assets/assets'
// import Loading from '../../components/Loading'
// import Title from '../../components/admin/Title'
// import { dateFormat } from '../../lib/dateFormat'

// const ListBookings = () => {

//   const currency = import.meta.env.VITE_CURRENCY_SYMBOL || '₹'

//   const [bookings, setBookings] = useState([])
//   const [isLoading, setIsLoading] = useState(true)

//   const getAllBookings = async () => {
//     setBookings(dummyBookingData || [])
//     setIsLoading(false)
//   }

//   useEffect(() => {
//     getAllBookings()
//   }, [])

//   return !isLoading ? (
//     <>
//       <Title text1='List' text2='Bookings' />

//       <div className='max-w-4xl mt-6 overflow-x-auto'>
//         <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
//           <thead>
//             <tr className='bg-gray-600/20 text-left text-white'>
//               <th className='p-2 font-medium pl-5'>User Name</th>
//               <th className='p-2 font-medium'>Movie Name</th>
//               <th className='p-2 font-medium'>Show Time</th>
//               <th className='p-2 font-medium'>Seats</th>
//               <th className='p-2 font-medium'>Amount</th>
//             </tr>
//           </thead>

//           <tbody className='text-sm font-light'>
//             {bookings.length > 0 ? (
//               bookings.map((item, index) => (
//                 <tr key={index} className='border-b border-gray-200/50 text-white'>
//                   <td className='p-2 pl-5'>
//                     {item?.user?.name || '--'}
//                   </td>

//                   <td className='p-2'>
//                     {item?.show?.movie?.title || '--'}
//                   </td>

//                   <td className='p-2'>
//                     {item?.show?.showDateTime
//                       ? dateFormat(item.show.showDateTime)
//                       : '--'}
//                   </td>

//                   <td className='p-2'>
//                     {item?.bookedSeats
//                       ? Object.values(item.bookedSeats).join(', ')
//                       : '--'}
//                   </td>

//                   <td className='p-2'>
//                     {currency}{item?.amount || 0}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan='5' className='text-center p-4 text-gray-400'>
//                   No bookings found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   ) : <Loading />
// }

// export default ListBookings