import { useState, useEffect } from "react";
import Button from "./button.jsx";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        let position = window.scrollY;
        if (position > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full sticky top-0 flex flex-col py-3 transition-all duration-500 ${isScrolled
                ? "h-[190px] bg-[#E2D3FA]"
                : "h-[330px] rounded-b-[26px] bg-cover bg-bottom"
                }`}
            style={{
                backgroundImage: isScrolled ? "none" : "url('./background.png')",
                backgroundColor: isScrolled ? "#E2D3FA" : "transparent",
                transition: 'height 0.5s ease, background-color 0.5s ease, background-image 0.5s ease'
            }}
        >
            <div className="flex flex-row w-full items-center px-5 ">
                <h3 className={`text-[22px] flex-1 capitalize font-normal ${isScrolled ? "text-black" : "text-white"}`}>khabidid nosule</h3>
                <div className="flex flex-row items-center relative mt-1">
                    <input
                        type="text"
                        className="py-1 text-center  w-[150px] bg-transparent border-none focus:ring-0 focus:bg-[#E2D3FA] rounded-full outline-none"
                    />
                    <img
                        src= { isScrolled ? "./blacksearch.svg"  :  "./search.svg"}
                        alt="search"
                        className="absolute right-3 h-5 w-5"
                    />
                </div>
            </div>
            <div className={`flex flex-row w-full justify-between px-5 ${isScrolled ? "mt-2" : ""}`}>
                <div className={`flex flex-row  ${isScrolled ? "mt-0 items-start" : "items-end"}`}>
                    <h1 className={` ${isScrolled ? "text-6xl text-black" : "text-8xl text-white"} `}>3°</h1>
                    <small className={` ${isScrolled ? "text-base text-black mt-9" : "text-base text-white"} font-normal`}>Feels like 20°</small>
                </div>
                <div className={`flex flex-col gap-y-1 ${isScrolled ? "" : "mt-10 items-start"}`}>
                    <img
                        src="./sun.svg"
                        alt="weather icon"
                        className={ isScrolled ? `h-14 w-14` : `h-20 w-20`}
                    />
                    {!isScrolled && <h3 className="text-white text-2xl font-normal">Sunny</h3>}
                </div>
            </div>
            <div className={`absolute flex flex-row w-full bottom-1.5 justify-between items-center px-5  ${isScrolled ? "hidden" : ""}`}>
                <h3 className="text-white text-lg">January 18 16:34</h3>
                <div className="flex flex-col gap-y-1 items-end">
                    <h3 className="text-white text-lg font-medium">Day 26°</h3>
                    <h3 className="text-white text-lg font-medium">Night 10°</h3>
                </div>
            </div>
            <div className={`flex flex-row gap-x-3.5 justify-center w-full items-center px-2  ${isScrolled ? "pt-2.5" : "absolute -bottom-16 right-0"}`}>
                <Button array={[
                    { text: "Today" },
                    { text: "Tomorrow" },
                    { text: "10 days" },
                ]}
                />
            </div>
        </header>
    );
}
