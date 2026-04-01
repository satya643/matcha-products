import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [is_agree, setIsAgree] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault(); // stop page reload

        if (email === "" || password === "" || confirmPassword === "") {
            toast.error("please fill all the fields");
            return;
        }
        if (!is_agree) {
            toast.error("Please agree to the Privacy Policy & Terms");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Password does not match");
            return;
        }

        //if the user is already signed up then you can not signed it upagain 
        if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            toast.error("You are already signed up!");
            return;
        }
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        // console.log(email, password);

        toast.success("signed up successful");
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-white bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/signup.jpg')" }}>
            <div className="flex flex-col max-w-[400px] w-full backdrop-blur-md rounded-2xl p-8 shadow-xl bg-white/10 border border-white/20 gap-5 ">
                <h1 className="text-2xl font-semibold">Create your <span className="text-[#8ED13F]">account!</span></h1>
                <p className="text-[#B8D9B5] text-sm ">Sign up to explore premium matcha products</p>
                <form className="flex flex-col gap-3 relative w-full" id="SignupForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="example@gmail.com"
                        className="bg-[#263D34] text-[#E0EDE4] p-2 text-[12px] rounded-lg
                         w-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#8ED13F] border border-yellow-500
                         "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute text-yellow-500 top-2.5 left-3.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="6" width="18" height="14" rx="2" ry="2" />
                            <path d="M3 8l9 6 9-6" />
                        </svg>
                    </div>

                    <input type="password" placeholder="Password"
                        className="bg-[#263D34] text-[#E0EDE4] p-2 text-[12px] rounded-lg w-full pl-10
                            focus:outline-none focus:ring-2 focus:ring-[#8ED13F] border border-yellow-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute top-14 left-3.5 text-yellow-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                    </div>

                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-[#263D34] text-[#E0EDE4] p-2 text-[12px] rounded-lg w-full pl-10
                            focus:outline-none focus:ring-2 focus:ring-[#8ED13F] border border-yellow-500" />
                    <div className=" absolute top-26 left-3.5 text-yellow-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                    </div>
                </form>

                <div className="flex flex-row gap-2 text-[12px] items-center">
                    <input type="checkbox" className="bg-[#8ED13F] rounded-xl w-3 h-3  accent-[#8ED13F] cursor-pointer "
                        checked={is_agree}
                        onChange={(e) => setIsAgree(e.target.checked)}
                    />
                    <p className="text-[#B8D9B5]">I agree to the <span className="text-[#8ED13F]">Privacy Policy &  Terms</span></p>
                </div>

                <div className="flex flex-row gap-2 justify-center items-center whitespace-nowrap">
                    <button type="submit" className="bg-[#8ED13F] text-[#0B1A0C] text-[11px] font-semibold px-12 py-2 rounded-xl hover:brightness-110 transition text" form="SignupForm">Sign Up</button>
                    <button className="  border border-[#8ED13F] w-full text-yellow-300 hover:text-[#B8D9B5] text-[12px] font-sm rounded-xl p-1  flex items-center justify-center gap-3 hover:brightness-110 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="flex-shrink-0 "
                        >
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.92c-.25 1.22-.98 2.26-2.07 2.96v2.64h3.34c1.95-1.8 3.07-4.44 3.07-7.86z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.34-2.64c-.98.66-2.23 1.06-3.94 1.06-3.03 0-5.6-2.05-6.52-4.8H1.3v3.01C3.12 21.3 7.2 23 12 23z" />
                            <path fill="#FBBC05" d="M5.48 14.96c-.28-.82-.44-1.69-.44-2.6 0-.91.16-1.78.44-2.6H1.3C.48 10.56 0 12.22 0 14c0 1.78.48 3.44 1.3 4.64l4.18-3.32z" />
                            <path fill="#EA4335" d="M12 4.8c1.7 0 3.23.6 4.43 1.77l3.3-3.3C17.72 1.5 15.06 0 12 0 7.2 0 3.12 1.7 1.3 4.36L5.48 7.68c.92-2.75 3.49-4.8 6.52-4.8z" />
                        </svg>
                        Continue with Google
                    </button>
                    {/* <button className="bg-[#8ED13F] text-[#0B1A0C] text-[12px] font-sm w-full rounded-xl p-1">Google</button> */}
                </div>
                <p className=" text-[14px] flex justify-center items-center gap-1">Already have an account? <NavLink to="/login" className="text-[#8ED13F] hover:brightness-110 transition">Login</NavLink></p>

            </div>
        </div >
    )
}
export default Signup;