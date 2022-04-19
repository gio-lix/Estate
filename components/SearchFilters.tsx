import {ChangeEvent, FC, useState} from "react"
import {filterData, getFilterValues} from "../utils/FilterData";
import {useRouter} from "next/router";

const SearchFilters = () => {
    const [filter, setFilter] = useState<any>(filterData);
    const router = useRouter();

    const searchProperty = (filterValues: any) => {
        const path = router.pathname
        const {query} = router

        const values = getFilterValues(filterValues)
        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })
        router.push({pathname: path, query: query})
    }
    return (
        <div className='grid grid-cols-5  text-black w-full'>
            {filter?.map((ele: any) => {
                return (
                    <div key={ele.queryName}>
                        <select
                            className="my-2 py-3 w-44 outline-none"
                            onChange={(e:any) => searchProperty({[ele.queryName]: e.target.value})} >
                            {ele?.items?.map((el: any) => {
                                return   <option value={el.value} key={el.value}>{el.name}</option>
                            })}
                        </select>
                    </div>
                )
            })}
        </div>
    )
}
export default SearchFilters