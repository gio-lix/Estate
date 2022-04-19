import {FC} from "react"
import Image from "next/image";
import defaultImage from '../../public/state.webp'
import Link from 'next/link'
import {DataProps} from "../../type";

export interface ICart {
    property: DataProps
}

const Cart: FC<ICart> = ({property:
    {coverPhoto, externalID, title, rentFrequency, rooms, baths, area, agency,isVerified}}) => {
    return (
        <section className='col-span-2 h-auto border border-black'>
            <div className='h-full flex flex-col justify-between   '>
                <div>
                    <div className='max-w-[340px] mx-auto h-auto relative '>
                        <Link href={`/property/${externalID}`} >
                            <a>
                                <Image
                                    src={coverPhoto ? coverPhoto.url : defaultImage}
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
                    <p>{title}</p>
                </div>
            </div>
        </section>
    )
}
export default Cart