import {FC, useEffect, useRef, useState} from "react"
import Head from 'next/head'
import image from "../public/real-estate.jpg";
import Header from "./Header";
import FilterData from "./FilterData";


interface ILayout {

}

const Layout: FC<ILayout> = ({children}) => {
    const useHeightRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<boolean>(false);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [useHeightRef])
    const handleScroll = () => {
        if (window.scrollY > 570) {
            setHeight(true)
        } else if (window.scrollY < 570) {
            setHeight(false)

        }
    }
    console.log('height', height)
    return (
        <div ref={useHeightRef} className=''>
            <Head>
                <title>Real EState</title>
            </Head>
            <section className='relative'>
                <img src={image.src} className='w-full h-[350px] ' alt="image"/>
                <div className='absolute bg-opacity-50 z-20 top-0 w-full h-[350px] left-0 bg-black '>
                    <div className='px-10 w-full h-full '>
                        <Header/>
                        <FilterData/>
                    </div>
                </div>
            </section>

            <div className={`fixed z-40  ${height ? 'top-0 bg-gray-700 ' : " -top-36"} ease-out duration-150   left-0 w-full h-20 `}>

            </div>


            <div>
                {children}
            </div>
        </div>
    )
}
export default Layout