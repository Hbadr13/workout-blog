import { Search02Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="hover:text-neutral-600  text-black "
    >
      {children}
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className=" relative  flex-row    h-full  shadow-input flex justify-center  items-center  space-x-10 px-8 hghpy-10 "
    >
      {children}
    </nav>
  );
};
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black  flex flex-row hover:opacity-[0.9] "
      >
        {item}
        <Icon icon="lucide:chevron-down" width="20" height="20" className="mt-1 ml-1" />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-blue-100  backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`fixed top-0 z-30 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } py-4`}
    >
      <div className="w-full max-w-[1300px] mx-auto relative pt-4 px-2">
        <div>
          <div className="w-full h-16  md:h-20 bg-blue-50 border-2 border-blue-300  skew-x-0 md:-skew-x-6 p-1 rounded-md shadow-lg">
            <div className=" skew-x-0 md:skew-x-6 w-full h-full pr-3  md:pr-10 flex items-center justify-between">
              <Link href={"/"}>
                <Image
                  className=" w-60 origin-center"
                  src={"/logo.png"}
                  width={1000}
                  height={1000}
                  alt="logo"
                />
              </Link>
              <Menu setActive={setActive}>
                <HoveredLink href="#">Home</HoveredLink>
                <MenuItem setActive={setActive} active={active} item="Categories">
                  <div className="flex  flex-col space-y-6 md:px-6">
                    {/* <HoveredLink href="#">All</HoveredLink>
                    <HoveredLink href="#">
                    Weight Loss
                    </HoveredLink>
                    <HoveredLink href="#">
                    Muscle Building and Strength Training
                    </HoveredLink>
                    <HoveredLink href="#">
                    Fitness for Beginners
                    </HoveredLink>
                    <HoveredLink href="#">
                    Technology in Fitness
                    </HoveredLink>
                    <HoveredLink href="#">
                    Recovery and Injury Prevention
                    </HoveredLink>
                    <HoveredLink href="#">
                    Fitness Myths and Facts
                    </HoveredLink>
                    <HoveredLink href="#">
                    Fitness Tips
                    </HoveredLink> */}

                    <HoveredLink href="/categories/all">All</HoveredLink>
                    <HoveredLink href="/categories/beauty">Beauty</HoveredLink>
                    <HoveredLink href="/categories/fitness">Fitness</HoveredLink>
                    <HoveredLink href="/categories/health">Health</HoveredLink>

                  </div>
                </MenuItem>

                <HoveredLink href="#">About</HoveredLink>
                <HoveredLink href="#">Contact Us</HoveredLink>
              </Menu>
              <div className="relative" ref={dropdownRef}>
                <div className="flex  bg-ddblack l  flex-row-reverse  w-auto  space-x-10">
                  {dropdownOpen == true && (
                    <div className=" relative  w-0 hidden md:block md:w-[300px] h-12  rounded-xl ">
                      <input className="bg-white border-2 border-blue-400 relative z-0 w-full h-full pr-20 pl-2  outline-none rounded-xl" />
                      <div className=" absolute  flex justify-center items-center inset-y-0 right-4 z-10 opacity-75">
                        <Search02Icon size={32} />
                      </div>
                    </div>
                  )}
                  {dropdownOpen == false && (
                    <>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="   flex justify-center items-center  ml-8 opacity-75"
                      >
                        <Search02Icon size={32} />
                      </button>
                      <div className=" h-10 md:h-12 w-[140px] md:w-[180px] flex bg-blue-600 rounded-md -skew-x-12    after:left-0 after:bg-blue-500 after:rounded-md after:h-full  after:w-0   after:transition-all after:bottom-0   hover:after:w-full  after:duration-500 justify-start  items-enter relative  ">
                        <button className=" absolute  flex  bg-sblack w-full h-full justify-center      items-center  space-x-1.5 md:space-x-4">
                          <a
                            href="#"
                            className="text-white text-xl md:text-2xl truncate skew-x-12 flex justify-center items-center "
                          >
                            Get Started
                          </a>
                          <div className="w-1 h-full -skew-fsx-12 text-white bg-white"></div>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
