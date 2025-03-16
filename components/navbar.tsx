import { useState, useRef, useEffect } from "react";
import { Search02Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const categories = [
  { name: "Fitness_Technology&Trends", slug: "Fitness_Technology&Trends" },
  { name: "Injury_Prevention&Recovery", slug: "Injury_Prevention&Recovery" },
  { name: "Motivation&Lifestyle", slug: "Motivation&Lifestyle" },
  { name: "Nutrition&Diet", slug: "Nutrition&Diet" },
  { name: "Weight_Loss&Management", slug: "Weight_Loss&Management" },
  { name: "Workout&Training", slug: "Workout&Training" },
];

export const HoveredLink = ({ children, ...rest }: { children: string; href: string }) => (
  <Link {...rest} className="hover:text-neutral-600 text-black">
    {children}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`fixed top-0 z-30 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} bg-white shadow-lg`}>
      <div className="max-w-[1300px] mx-auto px-1 md:px-4">
        <div className="flex justify-between items-center py-2 md:py-4">
          <div className="">
            <Link className="hidden md:block h-10" href="/">
              <Image src="/logo.png" width={250} height={250} alt="logo" className="hidden md:block h-10 w-44 cursor-pointer" />
            </Link>
            <Link className="  block md:hidden h-10" href="/">
              <Image src="/phone-logo.png" width={100} height={20} alt="logo" className="block md:hidden h-10 w-16 cursor-pointer" />
            </Link>
          </div>

          <nav className="  hidden md:flex items-center space-x-8">
            <HoveredLink href="/">Home</HoveredLink>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-neutral-600">
                <span>Categories</span>
                <Icon className="group-hover:rotate-180" icon="lucide:chevron-down" width="18" height="18" />
              </button>
              <div className=" border absolute left-0 top-full   hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-72">
                <div className="w-full h-5"></div>
                {categories.map((category) => (
                  <Link key={category.slug} href={`/category/${category.slug}`} className="block px-4 py-2 hover:bg-gray-100">
                    {category.name.replace(/_/g, " ")}
                  </Link>
                ))}
              </div>
            </div>
            <HoveredLink href="/#about-us">About Us</HoveredLink>
            <HoveredLink href="/#contact-us">Contact Us</HoveredLink>
          </nav>

          <div className="flex items-center space-x-1 md:space-x-4">
            <div ref={searchRef} className="relative">
              {searchOpen && (
                <div className="flex justify-center space-x-1 absolute top-12 -left-20 md:-left-40 w-[240px] md:w-[350px] p-1 md:p-2 bg-white border border-gray-300 shadow-md rounded-lg">
                  <button className="bg-blue-500 rounded-md p-1 text-white text-xs md:text-base">Seach</button>
                  <input type="text" className="w-full p-1 md:p-2 border rounded-md focus:outline-none" placeholder="Search..." />
                </div>
              )}
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:bg-gray-200 rounded-md">
                <Search02Icon size={24} />
              </button>
            </div>
            <Link href="/#get-started">
              <button className=" text-xs truncate md:text-base px-2 py-2 md:px-5 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Get Started</button>
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-200 rounded-md">
              <Icon icon="lucide:menu" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
          <div className=" flex flex-col space-y-2 p-4">
            <HoveredLink href="/">Home</HoveredLink>
            <div className="relative">
              <button onClick={() => setActive(active === "categories" ? null : "categories")} className="flex items-center space-x-1 w-full text-left">
                <span>Categories</span>
                <Icon icon="lucide:chevron-down" width="18" height="18" />
              </button>
              {active === "categories" && (
                <div className="pl-5 flex flex-col mt-2 space-y-2">
                  {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`} className="pl-4">
                      {category.name.replace(/_/g, " ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <HoveredLink href="/#about-us">About</HoveredLink>
            <HoveredLink href="/#contact-us">Contact Us</HoveredLink>
            <button onClick={() => setSearchOpen(!searchOpen)} className="flex items-center space-x-2 hover:text-blue-500">
              <Search02Icon size={24} />
              <span>Search</span>
            </button>
            <Link href="/#get-started">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Get Started</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
