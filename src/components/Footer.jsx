import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkBase px-6 pt-12 pb-8 lg:px-[64px] lg:pt-[48px] lg:pb-[32px] border-t border-[#1E1E1E] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center">
            <img src="./src/assets/logo white.png" alt="Brothers Films Logo" className="h-[80px] w-auto object-contain" />
          </div>
          <div className="flex gap-3">
            {/* Social Icons */}
            {['X', 'F', 'I', 'Y'].map((icon, idx) => (
              <a key={idx} href="#" className="w-[32px] h-[32px] rounded-full bg-[#1E1E1E] hover:bg-[#333333] transition-colors flex items-center justify-center">
                <span className="text-white text-[11px] font-inter">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Middle Row (Nav Links) */}
        <div className="flex flex-wrap gap-[24px] mt-[24px]">
          {['About', 'Portfolio', 'Services', 'Careers', 'Contact Us'].map((link, idx) => (
            <a key={idx} href={`#${link.toLowerCase()}`} className="font-inter font-normal text-[14px] text-[#888888] hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#1E1E1E] my-[24px]"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ marginBottom: "50px" }}>
          <div className="font-inter font-normal text-[13px] text-[#555555]">
            <a href="#" className="mr-4 hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          </div>
          <div className="font-inter font-normal text-[13px] text-[#555555]">
            © 2026 Brothers Films Production. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Giant Bottom Text */}
      <div className="mt-[-20px] pointer-events-none select-none text-center">
        <h1 className="font-bebas text-[120px] text-[#1A1A1A] leading-none m-0 p-0">
          Brothers Films Production
        </h1>
      </div>
    </footer >
  );
};

export default Footer;
