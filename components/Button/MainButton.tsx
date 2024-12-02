"use client";

import React from "react";
import classnames from "classnames";

type MainButtonProps = {
  iconResting: string;
  iconActive: string;
  label?: string;
  onClick?: () => void;
};

export const MainButton = ({
  iconResting,
  iconActive,
  label,
  onClick,
}: MainButtonProps) => {
  const iconRestingClass = classnames(
    "mfb-component__main-icon--resting",
    iconResting
  );
  const iconActiveClass = classnames(
    "mfb-component__main-icon--active",
    iconActive
  );

  return (
    <a
      href="#"
      className="mfb-component__button--main"
      onClick={onClick}
      data-mfb-label={label}
    >
      <i className={iconRestingClass}></i>
      <i className={iconActiveClass}></i>
    </a>
  );
};

export default MainButton;
