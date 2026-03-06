// THIS WEBSITE WILL NOW HOUSE ALL THE CRASH COURSE EPISODES!

import "../index.css";
import { useState } from "react";
let _ = Array.from({ length: 10 }, (_, i) => i + 1).sort();
function shuffleCopy(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}
function useArray() {
    const [items, setItems] = useState(_);
    const [selectedItem, setSelectedItem] = useState(1);
    const [disableBack, setDisableBack] = useState(true);
    const [disableFront, setDisableFront] = useState(false);
    function goBack() {
        if (selectedItem - 1 <= 1) {
            setDisableBack(true);
        } else {
            setDisableFront(false);
        }
        setSelectedItem(selectedItem - 1);
    }
    function goFront() {
        if (selectedItem + 1 >= 9) {
            setDisableFront(true);
        } else {
            setDisableBack(false);
        }
        setSelectedItem(selectedItem + 1);
    }
    function swap() {
        let cache = [...items];
        cache[selectedItem] += cache[selectedItem - 1];
        cache[selectedItem - 1] = cache[selectedItem] - cache[selectedItem - 1];
        cache[selectedItem] -= cache[selectedItem - 1];
        setItems(cache);
    }
    
    return { items, selectedItem, disableBack, disableFront, goBack, goFront, swap, };
}
_ = shuffleCopy(_);
export default function Main() {
    const array = useArray();
    return (
        <div id="container" className="flex flex-col justify-center content-center p-10">
            <div id="header" className="flex flex-col ">
                <p className="title">Crash Course 2 - Interactive Demonstration</p>
                <p className="subtitle">By: bonnyyyy</p>
            </div>
            <div id="controlcont">
                <div id="content" className="flex flex-row justify-center items-end">
                    {array.items.map((item, index) => {
                        let color = "";
                        if (array.selectedItem == index) color = "bg-blue-400";
                        else if (array.selectedItem == index + 1) color = "bg-blue-300";
                        else color = "bg-blue-50";
                        return (
                            <div key={index} className={`border w-8 text-center m-1.25 p-0 ${color} box`} style={{ height: `${item * 1.25}rem` }}>
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div id="controls" className="flex justify-center m-2">
                    <button onClick={() => array.goBack()} disabled={array.disableBack} className="m-2 p-2 border ">
                        &lt;
                    </button>
                    <button onClick={() => array.swap()} className="m-2 p-2 border">
                        Swap
                    </button>
                    <button onClick={() => array.goFront()} disabled={array.disableFront} className="m-2 p-2 border">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
