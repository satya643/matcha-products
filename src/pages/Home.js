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
        < section className="flex flex-col max-auto h-auto lg:flex-row items-center justify-between px-6 lg:px-10 py-14 relative z-20 gap-16 lg:gap-0" >

          <div className="w-full lg:w-[25%]  flex flex-col items-center lg:items-start text-center lg:text-left -mt-0 lg:-mt-15">

            <div className="starter-kit flex flex-col gap-3 sm:gap-4 lg:gap-5  items-center lg:items-start">
              <h3 className="font-semibold text-[17px] tracking-[0.18em] text-[#EAFBE7] leading-none">Free Starter Kits</h3>
              <p className="text-[13px]  text-[#A9B9AA] leading-[1.6] max-w-[180px]">
                Free beginner or starter kit with purchases over $50.
              </p>

              <div className="icons flex justify-center lg:justify-start items-center w-full translate-x-3 lg:translate-x-0 sm:translate-x-6 sm:mt-4 lg:mt-5">
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
          <div className="hero-center w-full lg:w-[50%] flex flex-col items-center text-center gap-18">
            <div className=" font-semibold text-[50px] lg:text-[90px] text-[#EAFBE7] leading-[1.1] tracking-[-0.02em] space-y-4">
              <h2>Best Matcha</h2>
              <h2 className="text-center">in Town</h2>
            </div>
            <img src="/images/ceremonial_matcha_bowl.png" alt="Matcha Bowl with whisk" className="w-[250px] h-[250px] lg:w-[360px] lg:h-[360px]" />
          </div>
          {/* right content */}
          <div className="hero-right w-full md:w-[25%] flex flex-col items-center md:items-end text-center md:text-right gap-2 -translate-x-0 md:-translate-x-1 -mt-0 ">
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
              <h1 className="text-3xl lg:text-4xl max-w-[400px] text-gray-800 leading-tight font-semibold text-center lg:text-left">Experience Wellness with Every Sip</h1>
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
          <div className="flex  flex-col lg:flex-row pt-20 justify-center items-center gap-15">
            <div className="flex  flex-row lg:flex-col items-start  gap-6">
              <div className="w-[70px] h-[70px] rounded-full bg-[#EDEDE8] shadow-sm p-2">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/images/greentea.png" alt="greentea" className="object-contain scale-[1.2] rounded-full" />
                </div>
              </div>
              <div className="flex flex-col lg:leading-none lg:gap-4">
                <h2 className="font-normal text-[15px] lg:text-[20px] max-w-[180px]">Rich Flavor & Vibrant Color</h2>
                <p className="text-[10px] lg:text-[13px] text-[#71716C] max-w-[220px] font-extrathin">Perfectly balanced umami taste with a bright green hue</p>
              </div>
            </div>
            <div className="flex  flex-row lg:flex-col items-start  gap-6">
              <div className="w-[70px] h-[70px] rounded-full bg-[#EDEDE8] shadow-sm p-2 shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/images/coffeepowder.jpg" alt="coffeepowder" className="object-contain scale-[1.2] rounded-full" />
                </div>
              </div>
              <div className="flex flex-col lg:leading-none lg:gap-4">
                <h2 className="font-normal text-[15px] lg:text-[20px] max-w-[180px]">Authentic Japanese Matcha</h2>
                <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin max-w-[220px]">100% ceremonial grade matcha with rich unmami flavor and no bitterness</p>
              </div>
            </div>
            <div className="flex  flex-row lg:flex-col items-start  gap-6">
              <div className="w-[70px] h-[70px] rounded-full bg-[#EDEDE8] shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/images/chai.png" alt="chai" className="object-contain scale-[1.1] -translate-y-1 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col lg:leading-none lg:gap-4">
                <h2 className="font-normal text-[15px] lg:text-[20px] max-w-[180px]">Healthy & Sustainability</h2>
                <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin max-w-[220px]">Packed with antioxidants. produced eco friendly process.</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Discover */}
      <section className="bg-[#E6E6DE] pt-10 lg:pb-0 lg:pt-0 h-auto justify-center flex overflow-hidden ">
        <div className="w-full max-w-6xl mx-auto lg:px-10 px-8 ">
          <div className="flex justify-center">
            <h1 className=" text-[2.3em] lg:text-7xl  max-w-[450px] tracking-normal lg:max-w-[650px] py-12  text-gray-800 leading-tight font-semibold text-center">Discover the world of Matcha</h1>
          </div>
          <div className="flex  flex-col lg:flex-row gap-6 items-start pt-6">
            <div className="flex flex-col gap-8 w-full lg:w-[350px] shrink-0">
              {/* first */}
              <div className="bg-[#E3E2E4] p-5 relative rounded-xl overflow-hidden flex flex-col gap-25">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-[17px] tracking-[0.1em] leading-tight">Culinary Grade Matcha</h1>
                    <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin max-w-[190px] leading-tight">Balanced taste and affordable for everyday use</p>
                  </div>
                  <h2 className="font-semibold text-[10px] tracking-[0.1em] whitespace-nowrap">料理用グレードの抹茶</h2>
                  {/* nowrap use to force text in single line */}
                </div>
                <div className=" relative flex justify-between items-end">
                  <h1 className="flex items-center gap-2 font-semibold text-[20px]">
                    $18
                    <span className="font-normal text-[12px] leading-none">
                      /50 gr
                    </span>
                  </h1>
                  <img src="images/seasonal_variant.png" alt="seasional"
                    className="w-[170px] h-auto object-contain absolute bottom-[-60px]  right-[-60px]" />
                </div>
              </div>
              {/* second */}
              <div className="bg-[#E3E2E4] p-5 relative rounded-xl overflow-hidden flex flex-col gap-25">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-[17px] tracking-[0.1em] leading-tight">Seasonal Variant</h1>
                    <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin max-w-[190px] leading-tight">Premium matcha and cozy  pumpkin spice</p>
                  </div>
                  <h2 className="font-semibold text-[10px] tracking-[0.1em] text-right">季節限定の抹茶バリエーション</h2>
                </div>
                <div className="flex justify-between items-end relative">
                  <h1 className="flex items-center gap-2 font-semibold text-[20px]">
                    $18
                    <span className="font-normal text-[12px] leading-none">
                      /50 gr
                    </span>
                  </h1>
                  <img src="images/pumpkin.png" alt="ceremonial"
                    className="w-[170px] h-auto object-contain absolute bottom-[-60px]  right-[-60px] scale-[1.4]" />
                </div>
              </div>
            </div>

            <div className="bg-[#E3E2E4] p-9 relative rounded-xl overflow-hidden flex flex-col w-full lg:w-[620px]  min-h-[516px]">

              <div className="flex flex-col gap-6">
                <h1 className="font-medium text-[20px] tracking-[0.1em]">儀式用抹茶</h1>
                <h1 className="font-semibold text-[27px]  max-w-[250px] tracking-[0.1em] leading-tight">Ceremonial Grade Matcha</h1>
                <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin max-w-[190px] leading-tight">Rich in antioxidants, sourced directly from Japan.</p>
              </div>

              <div className="lg:mt-auto flex justify-between items-end py-4">
                <h1 className="font-semibold text-3xl">$32 <span className="font-normal text-xl leading-none">/30 gr</span></h1>
                <img src="/images/ceremonial_matcha_bowl.png" alt="ceremonial" className=" w-[180px] lg:w-[280px] h-auto object-contain absolute bottom-[-10px] lg:bottom-[-20px]  right-[-10px] lg:right-[-20px] scale-[1.3]" />
              </div>
            </div>
          </div>

          <div className="flex pt-6 gap-6 flex-col lg:flex-row">
            {/* first bottom card */}
            <div className="bg-[#E3E2E4]  flex-1 basis-0 p-5 relative rounded-xl overflow-hidden flex flex-col min-h-[270px] gap-10 lg:gap-12">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-[17px]">Bamboo Whisk(Chasen)</h1>
                <p className="font-normal text-[12px] max-w-[190px] text-[#71716C] ">
                  A must-have for smooth, lump-free matcha experience
                </p>
              </div>
              <div className="flex">
                <h1 className="flex items-end">$12</h1>
                <img src="/images/bamboo_whisk.png" alt="bamboo_whisk" className="w-[120px] h-[120px] scale-[1.1] object-contain" />
                <h2 className="flex items-end font-semibold text-[10px]  max-w-[150px] lg:max-w-[100px] tracking-[0.1em] text-right">茶筅を使った抹茶のバリエーション</h2>
              </div>
            </div>

            {/* second bottom card */}
            <div className="bg-[#E3E2E4] flex-1 basis-0 p-5 relative rounded-xl overflow-hidden flex flex-col min-h-[270px] gap-10 lg:gap-12">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-[17px] whitespace-nowrap">Matcha Mug</h1>
                <p className="font-normal text-[12px] max-w-[210px] text-[#71716C] ">
                  Handcrafted, ergonomic design with a matte finish
                </p>
              </div>
              <div className="flex gap-10">
                <h1 className="flex items-end">$10</h1>
                <img src="/images/newMug.png" alt="newmug" className="w-[120px] h-[120px] object-contain scale-[1.6]" />
                <h2 className="flex items-end font-semibold max-w-[150px] lg:max-w-[100px] text-[10px] max-w-[100px] tracking-[0.1em] text-right">抹茶一杯</h2>
              </div>
            </div>

            {/* third bottom card */}
            <div className="bg-[#E3E2E4] flex-1 basis-0 p-5 relative rounded-xl overflow-hidden flex flex-col min-h-[270px] gap-10 lg:gap-12">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-[17px] whitespace-nowrap">Matcha Tea Pot</h1>
                <p className="font-normal text-[12px] max-w-[240px] text-[#71716C] ">
                  Ideal for brewing matcha-infused tea.Holds up to 500ml
                </p>
              </div>
              <div className="flex gap-10">
                <h1 className="flex items-end">$35</h1>
                <img src="/images/matcha_teapot.png" alt="matcha_tea_pot" className="w-[120px] h-[120px] scale-[1.1] object-contain" />
                <h2 className="flex items-end font-semibold text-[10px] max-w-[150px] lg:max-w-[100px] tracking-[0.1em] text-right">抹茶一服</h2>
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* explore matcha section */}
      <section className="bg-[#E6E6DE] flex flex-col">
        <div className="flex justify-center items-center py-15">
          <button className=" flex items-center gap-2 rounded-md bg-[#C8F82C] px-2 py-2 text-xs font-medium text-[#0B1A0C]">Explore All Products <ArrowRightCircle size={16} color="#020000ff" strokeWidth={1.5} /></button>
        </div>
        <div className="flex flex-row justify-center p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch items-center flex-1 max-w-[1020px] mx-auto ">
          {/* first card-explore */}
          <div className="bg-[#E3E2E4]  max-w-[360px] items-center lg:max-w-[300px] p-5 overflow-hidden rounded-xl lg:flex-col">
            <div className="flex flex-row gap-20 lg:gap-10">
              <div className="flex flex-col  gap-3 lg:gap-4">
                <h1 className="font-semibold text-[17px] tracking-[0.1em] leading-tight">Matcha Latte Mix</h1>
                <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin max-w-[190px] leading-tight">Pre-mixed matcha latte natural sweetener and creamy taste</p>
              </div>
              <div>
                <h1 className="font-semibold text-[17px] tracking-[0.1em] leading-tight">$5</h1>
              </div>
            </div>
            <div className="relative rounded-xl translate-y-[10px]">
              <img src="/images/coldcoffe.png" alt="coldcoffe" className="w-full h-[280px] translate-y-[10px] scale-[1.2] flex bottom-0 right-0 w-[100%] object-contain" />
              <div className="absolute -inset-x-6 bottom-0 translate-y-[10px] w-[500px] h-[150px] bg-gradient-to-t from-white/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent)] z-0 pointer-events-none"></div>
              <h1 className="absolute bottom-8 w-full text-center text-white font-bold text-[25px] z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide">
                Latte Mix</h1>
            </div>
          </div>
          {/* second cards -explore */}
          <div className="flex flex-col  items-center gap-6">

            <h1 className="font-bold text-[36px] tracking-[0.1em] leading-tight text-center">
              Matcha Pairing Essentials
            </h1>
            <p className="text-[10px] lg:text-[15px] text-[#71716C] font-extrathin leading-tight text-center max-w-[230px] mx-auto">
              Explore ideal matcha pairings! <br />
              Our kits include premium matcha, <br />
              tips to elevate your experience
            </p>

            <div className="flex flex-col h-full justify-end">
              <button className=" flex items-center gap-2 rounded-md bg-[#C8F82C] px-2 py-2 text-xs font-medium text-[#0B1A0C]">Explore All Products <ArrowRightCircle size={16} color="#020000ff" strokeWidth={1.5} /></button>
            </div>
          </div>
          {/* third cards -explore */}
          <div className="bg-[#E3E2E4] lg:max-w-[400px] lg:max-h-[500px] rounded-xl p-5 overflow-hidden relative  flex flex-col ">
            <div className="flex lg:flex-row gap-20 lg:gap-5">
              <div className=" flex flex-col gap-4">
                <h1 className="font-exo text-[17px] tracking-[0.1em] leading-tight">Matcha Cake Powder</h1>
                <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin  h-auto w-[200px] lg:max-w-[700px] leading-tight">Matcha cake powder adds vibrant green color and earthy flavor to desserts</p>
              </div>
              <div>
                <h1 className="font-semibold text-[17px] tracking-[0.1em] leading-tight">$5</h1>
              </div>
            </div>
            <div className="relative rounded-xl">
              <img src="/images/cheesecake.png" alt="cheesecake" className="w-full h-[280px] translate-y-[30px] scale-[1.2] lg:scale-[1.4] flex bottom-0 right-0 w-[100%] object-contain" />
              <div className="absolute -inset-x-6 bottom-0 translate-y-[10px] w-[500px] h-[150px] bg-gradient-to-t from-white/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent)] z-0 pointer-events-none"></div>
              <h1 className="absolute bottom-8 w-full text-center text-white font-bold text-[25px] z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide">
                Cake Kit</h1>
            </div>
          </div>
        </div>
      </section >

      {/* footer */}
      <section className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_50%_1%,#2A4125_5%,#21371F_18%,#122415_38%,#05170C_65%)] text-white">
        {/* navbar */}
        <div className="flex flex-col p-16 leading-tight ">
          {/* left side */}
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col gap-4">
              <h1 className="text-[2.5em]  max-w-[800px] lg:max-w-[500px]"> Save up to 50% or more on matcha powder</h1>
              <p className="text-[10px] lg:text-[13px] text-[#71716C] font-extrathin whitespace-nowrap h-auto w-[200px] lg:max-w-[700px] leading-tight">
                Get 50% off our premium matcha powder this double date
              </p>
              <div className="py-12">
                <button className=" flex items-center gap-2 rounded-md bg-[#C8F82C] px-2 py-2 text-xs font-medium text-[#0B1A0C]">Subscribe Us <ArrowRightCircle size={16} color="#020000ff" strokeWidth={1.5} /></button>
              </div>
            </div>
            <div>
              <nav className="pt-3 px-6 flex flex-row gap-6 text-[16px]">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Testimonials</a>
              </nav>
            </div>
          </div>

          <div className="flex flex-row gap-8 whitespace-nowrap lg:gap-12  text-[15px] lg:text-[17px]">
            <span>+62 812 3456 7890</span>
            <span>maton@gmail.com</span>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="grid grid-cols-2 py-20 gap-7  text-[#C2C2BC] font-extrathin whitespace-nowrap">
              <NavLink to="/products" className="flex items-center gap-2">
                Matcha powder<ArrowRight className="text-xs w-3 h-3 -rotate-40" />
              </NavLink>
              <NavLink to="/testimonial" className="flex items-center gap-2">
                Matcha starter kit <ArrowRight className="text-xs w-3 h-3 -rotate-40" />
              </NavLink>
              <NavLink to="/testimonial" className="flex items-center gap-2">
                Matcha latte mix <ArrowRight className="text-xs w-3 h-3 -rotate-40" />
              </NavLink>
              <NavLink to="/testimonial" className="flex items-center gap-2">
                Matcha cake powder  <ArrowRight className="text-xs w-3 h-3 -rotate-40" />
              </NavLink>
            </div>
            <div>
              <div>
                <img src="/images/collections.png" alt="collections" className=" flext items-right w-[200px] h-[200px] object-contain" />
              </div>
              <div>
                <a href="#">Privacy & policy</a>
                <a href="#">Terms & conditions</a>
              </div>
            </div>
          </div>
          {/* right section */}
          {/* <div className="flex">
            <span>maton © 2024</span>
            <div>
              <a href="#">Privacy & policy</a>
              <a href="#">Terms & conditions</a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;