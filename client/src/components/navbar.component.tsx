import React from 'react';
import { MdSettings, MdOutlineDarkMode, MdMenu } from 'react-icons/md';

type TProps = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
};

function Navbar({ setIsSidebarOpen, isSidebarOpen }: TProps) {
  return (
    <section className="flex justify-between flex-row p-10 w-full">
      <div className="text-white">
        <MdMenu
          className="cursor-pointer"
          style={{ fontSize: '2.8rem' }}
          onClick={() => setIsSidebarOpen(() => !isSidebarOpen)}
        />
      </div>
      <div
        className="flex flex-row gap-12 text-white"
        style={{ fontSize: '2.8rem' }}
      >
        <MdOutlineDarkMode className="cursor-pointer" />
        <MdSettings />
      </div>
    </section>
  );
}

export default Navbar;
