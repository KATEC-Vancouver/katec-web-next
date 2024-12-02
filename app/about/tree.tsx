'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => (
  <div className="w-full max-w-4xl text-center bg-white shadow-lg p-8 rounded-lg border border-gray-200">
    <h2 className="text-3xl font-bold text-gray-800">About KATEC</h2>
    <p className="mt-4 text-gray-600">
      KATEC은 밴쿠버 지역 한인 IT 개발자들이 소통하고 협력하는 커뮤니티입니다. 💻✨
    </p>
  </div>
);

const MissionSection = () => (
  <div className="w-full max-w-5xl text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">OUR MISSION</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
      {[
        { icon: '🛡️', title: 'PROTECTION OF RIGHTS', description: '개발자 권익보호' },
        { icon: '💬', title: 'COMMUNICATION', description: '개발자 소통 통로' },
        { icon: '🌐', title: 'TECH CULTURE', description: 'S/W 개발 문화 활성화' },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-600">{item.icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const HistorySection = () => {
  const historyData = [
    { date: '2024 09월', text: 'KATEC Re-Branding 시작' },
    { date: '2024 10월', text: '' },
    {
      date: '2024 11월',
      text: ['LinkedIn 페이지 개설', 'DrawDream INC 파트너십 협약 체결'],
    },
    { date: '2024 12월', text: 'Static 페이지 오픈' },
    { date: '2025 01월', text: 'KATEC Vancouver 공식 홈페이지 오픈' },
    { date: '2025 02월', text: 'KATEC 멤버십 프로그램' },
    { date: '2025 03월', text: 'KATEC 회원 커뮤니티 페이지 개설' },
  ];

  return (
    <div className="relative w-full py-20 flex flex-col items-center">
      {/* 중앙선 */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300"
        style={{ width: '0.3vw', height: '100%' }}
      ></div>
      {/* 제목 */}
      <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 text-3xl font-bold text-gray-800">
        History
      </h2>
      {/* 히스토리 아이템 */}
      {historyData.map((node, index) => (
        <div
          key={index}
          className={`relative flex w-full my-16 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* 텍스트 */}
          <div
            className={`absolute ${
              index % 2 === 0 ? 'left-[calc(50%+2vw)]' : 'right-[calc(50%+2vw)]'
            } transform -translate-y-1/2 text-gray-800`}
            style={{
              width: '40vw',
              textAlign: index % 2 === 0 ? 'left' : 'right',
              top: '50%',
            }}
          >
            <div className="font-semibold text-lg">{node.date}</div>
            {Array.isArray(node.text) ? (
              <ul className="mt-2 space-y-1">
                {node.text.map((textItem, i) => (
                  <li key={i}>{textItem}</li>
                ))}
              </ul>
            ) : (
              <div>{node.text}</div>
            )}
          </div>
          {/* 중앙 원 */}
          <div
            className="absolute flex items-center justify-center rounded-full z-10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1.5vw',
              height: '1.5vw',
              backgroundColor: index === historyData.length - 1 ? '#3B82F6' : '#D1D5DB',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};


const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="mx-auto w-full max-w-[1600px] px-4 lg:px-0">
    <div className="w-full flex flex-col items-center">{children}</div>
  </main>
);

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
    <MainLayout>
      <div
        className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-transparent to-blue-50 rounded-b-[50px] -z-10"
        style={{
          height: '70vh',
        }}
      ></div>
      {/* 각 섹션 렌더링 */}
      <div className="mt-20">
        <AboutSection />
      </div>
      <div className="mt-32">
        <MissionSection />
      </div>
      <div className="mt-40">
        <HistorySection />
      </div>
    </MainLayout>
  );
};

export default About;
