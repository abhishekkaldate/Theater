import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300">
      </div>
    </div>
  )
}

export default Loading
