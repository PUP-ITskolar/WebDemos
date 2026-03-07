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
export function useArray() {
    const [items, setItems] = useState(_);
    const [selectedItemPurp, setSelectedItemPurp] = useState(0);
    const [disableBackPurp, setDisableBackPurp] = useState(true);
    const [disableFrontPurp, setDisableFrontPurp] = useState(false);
    const [selectedItemBlue, setSelectedItemBlue] = useState(1);
    const [disableBackBlue, setDisableBackBlue] = useState(true);
    const [disableFrontBlue, setDisableFrontBlue] = useState(false);
    function goBackPurp() {
        if (selectedItemPurp - 1 <= 0) {
            setDisableBackPurp(true);
        } else {
            setDisableFrontPurp(false);
        }
        setSelectedItemPurp(selectedItemPurp - 1);
    }
    function goFrontPurp() {
        if (selectedItemPurp + 1 >= 9) {
            setDisableFrontPurp(true);
        } else {
            setDisableBackPurp(false);
        }
        setSelectedItemPurp(selectedItemPurp + 1);
    }
    function goBackBlue() {
        if (selectedItemBlue - 1 <= 0) {
            setDisableBackBlue(true);
        } else {
            setDisableFrontBlue(false);
        }
        setSelectedItemBlue(selectedItemBlue - 1);
    }
    function goFrontBlue() {
        if (selectedItemBlue + 1 >= 9) {
            setDisableFrontBlue(true);
        } else {
            setDisableBackBlue(false);
        }
        setSelectedItemBlue(selectedItemBlue + 1);
    }
    function swap() {
        let cache = [...items];
        cache[selectedItemPurp] += cache[selectedItemBlue];
        cache[selectedItemBlue] = cache[selectedItemPurp] - cache[selectedItemBlue];
        cache[selectedItemPurp] -= cache[selectedItemBlue];
        setItems(cache);
    }

    return {
        items,
        selectedItemPurp,
        disableBackPurp,
        disableFrontPurp,
        goBackPurp,
        goFrontPurp,
        selectedItemBlue,
        disableBackBlue,
        disableFrontBlue,
        goBackBlue,
        goFrontBlue,
        swap,
    };
}
_ = shuffleCopy(_);
export default function SelectionSort() {
    const array = useArray();
    return (
        <div id="container" className="flex flex-col justify-center content-center w-11/12 lg:w-6/12 lg:p-10 ">
            <div id="header" className="flex flex-col p-8">
                <p className="title">Crash Course 2 - Interactive Demonstration</p>
                <p className="subtitle">Selection Sort</p>
            </div>
            <div id="controlcont pl" className="p-2">
                <div id="content" className="flex flex-row justify-center items-end w-full">
                    {array.items.map((item, index) => {
                        let color = "";
                        if (array.selectedItemBlue == index) color = "bg-blue-400";
                        else if (array.selectedItemPurp == index) color = "bg-purple-400";
                        else color = "bg-blue-50";
                        return (
                            <div key={index} className={`border w-8 text-center m-1.25 p-0 ${color} box`} style={{ height: `${item * 1.25}rem` }}>
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div id="controls" className="flex justify-center m-2">
                    <div>
                        <button onClick={() => array.goBackPurp()} disabled={array.disableBackPurp} className="m-2 p-2 border bg-purple-400">
                            &lt;
                        </button>
                        <button onClick={() => array.goFrontPurp()} disabled={array.disableFrontPurp} className="m-2 p-2 border bg-purple-400">
                            &gt;
                        </button>
                    </div>
                    <button onClick={() => array.swap()} className="m-2 p-2 border bg-white">
                        Swap
                    </button>
                    <div>
                        <button onClick={() => array.goBackBlue()} disabled={array.disableBackBlue} className="m-2 p-2 border bg-blue-400">
                            &lt;
                        </button>
                        <button onClick={() => array.goFrontBlue()} disabled={array.disableFrontBlue} className="m-2 p-2 border bg-blue-400">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-8 mb-6 text-center">
                <p className="text-sm text-gray-500 ">
                    <span className="font-bold">Concept by: </span>bonnyyyy
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-bold">Design by: </span>akihikooooo
                </p>
            </div>
        </div>
    );
}
