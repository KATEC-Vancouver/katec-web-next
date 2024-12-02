// 'use client';
// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".card-container", // 카드 섹션을 감지
//         pin: true, // 고정
//         start: "top 20%", // 시작 위치
//         end: "bottom+=1500 bottom", // 종료 위치
//         scrub: 1, // 부드러운 스크롤
//       },
      
//     });

//     // 각 카드가 위로 모이도록 설정
//     tl.to(".section1", {
//       y: "-100%", // 위로 이동
//       zIndex: 1, // 가장 위에 나타나게
//       duration: 1,
//     })
//       .to(".section2", {
//         y: "-170%", // 같은 위치로 이동
//         zIndex: 2, // 두 번째로 위에 나타나게
//         duration: 1,
//       }, "-=1") // 이전 애니메이션과 겹쳐 시작
//       .to(".section3", {
//         y: "-240%", // 같은 위치로 이동
//         zIndex: 3, // 세 번째로 위에 나타나게
//         duration: 1,
//       }, "-=1")
//       .to(".section4", {
//         y: "-310%", // 같은 위치로 이동
//         zIndex: 4, // 네 번째로 위에 나타나게
//         duration: 1,
//       }, "-=1");

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-gray-50 pt-[140px]">
//       {/* 카드 섹션 */}
//       <div
//         className="card-container relative flex flex-col items-center justify-center gap-8 px-4 py-20 max-w-6xl mx-auto"
//         style={{
//           // 네브바 하단에서 시작
//           paddingTop: "150px", // 네브바 높이를 고려한 상단 여백
//           paddingBottom: "300px", // 푸터와의 간격 유지
//         }}
//       >
//         {/* 섹션 1 */}
//         <div
//           className="section1 bg-white shadow-lg p-16 rounded-lg border border-gray-200 text-center mb-3 w-full"
//         >
//           <h2 className="text-2xl font-bold text-gray-800">About KATEC</h2>
//           <p className="mt-4 text-gray-600">
//             KATEC은 밴쿠버 지역 한인 IT 개발자들이 소통하고 협력하는 커뮤니티입니다. 💻✨
//           </p>
//         </div>

//         {/* 섹션 2 */}
//         <div
//           className="section2 bg-white shadow-lg p-16 rounded-lg border border-gray-200 text-center mb-3 w-full"
//         >
//           <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
//           <p className="mt-4 text-gray-600">
//             기술 혁신을 통해 커뮤니티의 발전에 기여하며, 다양한 협력 프로젝트를 통해 성장을 도모합니다.
//           </p>
//         </div>

//         {/* 섹션 3 */}
//         <div
//           className="section3 bg-white shadow-lg p-16 rounded-lg border border-gray-200 text-center mb-3 w-full"
//         >
//           <h2 className="text-2xl font-bold text-gray-800">Join Us</h2>
//           <p className="mt-4 text-gray-600">
//             지금 바로 가입하고 다양한 네트워킹 기회를 통해 함께 성장하세요!
//           </p>
//         </div>

//         {/* 섹션 4 */}
//         <div
//           className="section4 bg-white shadow-lg p-16 rounded-lg border border-gray-200 text-center mb-3 w-full"
//         >
//           <h2 className="text-2xl font-bold text-gray-800">Stay Connected</h2>
//           <p className="mt-4 text-gray-600">
//             저희 커뮤니티의 소식을 놓치지 않도록 최신 소식을 구독하세요! 📩
//           </p>
//         </div>
//       </div>

//       <div className="static w-full max-w-4xl py-10 flex-col item-center px-0">

//       tree node - 1
//       <div data-aos="fade-down" className="relative flex items-center w-full">
//         {/* text on the left */}
//         <div className="w-[45%] text-gray-600 text-sm text-right pr-6">
//         <div className="font-semibold">2024 09월</div>
//         <div>KATEC Re-Branding 시작</div>
//         </div>
//         {/* center circle and line */}
//         <div className="relative flex flex-col items-center">
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//           <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//         </div>
//         {/* padding right */}
//         <div className="w-[45%]"></div>
//       </div>

//       {/* tree node - 2 */}
//       <div data-aos="fade-down" className="relative flex items-center w-full">
//         {/* padding left */}
//         <div className="w-[45%]"></div>
//         {/* center circle and line */}
//         <div className="relative flex flex-col items-center">
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//           <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//         </div>
//         {/* text on the right */}
//         <div className="w-[45%] text-gray-600 text-sm text-left pl-6">
//         <div className="font-semibold">2024 10월</div>
//         <div></div>
//         </div>
//       </div>

//       {/* tree node - 3 */}
//       <div data-aos="fade-down" className="relative flex items-center w-full">
//         {/* text on the left */}
//         <div className="w-[45%] text-gray-600 text-sm text-right pr-6">
//         <div className="font-semibold">2024 11월</div>
//         <div>LinkedIn 페이지 개설</div>
//         <div>DrawDream INC 파트너십 협약 체결</div>
//         </div>
//         {/* center circle and line */}
//         <div className="relative flex flex-col items-center">
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//           <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//         </div>
//         {/* padding right */}
//         <div className="w-[45%]"></div>
//       </div>

//       {/* tree node - 4 */}
//       <div data-aos="fade-down" className="relative flex items-center w-full">
//         {/* padding left */}
//         <div className="w-[45%]"></div>
//         {/* center circle and line */}
//         <div className="relative flex flex-col items-center">
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//           <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//         </div>
//         {/* text on the right */}
//         <div className="w-[45%] text-gray-600 text-sm text-left pl-6 pr-0">
//         <div className="font-semibold">2024 12월</div>
//         <div>Static 페이지 오픈</div>
//         </div>
//       </div>

//       {/* tree node - 5 */}
//       <div data-aos="fade-down" className="relative flex items-center w-full">
//         {/* text on the left */}
//         <div className="w-[45%] text-gray-600 text-sm text-right pr-6">
//         <div className="font-semibold">2025 01월</div>
//         <div>KATEC Vancouver 공식 홈페이지 오픈</div>
//         </div>
//         {/* center circle and line */}
//         <div className="relative flex flex-col items-center">
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//           <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
//           <div className="h-12 w-0.5 bg-gray-300"></div>
//         </div>
//         {/* padding right */}
//         <div className="w-[45%]"></div>
//       </div>
//       </div>
      
//     </div>
//   );
// };

// export default About;
