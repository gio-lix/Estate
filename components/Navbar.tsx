import {FC} from "react"
import Link from 'next/link'


interface INavbar {
    rout: string
    text: string
    active: string
    onclick: (item: any) => void
}

const Navbar: FC<INavbar> = ({text, rout, active, onclick}) => {
    return (
        <li onClick={() => onclick(text)}
            className={`${active === text ? 'border-b-2 border-white' : ''}  h-14 flex items-center`}>
            <Link href={rout}>
                <a>{text}</a>
            </Link>
        </li>
    )
}
export default Navbar