import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {

const user ={
    firstName: "Abhishek",
    lastName: "Kaldate",
    imageUrl: assets.abhi2,
}

const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon},
    { name: 'Add Show', path: '/admin/add-shows', icon: PlusSquareIcon},
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
]

  return (
    <div className='h-[calc(100vh-64vh)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'>
     <img src={user.imageUrl} alt="User" className='w-9 h-9 md:h-14 md:w-14 rounded-full mx-auto'/>     
    <p className='mt-2 text-base max-md:hidden'>{user.firstName} {user.lastName}</p>
    <div className='w-full'>
      {adminNavlinks.map((link, index)=> (
        <NavLink key={index} to={link.path} end className={({isActive}) => `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 text-gray-400 ${isActive && 'bg-gray-600/15 text-gray-400 group'}`}>
                {({isActive})=> (
                        <>
                            <link.icon className='w-5 h-5'/>
                            <p className='max-md:hidden'>{link.name}</p>
                            <span className={`w-1.5 h-10 rounded-1 right-0 absolute ${isActive && 'bg-yellow-600'}`}/>
                        </>
                )}                                                                    
        </NavLink>
      ))}
    </div>
    </div>
  )
}

export default AdminSidebar
