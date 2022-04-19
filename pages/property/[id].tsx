import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {GetServerSideProps} from "next";
import {FetchData} from "../api/fetchData";
import {BASE_URL} from "../../config";
import Image from "next/image";
import millify from "millify";


const DetailsOfProperty = ({data}: any) => {
    console.log("data -> ", data)
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
                <div className='w-[1000px] h-[470px] flex relative overflow-hidden'>
                    {data?.photos?.map((im: any, index: number) => {
                        return (
                            <div
                                style={{transform: `translateX(-${state}px)`}}
                                className={` transition delay-100 duration-300 ease-in-out w-[1000px] h-[470px]  shrink-0`}
                                key={index}>
                                <Image
                                    src={im?.url}
                                    width={1000}
                                    height={470}
                                    layout='responsive'
                                    alt="img"
                                    className=' absolute'
                                />
                            </div>
                        )
                    })}
                    <span
                        className='absolute top-0 left-0 z-10 w-full h-full flex justify-between items-center text-black '>
                      <button onClick={handleClickLeft} className='text-xl bg-black text-white text-semibold p-7 bg-opacity-50'>left</button>
                      <button onClick={handleClickRight} className='text-xl bg-black text-white text-semibold p-7 bg-opacity-50'>right</button>
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
                <div className='relative   my-3 flex items-center '>
                    <p className="text-base text-gray-600 font-semibold">type:</p>
                    <span className='w-full absolute flex justify-center'>
                      <p className='uppercase font-semibold text-base '>{data?.type}</p>
                    </span>
                </div>
                <div className='relative  my-3  flex items-center '>
                    <p className="text-base text-gray-600 font-semibold">purpose:</p>
                    <span className='w-full absolute flex justify-center'>
                      <p className='uppercase font-semibold text-base'>{data?.purpose}</p>
                    </span>
                </div>
                {data?.furnishingStatus && (
                    <div className='relative   mb-5 flex items-center '>
                        <p className="text-base text-gray-600 font-semibold">furnishing status:</p>
                        <span className='w-full absolute flex justify-center'>
                      <p className='uppercase font-semibold text-base'>{data?.furnishingStatus}</p>
                    </span>
                    </div>
                )}
                {data?.amenities?.length && (
                    <div className=' relative  flex mt-3 '>
                        <h3 className=' text-base text-gray-600 font-semibold'>Amenities</h3>
                        <span className='w-full absolute flex justify-center'>
                          <p className='mb-20'>
                              {data?.amenities?.map((amenity: any) => (
                                  <p  key={amenity.text} className='ml-2 uppercase text-blue-500 font-semibold text-center bg-blue-100 m-1'>  {amenity.text},</p>
                              ))}
                          </p>
                        </span>
                    </div>
                )}
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

