'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      Aos.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-gray-50 pt-[140px]">
      {/* section 1*/}
      <div
        data-aos="fade-down"
        className="w-full max-w-4xl text-center bg-white shadow-lg p-6 rounded-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800">
        About KATEC
        </h2>
        <p className="mt-4 text-gray-600">
        KATEC은 밴쿠버 지역 한인 IT 개발자들이 소통하고 협력하는 커뮤니티입니다. 💻✨
        </p>
      </div>

      <div 
      data-aos="fade-down"
      className="w-full max-w-4xl bg-white shadow-lg p-6 rounded-lg border border-gray-200"
      style={{ height: '280px' }}
      >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        NULL IMAGE EXAMPLE
      </h2>
      </div>


      {/* center grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* About Us Section */}
        <div
          data-aos="fade-right"
          className="bg-white p-6 rounded-lg shadow border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-700">About Us</h3>
          <p className="mt-2 text-gray-600">
          about us message
          </p>
        </div>

        {/* Section example 1 */}
        <div
          data-aos="fade-left"
          className="bg-white p-6 rounded-lg shadow border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-700">Section example 1</h3>
          <p className="mt-2 text-gray-600">
          Section example message 1
          </p>
        </div>

        {/* Section example 2 */}
        <div
          data-aos="fade-right"
          className="bg-white p-6 rounded-lg shadow border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-700">
            Section example 2
          </h3>
          <p className="mt-2 text-gray-600">
            Section example message 2
          </p>
        </div>

        {/* Section example 3 */}
        <div
          data-aos="fade-left"
          className="bg-white p-6 rounded-lg shadow border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-700">Section example 3</h3>
          <p className="mt-2 text-gray-600">
          Section example message 3
          </p>
        </div>

        <div 
      data-aos="fade-up"
      className="w-full max-w-4xl bg-white shadow-lg p-6 rounded-lg border border-gray-200"
      style={{ height: '280px' }}
      >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
      NULL IMAGE EXAMPLE
      </h2>
      </div>

      <div 
      data-aos="fade-up"
      className="w-full max-w-4xl bg-white shadow-lg p-6 rounded-lg border border-gray-200"
      style={{ height: '280px' }}
      >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
      NULL IMAGE EXAMPLE
      </h2>
      </div>

      {/* tree */}

      </div>
      <div className="relative w-full max-w-4xl py-10 flex-col item-center px-0">

        {/* tree node - 1 */}
        <div data-aos="fade-down" className="relative flex items-center w-full">
          {/* text on the left */}
          <div className="w-[45%] text-gray-600 text-sm text-right pr-6">
          <div className="font-semibold">2024 09월</div>
          <div>KATEC Re-Branding 시작</div>
          </div>
          {/* center circle and line */}
          <div className="relative flex flex-col items-center">
            <div className="h-12 w-0.5 bg-gray-300"></div>
            <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
            <div className="h-12 w-0.5 bg-gray-300"></div>
          </div>
          {/* padding right */}
          <div className="w-[45%]"></div>
        </div>

        {/* tree node - 2 */}
        <div data-aos="fade-down" className="relative flex items-center w-full">
          {/* padding left */}
          <div className="w-[45%]"></div>
          {/* center circle and line */}
          <div className="relative flex flex-col items-center">
            <div className="h-12 w-0.5 bg-gray-300"></div>
            <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
            <div className="h-12 w-0.5 bg-gray-300"></div>
          </div>
          {/* text on the right */}
          <div className="w-[45%] text-gray-600 text-sm text-left pl-6">
          <div className="font-semibold">2024 10월</div>
          <div></div>
          </div>
        </div>

        {/* tree node - 3 */}
        <div data-aos="fade-down" className="relative flex items-center w-full">
          {/* text on the left */}
          <div className="w-[45%] text-gray-600 text-sm text-right pr-6">
          <div className="font-semibold">2024 11월</div>
          <div>LinkedIn 페이지 개설</div>
          <div>DrawDream INC 파트너십 협약 체결</div>
          </div>
          {/* center circle and line */}
          <div className="relative flex flex-col items-center">
            <div className="h-12 w-0.5 bg-gray-300"></div>
            <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
            <div className="h-12 w-0.5 bg-gray-300"></div>
          </div>
          {/* padding right */}
          <div className="w-[45%]"></div>
        </div>

        {/* tree node - 4 */}
        <div data-aos="fade-down" className="relative flex items-center w-full">
          {/* padding left */}
          <div className="w-[45%]"></div>
          {/* center circle and line */}
          <div className="relative flex flex-col items-center">
            <div className="h-12 w-0.5 bg-gray-300"></div>
            <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
            <div className="h-12 w-0.5 bg-gray-300"></div>
          </div>
          {/* text on the right */}
          <div className="w-[45%] text-gray-600 text-sm text-left pl-6 pr-0">
          <div className="font-semibold">2024 12월</div>
          <div>Static 페이지 오픈</div>
          </div>
        </div>

        {/* tree node - 5 */}
        <div data-aos="fade-down" className="relative flex items-center w-full">
          {/* text on the left */}
          <div className="w-[45%] text-gray-600 text-sm text-right pr-6">
          <div className="font-semibold">2025 1월</div>
          <div>KATEC Vancouver 공식 홈페이지 오픈</div>
          </div>
          {/* center circle and line */}
          <div className="relative flex flex-col items-center">
            <div className="h-12 w-0.5 bg-gray-300"></div>
            <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
            <div className="h-12 w-0.5 bg-gray-300"></div>
          </div>
          {/* padding right */}
          <div className="w-[45%]"></div>
        </div>


      </div>
    </div>
  );
};

export default About;
