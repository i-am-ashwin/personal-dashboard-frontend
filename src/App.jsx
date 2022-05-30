import { useState } from 'react'
import './App.css'

function App() {
const [currentDate, setCurrentDate] = useState(new Date())
const [open, setOpen] = useState(false)
const Menus = [
  {title: 'Dashboard', icon: 'randomanme', link: '/dashboard'},
  {title: 'Settings', icon: 'randomanme', link: '/settings'},
  {title: 'Settings', icon: 'randomanme', link: '/settings'},

]
// get todays tasks set and todo list
// generate next days task and todo list
  return (
<div className="flex">
<div className={`${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 w-72 h-screen bg-purple-700 relative `} >
  <img onClick={() => setOpen(!open)} src="" alt="control" className={`absolute border-2 border-purple-800 cursor-pointer -right-3 top-9 w-7 rounded-full ${!open && 'rotate-180'}`} />
<div className="flex items-start gap-x-4">
  <img src="" alt="logo" className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
  <h1 className={`text-white origin-left font-medium text-xl duration-100 ${!open && 'scale-0'}`}>Brand Name</h1>
</div>
<ul>
  {Menus.map((menu, index) => (
    <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-3 cursor-pointer p-2 hover:bg-gray-200 rounded-md ${menu.gap ? 'mt-9' : 'mt-2'}` }>
    <img src="" alt={menu.icon} />
    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
    </li>
  ))}
</ul>
</div>
  <div className='flex-1 h-screen text-2xl font-semibold p-7'>
    <h1>Home</h1>
  </div>
</div>
  )
}

export default App
