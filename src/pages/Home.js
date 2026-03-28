import React from "react";
import { NavLink } from "react-router-dom";
import { LogIn, ShoppingBag, ArrowRightCircle } from "@deemlol/next-icons";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_50%_1%,#2A4125_5%,#21371F_18%,#122415_38%,#05170C_65%)] text-white">
        {/* Navigation */}
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

        {/* Hero Section */}
        < section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-10 relative z-20 gap-16 lg:gap-0" >

          <div className="w-full lg:w-[25%] flex flex-col items-center lg:items-start text-center lg:text-left -mt-0 lg:-mt-15">

            <div className="starter-kit flex flex-col gap-3 sm:gap-4 lg:gap-5  items-center lg:items-start">
              <h3 className="font-semibold text-[17px] tracking-[0.18em] text-[#EAFBE7] leading-none">Free Starter Kits</h3>
              <p className="text-[13px]  text-[#A9B9AA] leading-[1.6] max-w-[180px]">
                Free beginner or starter kit with purchases over $50.
              </p>

              <div className="icons flex justify-center lg:justify-start items-center w-full translate-x-3 lg:translate-x-0 sm:translate-x-6 mt-3 sm:mt-4 lg:mt-5">
                <img
                  src="/images/ncup.png"
                  alt="icon1"
                  className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto object-contain"
                />
                <img
                  src="/images/newhaldi.png"
                  alt="icon2"
                  className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto object-contain -translate-x-6 sm:-translate-x-8 lg:-translate-x-10 rotate-12"
                />
              </div>

              <p className="text-[13px] text-[#A9B9AA] leading-[1.6] max-w-[180px]">We offer free shipping on orders over $30! Limited time only!</p>
              <p title="Premium Matcha" className="text-[25px] text-[#EAFBE7]">プレミアム抹茶</p>
            </div>
          </div>
          {/* center content */}
          <div className="hero-center w-full lg:w-[50%] flex flex-col items-center text-center">
            <div className=" font-semibold text-[50px] lg:text-[90px] text-[#EAFBE7] leading-[1.1] tracking-[-0.02em] space-y-4">
              <h2>Best Matcha</h2>
              <h2 className="text-center">in Town</h2>
            </div>
            <img src="/images/bowl.png" alt="Matcha Bowl with whisk" className="h-auto" />
          </div>
          {/* right content */}
          <div className="hero-right w-full md:w-[25%] flex flex-col items-center md:items-end text-center md:text-right gap-2 -translate-x-0 md:-translate-x-1 -mt-0 md:-mt-15 ">
            <img src="/images/coffe.png" alt="Small Matcha cup" className="w-60 h-60 object-contain  translate-x-5 lg:translate-x-10" />
            <h3 className="font-semibold text-[17px] tracking-[0.18em] text-[#EAFBE7] leading-none">Premium Matcha</h3>
            <p className="text-[13px] leading-[1.6] text-[#A9B9AA] max-w-[180px]">
              Premium quality, made from first-harvest tea leaves.
            </p>
            <p className=" my-6 text-[18px] text-[#EAFBE7]">30gr</p>
            <button className=" flex items-center gap-2 rounded-md bg-[#C8F82C] px-2 py-2 text-xs font-medium text-[#0B1A0C]">Shop Now <ArrowRightCircle size={16} color="#020000ff" strokeWidth={1.5} /></button>
          </div>
        </section >
      </div >
      {/* Products */}
      <section className="products bg-[#E6E6DE] pt-10 lg:pt-0 h-auto lg:h-[900px] overflow-hidden ">
        <div className="flex flex-col gap-20 sm:gap-24 lg:block">
          {/* Product 1 */}
          <div className="product mug flex flex-row justify-center items-center gap-10 lg:gap-12 relative">
            <div className=" -mt-50 lg:-mt-[240px]">
              <img src="/images/newMug.png"
                alt="Matcha mug"
                className=" w-88 h-88 scale-150 object-contain drop-shadow-[-15px_1px_0px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold  text-[17px] tracking-[0.18em]">Matcha Mug</h2>
              <h6 className=" font-sm text-[13px] leading-[1.1] text-[#71716C] max-w-[180px]">Wooden mug perfectly fit for matcha tea.</h6>
            </div>
          </div>
          {/* Product 2 */}
          <div className="product whisk flex justify-end items-center -mt-30 translate-x-10 translate-y-[10px] lg:translate-y-[25px]">
            <div className="flex flex-col leading-tight ">
              <h2 className="font-semibold  text-[17px] tracking-[0.18em]">Matcha Whisk</h2>
              <p className=" font-sm text-[13px] leading-[1.1] text-[#71716C] max-w-[180px]">Chasen for whisking matcha into a smooth, frothy beverage.</p>
            </div>
            <img src="/images/mixbowl.png" alt="Matcha whisk" className="w-[350px] h-[350px] scale-150 object-contain drop-shadow-[-15px_0px_0px_rgba(0,0,0,0.6)]" />
          </div>
          {/* Product 3 */}
          <div className="starter-kit flex justify-start relative -left-20 -translate-y-10">
            <img src="/images/brush.png" alt="Starter kit product" className="w-[371px] h-[371px]scale-120 -mt-60 object-contain drop-shadow-[-15px_0px_0px_rgba(0,0,0,0.6)]" />
            <div className="flex flex-col leading-tight gap-12 -translate-x-8">
              <div className="flex flex-col gap-5">
                <p className="text-[20px] font-medium ">スターターキット</p>
                <h1 className="font-semibold  text-[17px] tracking-[0.18em] max-w-[180px]">Matcha Starter Kits</h1>
                <p className=" font-sm text-[13px] leading-[1.1] text-[#71716C] max-w-[190px]">Begin your matcha journey with us. Each kit includes matcha, a whisk, and a guide.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold  text-[17px] tracking-normal">Get it for just</h3>
                <h2 className="flex flex-col font-semibold text-4xl">$25</h2>
              </div>
            </div>
          </div>
          {/* Product 4 */}
          {/* Matcha Powder – Right side, centered, not flush to edge */}
          <div className="product powder flex justify-end items-center gap-12 -mt-[120px] pr-10">
            <div className="relative gap-2">
              <img
                src="/images/powder.png"
                alt="Matcha powder"
                className="w-60 h-60 scale-150 -mt-21 object-contain
              drop-shadow-[-15px_0px_0px_rgba(0,0,0,0.6)]"
              />
              <div className="absolute top-2 left-1/4 -translate-y-1/2 ">
                <h1 className="font-[Audiowide] uppercase tracking-[0.18em] text-[25px] text-[#EAFBE7] leading-none">
                  MATON
                </h1>
                <div className="text-[5.8px] text-center text-[#EAFBE7]">maintain own</div>
              </div>
            </div>

            <div className="flex flex-col gap-1 leading-none">
              <h2 className="font-semibold text-[17px] tracking-[0.18em]">Matcha Powder</h2>
              <p className="font-sm text-[13px] leading-[1.1] text-[#71716C] max-w-[180px]">
                High-quality matcha powder from local farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* experience */}
      <section className="bg-[#E6E6DE] px-6 py-6">
        {/* Top section */}
        <div className="max-w-7xl mx-auto ">
          {/* Leftside */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 overflow-hidden px-4 lg:ml-12">
            <div className="w-full lg:w-[280px] flex justify-center">
              <h1 className="text-4xl lg:5xl max-w-[240px] text-gray-800 leading-tight font-semibold text-center lg:text-left">Experience Wellness with Every Sip</h1>
            </div>
            {/* Rightside */}
            <div className="grid grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="relative rounded-xl overflow-hidden bg-[#EDEDE8]">
                <img src="/images/pastecoffe.png" alt="pastecoffe" className="w-full h-[280px] lg:h-[320px] object-cover" />
                {/* Advanced fading blur effect using CSS mask */}
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-white/20 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent)] z-0 pointer-events-none"></div>
                <h1 className="absolute bottom-8 w-full text-center text-white font-semibold text-[19px] z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide">
                  Anti Oxidant
                </h1>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-xl overflow-hidden bg-[#EDEDE8]">
                <img src="/images/newmixPowder.png" alt="addpowder" className="w-full h-[280px] lg:h-[320px] object-cover" />
                {/* Advanced fading blur effect using CSS mask */}
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-white/20 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent)] z-0 pointer-events-none"></div>
                <h1 className="absolute bottom-8 w-full text-center text-white font-semibold text-[19px] z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide">
                  Relax & Focus
                </h1>
              </div>
            </div>
          </div>
          {/* bottom side */}
          <div className="flex flex-row pt-20">
            <div>
              <div className="w-[100px] h-[100px] rounded-full bg-[#EDEDE8] shadow-sm p-2">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <img src="/images/greentea.png" alt="greentea" className="w-full h-full object-cover scale-[1.35]" />
                </div>
              </div>
              <h2>Rich Flavor & Vibrant Color</h2>
              <p>Perfectly balanced umami taste with a bright green hue</p>
            </div>
            <div>
              <div className="w-[100px] h-[100px] rounded-full bg-[#EDEDE8] shadow-sm p-2">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <img src="/images/coffeepowder.jpg" alt="coffeepowder" className="w-full h-full object-cover scale-[1.15]" />
                </div>
              </div>
              <h2>Authentic Japanese Matcha</h2>
              <p>100% ceremonial grade matcha with rich unmami flavor and no bitterness</p>
            </div>
            <div>
              <div className="w-[100px] h-[100px] rounded-full bg-[#EDEDE8] shadow-sm p-2">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <img src="/images/chai.png" alt="chai" className="w-full h-full object-cover scale-[1.35]" />
                </div>
              </div>
              <h2>Healthy & Sustainability</h2>
              <p>Packed with antioxidants and produced from eco friendly process.</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;