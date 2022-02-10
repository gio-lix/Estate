import {FC} from "react"
import Image from "next/image";
import defaultImage from '../../public/state.webp'
import Link from 'next/link'

interface ICart {
    property: {
        coverPhoto: any
        price: number
        rentFrequency: string
        rooms: number
        title: string
        baths: number
        area: number
        agency: any
        isVerified: boolean
        externalID: number
    }
}

const Cart: FC<ICart> = ({property}) => {
    return (
        <section className='col-span-2 h-auto border border-black'>
            <div className='h-full flex flex-col justify-between   '>
                <div>
                    <div className='max-w-[340px] mx-auto h-auto relative '>
                        <Link href={`/property/${property.externalID}`} >
                            <a>
                                <Image
                                    src={property.coverPhoto ? property.coverPhoto.url : defaultImage}
                                    width={200}
                                    height={200}
                                    layout='responsive'
                                    className='absolute'

                                    alt='img'
                                />
                            </a>
                        </Link>

                    </div>
                </div>
                <div className=' h-[155px] px-5'>
                    <p>{property.title}</p>
                </div>
            </div>
        </section>
    )
}
export default Cart