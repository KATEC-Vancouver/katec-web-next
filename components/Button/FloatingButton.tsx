"use client";

import React, { useState } from "react";
import MainButton from "./MainButton";
import ChildButton from "./ChildButton";

export const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // 열림/닫힘 상태 전환
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-2">
      {/* 메인 버튼 */}
      <MainButton
        iconResting="icon-resting-class"
        iconActive="icon-active-class"
        label="Main Menu"
        onClick={toggleMenu} // 클릭 시 메뉴 열림/닫힘
      />

      {/* 하위 버튼 */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-2">
          <ChildButton
            icon="icon-child-1"
            label="Button 1"
            onClick={() => alert("Button 1 clicked")}
          />
          <ChildButton
            icon="icon-child-2"
            label="Button 2"
            onClick={() => alert("Button 2 clicked")}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
