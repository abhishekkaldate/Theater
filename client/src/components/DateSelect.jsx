import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLastIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DateSelect = ({dateTime, id}) => {

    const navigate = useNavigate();

const [selected, setSelected] = useState(null)

const onBookHandler = ()=> {
    if(!selected){
        return toast('Please select a date')
    }
    navigate(`/movies/${id}/${selected}`)
    scrollTo(0,0)
}

  return (
    <div id='dateSelect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-gray-300/10 border border-500/20 rounded-lg'>
        <BlurCircle top='-100px' left='-100px'/>
        <BlurCircle top='100px' right='0px'/>
        <div>
            <p className='text-lg font-semibold'>Choose Date</p>
            <div className='flex items-center gap-6 text-sm mt-5'>
              <ChevronLastIcon width={28}/>
              <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                {Object.keys(dateTime).map((date)=> (
                    <button onClick={()=> setSelected(date)} key={date}
                     className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${selected === date ? 'bg-amber-300' : 'bg-amber-300 hover:bg-amber-700 text-gray-100'}`}>
                        <span>{new Date(date).getDate()}</span>
                        <span>{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>
                    </button>
                ))}
              </span>
              <ChevronLastIcon  width={28}/>
            </div>
        </div>
        <button onClick={onBookHandler} className='px-8 py-2 mt-6 bg-amber-600 hover:bg-amber-300 rounded transition-all cursor-pointer'>
          Book Ticket</button>
      </div>
    </div>
  )
}

export default DateSelect
