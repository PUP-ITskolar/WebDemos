// THIS WEBSITE WILL NOW HOUSE ALL THE CRASH COURSE EPISODES!

import "../index.css";


export default function Main() {
    return (
        <div id="container" className="flex flex-col justify-center content-center w-11/12 lg:w-6/12 lg:p-10 ">
            <div id="header" className="flex flex-col p-8">
                <p className="title">Crash Course 2 - Interactive Demonstration</p>
            </div>
            <div>
                <p>Sorting</p>
                <a href="/sort/insertion">Insertion Sort</a>
                <a href="/sort/selection">Selection Sort</a>
                <a href="/sort/bubble">Bubble Sort</a>
                <br/>
                <a href="/search/linear">Linear Search</a>
                <a href="/search/binary">Binary Search</a>
            </div>
        </div>
    );
}
