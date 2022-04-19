import {FC, useCallback, useEffect, useRef, useState} from "react"
import Head from 'next/head'
import image from "../public/real-estate.jpg";
import Header from "./Header";
import FilterData from "./FilterData";
import { MdOutlineOpenInFull } from 'react-icons/md';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

interface ILayout {

}

const Layout: FC<ILayout> = ({children}) => {
    const useHeightRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<boolean>(false);
    const [filter, setFilter] = useState<boolean>(false);
    const [sign, setSign] = useState<boolean>(false);
    const [size, setSize] = useState(50);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [useHeightRef])
    const handleScroll = () => {
        if (window.scrollY > 570) {
            setHeight(true)
            setFilter(false)
        } else if (window.scrollY < 570) {
            setHeight(false)
        }
    }

    const handleIncrease = useCallback(() => {
        setSize(70)
    }, [sign])
    const handleDecrease = useCallback(() => {
        setSize(50)
    }, [sign])
    const handleCloseSign = useCallback(() => {
        setSign(false)
        setSize(50)
    }, [sign])


    return (
        <div ref={useHeightRef}>
            <Head>
                <title>Real EState</title>
            </Head>
            <section className='relative'>
                <img src={image.src} className='w-full h-[350px] ' alt="image"/>
                <div className='absolute bg-opacity-50 z-20 top-0 w-full h-[350px] left-0 bg-black '>
                    <div className='px-10 w-full h-full '>
                        <Header setSign={setSign} sign={sign}/>
                        <FilterData setFilter={setFilter} filter={filter}/>
                    </div>
                </div>
            </section>
            <div className={`fixed z-40  ${height ? 'top-0 bg-gray-700 ' : " -top-36"} ease-out duration-150   left-0 w-full h-20 `}>

            </div>
            <div>
                {children}
                {sign && (
                    <div className='fixed top-0 left-0 z-20  w-full h-full flex '>
                        <div className='relative  w-full h-full flex justify-center items-center'>
                            <span onClick={handleCloseSign} className="absolute z-10 bg-black bg-opacity-30  top-0 left-0 w-full h-full  "> </span>
                            <div
                                style={{width: `${size}%`, height: `${size}%`} }
                                className={`absolute z-20 bg-white p-3`}>
                                <div className='flex justify-end items-center'>
                                    {size < 60 ? (
                                        <button onClick={handleIncrease}>
                                             <MdOutlineOpenInFull />
                                        </button>
                                    ) : (
                                        <button onClick={handleDecrease}>
                                          <MdOutlineCloseFullscreen />
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}
export default Layout