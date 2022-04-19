import {FC, useState} from "react"
import Navbar from "./Navbar";

interface IHeader {
    setSign: Function,
    sign: boolean
}
const Header: FC<IHeader> = ({setSign, sign}) => {
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
                         <Navbar onclick={onclick} rout='/' text='Home' active={active} />
                         <Navbar onclick={onclick} rout='/search?purpose=for-sale' text='Sale Property' active={active} />
                         <Navbar onclick={onclick} rout='/search?purpose=for-rent' text='Rent Property' active={active} />
                     </ul>
                 </nav>
             </div>
             <div className='flex space-x-5 '>
                <button onClick={() => setSign(!sign)} className='w-20 h-10 flex justify-center items-center border border-white rounded-lg hover:text-green-400' >Sign Up</button>
                <button className='w-20 h-10 flex justify-center items-center border border-white rounded-lg'>Join</button>
             </div>
         </header>
     </>
  )
}
export default Header