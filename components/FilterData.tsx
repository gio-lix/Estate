import {FC, SyntheticEvent, useEffect, useRef, useState} from "react"
import {AiFillCaretLeft} from 'react-icons/ai'
import {filterData,getFilterValues} from '../utils/FilterData'
import SearchFilters from "./SearchFilters";

interface IFilterData {
    setFilter: Function
    filter: boolean
}

const FilterData: FC<IFilterData> = ({filter, setFilter}) => {
    const filterRef = useRef<HTMLDivElement>(null);
    const [searchFilter, setSearchFilter] = useState<number>(0);
    // const [dataFilter, setDataFilter] = useState<any>(filterData);
    const [search, setSearch] = useState<string>('');



    useEffect(() => {
        window.addEventListener('click', handleRefClick)
        return () => window.removeEventListener('click', handleRefClick)
    },[filterRef])
    const handleRefClick = (e: any) => {
        if (!e.path.includes(filterRef.current)) {
            setFilter(false)
        }
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }

    // const searchProperties = (filterValue: any) => {
    //     console.log('filterValue', filterValue)
    // }

    return (
        <section className='w-full h-52 grid grid-cols-9 gap-2 text-white'>
            <main ref={filterRef} className='flex flex-col  col-span-7  bg-black bg-opacity-70 rounded p-4'>
                <h5 className='text-xl'>Search Properties For Sale</h5>
                <div className='flex'>
                    <div className=' w-full h-28'>
                        <div  className='grid grid grid-cols-5 gap-x-1 pr-[123px] mt-1  text-gray-300'>
                            <div onClick={() => setSearchFilter(0)} className='relative col-span-1 flex items-end justify-center rounded  bg-gray-700  h-10 cursor-pointer'>
                                <div className={`${searchFilter === 0 && 'bg-red-500 text-white'} w-full h-full absolute flex items-center justify-center`}>
                                    <p className='text-lg'>Buy Property</p>
                                </div>
                                <AiFillCaretLeft className={`${searchFilter === 0 ? 'inline-flex text-white' : 'hidden'} text-xl rotate-90 translate-y-1.5`} />
                            </div>
                            <div onClick={() => setSearchFilter(1)} className='relative col-span-1 flex items-end justify-center rounded bg-gray-700  h-10 cursor-pointer'>
                                <div className={`${searchFilter === 1 && 'bg-red-500 text-white'} w-full h-full absolute flex items-center justify-center`}>
                                    <p className='text-lg'>Rent Property</p>
                                </div>
                                <AiFillCaretLeft className={`${searchFilter === 1 ? 'inline-flex text-white' : 'hidden'} text-xl rotate-90 translate-y-1.5`} />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className='flex'>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search By State' className='w-full h-14 text-black text-2xl pl-4 outline-none'/>
                            <div className=' w-36  '>
                                <button type='submit'  className='h-14 w-full bg-red-500 text-2xl'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full h-full  flex justify-center group'>
                    <button onClick={() => setFilter(!filter)} className='bg-gray-700 text-gray-300 group-hover:text-white px-4'>Search Property By Filter</button>
                </div>
                    {filter && (
                        <div className='absolute  -bottom-[115px] bg-gray-700 left-10 right-10  w-auto px-10 h-44 flex items-center '>
                            <SearchFilters/>
                        </div>
                    )}
            </main>
            {/* right side */}
            <div className=' col-span-2  bg-black bg-opacity-70 rounded flex flex-col items-center justify-between py-4 group'>
                <div>
                    <h3 className='text-xl text-center'>Home Loans</h3>
                    <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, hic!</p>
                </div>
                <button className='w-44 h-10 group-hover:bg-red-500 font-semibold tracking-too_widest transition duration-300 ease-in-out border border-white'>Learn More</button>

            </div>

        </section>
    )
}
export default FilterData