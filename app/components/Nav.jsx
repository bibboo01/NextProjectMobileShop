import react from "react";
import Link from "next/link";

export default function Nav() {
    return (
        <ul className="flex justify-center bg-blue-900 text-white">
            <li className="m-2 hover:bg-blue-400 p-5 rounded"><Link href="/">Home</Link></li>
            <li className="m-2 hover:bg-blue-400 p-5 rounded"><Link href="/About">About</Link></li>
            <li className="m-2 hover:bg-blue-400 p-5 rounded"><Link href="/Services">Services</Link></li>
            <li className="m-2 hover:bg-blue-400 p-5 rounded"><Link href="/Contact">Contact</Link></li>
        </ul>
    )
}