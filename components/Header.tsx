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
                         <li>
                             <Link href="/">
                                 <a>Home</a>
                             </Link>
                         </li>
                         <li>
                             <Link href="/search?purpose=for-sale">
                                 <a>Buy</a>
                             </Link>
                         </li>
                         <li>
                             <Link href="/search?purpose=for-rent">
                                 <a>Rent</a>
                             </Link>
                         </li>
                         {/*<Navbar onclick={onclick} rout='/' text='Home' active={active} />*/}
                         {/*<Navbar onclick={onclick} rout='/search?purpose=for-sale' text='Buy Property' active={active} />*/}
                         {/*<Navbar onclick={onclick} rout='/search?purpose=for-rent' text='Rent Property' active={active} />*/}
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