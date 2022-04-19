import type {GetStaticProps, NextPage} from 'next'
import Layout from "../components/Layout";
import {FetchData} from "./api/fetchData";
import {BASE_URL} from "../config";
import Cart from "../components/pages/Cart";
import {DataProps} from "../type";

const Home: NextPage = ({propertiesSale, propertiesRent }: any) => {

    return (
        <Layout>
            <h4 className='text-center text-xl font-semibold my-5'>rent Properties</h4>
            <div className='grid grid-cols-6 gap-2 my-5 px-10'>
                {propertiesRent?.map((rent: DataProps) => (
                    <Cart property={rent} key={rent.externalID}/>
                ))}
            </div>
            <h4 className='text-center  text-xl font-semibold  my-5'>Sale Properties</h4>
            <div  className='grid grid-cols-6 gap-2 my-5 px-10'>
                {propertiesSale?.map((sale: any) => (
                    <Cart property={sale} key={sale.externalID}/>
                ))}
            </div>
        </Layout>
    )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
    const {data: sale}: any = await FetchData.getStateData(`${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    const {data: rent}: any = await FetchData.getStateData(`${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
    return {
        props: {propertiesSale: sale?.hits, propertiesRent: rent?.hits}
    }
}
