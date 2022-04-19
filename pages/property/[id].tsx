import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {GetServerSideProps} from "next";
import {FetchData} from "../api/fetchData";
import {BASE_URL} from "../../config";
import Image from "next/image";
import millify from "millify";


const DetailsOfProperty = ({data}: any) => {
    const [state, setState] = useState(0);

    const handleClickRight = () => {
        if (state === (data?.photos.length - 1) * 900) {
            return setState(0)
        }
        setState(state + 1000)
    }
    const handleClickLeft = () => {
        if (state === 0) {
            const x = (data?.photos.length - 1) * 1000
            return setState(x)
        }
        setState(state - 1000)
    }

    return (
        <Layout>
            <div className='my-10  flex justify-center '>
                <div className='w-[1000px] h-[530px] flex relative overflow-hidden'>
                    {data?.photos?.map((im: any, index: number) => {
                        return (
                            <div
                                style={{transform: `translateX(-${state}px)`}}
                                className={` transition delay-100 duration-300 ease-in-out w-[1000px] h-[530px]  shrink-0`}
                                key={index}>
                                <Image
                                    src={im?.url}
                                    width={1000}
                                    height={530}
                                    layout='responsive'
                                    alt="img"
                                    className=' absolute'
                                />
                            </div>
                        )
                    })}
                    <span
                        className='absolute top-0 left-0 z-10 w-full h-full flex justify-between items-center text-black '>
                      <button onClick={handleClickLeft} className='text-2xl bg-black text-white text-semibold p-7 bg-opacity-50'>left</button>
                      <button onClick={handleClickRight} className='text-2xl bg-black text-white text-semibold p-7 bg-opacity-50'>right</button>
                    </span>
                </div>
            </div>
            <section className=" px-10">
                <img src={data?.agency?.logo?.url} className='w-52 ' alt="logo"/>
                <h2 className='text-2xl my-3'>{data?.title?.length > 30 && data?.title?.substring(0, 30)}...</h2>
                <p className='text-xl my-3'>
                    rooms: <span className="uppercase font-semibold"> {data?.rooms} </span> /
                    paths: <span className="uppercase font-semibold"> {data?.baths}</span> | {millify(data?.area)}
                    <span className=" font-semibold"> sqft</span>
                </p>
                <p className='uppercase font-bold mt-3 mb-1'>{data?.title}</p>
                <article  className='prose prose-neutral'>
                    <div>{data?.description}</div>
                </article>
                <div className='relative  mt-3 mb-14 flex items-center '>
                    <p className="text-xl font-semibold">text</p>
                    <span className='w-full absolute flex justify-center'>
                      <p className='uppercase font-semibold text-2xl'>{data?.type}</p>
                    </span>
                </div>
            </section>
        </Layout>
    );
};

export default DetailsOfProperty;

export const getServerSideProps: GetServerSideProps = async ({params: {id}}: any) => {
    const {data}: ReturnType<any> = await FetchData.getStateData(`${BASE_URL}/properties/detail?externalID=${id}`);
    return {
        props: {data}
    }
}

