import react from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="h-[100px] bg-blue-500 text-white text-center flex justify-center items-center px-5">
            <ul className="flex items-center ">
                <li className="p-2"><Link href="/">Logo</Link></li>
                <li className="p-2">
                    <input type="text" placeholder="ค้นหาสินค้า..." className="h-auto rounded-s p-2 w-80" />
                    <button type="submit" className="bg-white text-black h-auto rounded-e p-2">Search</button>
                </li>
                <li className="p-2"><Link href="/Controllers/Login">Login</Link></li>
                <li className="p-2">|</li>
                <li className="p-2"><Link href="/Controllers/Register">Regiaster</Link></li>
            </ul>
        </div>
    )
}