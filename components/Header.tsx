import {FC, useState} from "react"
import Link from 'next/link'
import Navbar from "./Navbar";

interface IHeader {

}
const Header: FC<IHeader> = () => {
    const [active, setActive] = useState<string>('Buy');
    const onclick = (item: any) => {
        setActive(item)
    }
    return (
     <>
         <header className=' h-20 flex items-center justify-between text-white '>
             <div className='flex items-center space-x-5'>
                 <h5 className='text-xl'>Logo</h5>
                 <nav>
                     <ul className='flex space-x-5'>
                         <Navbar onclick={onclick} rout='/' text='Buy' active={active} />
                         <Navbar onclick={onclick} rout='/' text='Rent' active={active} />
                         <Navbar onclick={onclick} rout='/' text='Sold' active={active} />
                         <Navbar onclick={onclick} rout='/' text='Share' active={active} />
                         <Navbar onclick={onclick} rout='/' text='NewHomes' active={active} />
                         <Navbar onclick={onclick} rout='/' text='Find Agent' active={active} />
                         <Navbar onclick={onclick} rout='/' text='Live Style' active={active} />
                         <Navbar onclick={onclick} rout='/' text='News' active={active} />
                         <Navbar onclick={onclick} rout='/' text='Commercial' active={active}/>
                     </ul>
                 </nav>
             </div>
             <div className='flex space-x-5 '>
                <button className='w-20 h-10 flex justify-center items-center border border-white rounded-lg'>Sign Up</button>
                <button className='w-20 h-10 flex justify-center items-center border border-white rounded-lg'>Join</button>
             </div>
         </header>
     </>
  )
}
export default Header