import { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handler = (e: React.FormEvent) => {
        e.preventDefault();
        if(email === "admin@ecommerce.com" && password === "admin123"){
            setError("");
            alert("SUCCESS: Login successful.")
        }
        else{
            setError("ERROR: Invalid email or password!");
        }
    };

    return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-sm mx-auto mt-12 p-10 shadow-lg rounded-3xl bg-white">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Login</h2>
            <form onSubmit={handler}>
                <div className="mb-4">
                    <label className="block mb-1 text-lg text-gray-900" htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded-md"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-lg text-gray-900" htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-md"/>
                </div>
                {error && <div className="text-red-600">{error}</div>}
                <button type="submit" className="w-full bg-gray-900 text-white font-medium text-lg mt-4 py-3 rounded-4xl">Login</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default Login;