// THIS WEBSITE WILL NOW HOUSE ALL THE CRASH COURSE EPISODES!

import "../index.css";


export default function Main() {
    return (
        <div id="container" className="flex flex-col justify-center content-center w-11/12 lg:w-6/12 lg:p-10 ">
            <div id="header" className="flex flex-col p-8">
                <p className="title">Crash Course 2 - Interactive Demonstration</p>
            </div>
            <div id="menu-cont"className="flex lg:flex-row flex-1 p-4">
                <div id="sort-cont" className="w-1/2">
                    <p className="font-bold text-xl">Sorting</p>
                    {["Insertion", "Selection", "Bubble"].map((menu, index) => (
                        <a href={`/sort/${menu.toLowerCase()}`} className="menu-name">
                            <p key={index}>
                                {menu} Sort
                            </p>
                        </a>
                    ))}
                </div>

                <div id="search-cont" className="w-1/2">
                    <p className="font-bold text-xl">Search</p>
                    {["Linear", "Binary"].map((menu, index) => (
                        <a href={`/search/${menu.toLowerCase()}`} className="menu-name">
                            <p key={index}>
                                {menu} search
                            </p>
                        </a>
                    ))}
                </div>
            </div>
            <p>Sorry ampanget, rinush kasi ako ni bonnyyyy</p>
        </div>
    );
}
