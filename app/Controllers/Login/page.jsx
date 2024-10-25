import React from "react";

export default function Login() {
    return (
        <div className="bg-white p-5 items-center justify-center flex m-0 rounded-2xl flex-col h-[300px] shadow-lg max-w-3xl mx-auto mt-5 mb-5">
            <form className="p-5 w-full space-y-4">
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <div className="input-group">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">ชื่อผู้ใช้งาน</label>
                    <input type="text" id="username" placeholder="กรุณากรอกชื่อผู้ใช้งาน" required className="p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"></input>
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                    <input type="password" id="password" placeholder="กรุณากรอกรหัสผ่าน" required className="p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"></input>
                </div>
                <div className="w-[30%] bg-green-600 hover:bg-green-400 hover: text-white text-center rounded-lg cursor-pointer m-auto transition duration-200">
                    <button type="submit" class="login-button" className="p-3 ">Login</button>
                </div>
            </form>
        </div>
    )
}