'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white-800 text-black py-4 bg-gray-100">
      <div className="flex items-center justify-between max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] mx-auto">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/nonBg-logo.png"
            alt="Logo"
            className="h-11 md:h-12 cursor-pointer"
          />
        </Link>

        {/* Text */}
        <p className="text-sm md:text-base text-gray-400 text-end">
          2024 KATEC. All Rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
