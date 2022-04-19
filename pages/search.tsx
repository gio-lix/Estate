import React, {useState} from 'react';
import Layout from "../components/Layout";
import {useRouter} from "next/router";
import Cart from "../components/pages/Cart";
import {GetServerSideProps} from "next";
import {FetchData} from "./api/fetchData";
import {BASE_URL} from "../config";

const Search = ({properties}: any) => {
    // const router = useRouter()
    console.log("properties -<>", properties)
    const [searchFilter, setSearchFilter] = useState(false);


    console.log()
    // console.log( properties?.map((el: any ) => console.log("properties -> ",el.purpose)))

    return (
        <Layout>
            <div>
                Search
            </div>
            <div className="grid grid-cols-6 gap-2 my-5 px-10">
                {properties.map((sale: any) => (
                    <Cart property={sale} key={sale.externalID}/>
                ))}
            </div>
        </Layout>
    );
};

export default Search;
export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const {data}: any = await FetchData.getStateData(`${BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {properties: data?.hits}
    }
}
