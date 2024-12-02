'use client';

import React from 'react';

const Eventspage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-gray-50 pt-[140px] min-h-screen">
      {/* 중앙에 배치될 콘텐츠 */}
      <div
        className="w-full max-w-4xl text-center bg-white shadow-lg p-6 rounded-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Eventpage
        </h2>
        <p className="mt-4 text-gray-600">
          공사중...
        </p>
      </div>
    </div>
  );
};

export default Eventspage;
