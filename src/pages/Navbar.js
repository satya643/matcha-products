import React from "react";
import { NavLink } from "react-router-dom";
import { LogIn, ShoppingBag } from "@deemlol/next-icons";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between p-5 gap-6 md:gap-0">
            < div className="flex flex-col md:flex-row items-center gap-6 md:gap-8" >
                <div>
                    <h1 className="font-[Audiowide] uppercase tracking-[0.18em] text-[29px] text-[#EAFBE7] leading-none">
                        MATON
                    </h1>
                    <div className="text-[5.8px] text-center">maintain own</div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs">
                    <NavLink to="/" className="flex items-center gap-1" >Home<span class="text-md">🙂</span></NavLink>
                    <NavLink to="/products" className="flex items-center gap-1">
                        Products <ArrowRight className="text-xs w-3 h-3 -rotate-40" />
                    </NavLink>
                    <NavLink to="/testimonial" className="flex items-center gap-1">
                        Testimonial <ArrowRight className="text-xs w-3 h-3 -rotate-40" />
                    </NavLink>
                </div>
            </div >
            <div className="nav-right flex gap-6 md:gap-10">
                <NavLink to="/login" className="flex text-[#FFFFFF] text-xs items-center gap-1">
                    Sign In <LogIn size={10} color="#FFFFFF" strokeWidth={1.5} />
                </NavLink>
                <NavLink to="/cart" className="flex text-[#FFFFFF] text-xs items-center gap-1">
                    My Cart <ShoppingBag size={14} fill="#FFFFFF" color="#120101ff" strokeWidth={1.5} />
                </NavLink>
            </div>
        </nav >
    )
}
export default Navbar;