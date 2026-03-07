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
    const [selectedItem, setSelectedItem] = useState(1);
    const [disableBack, setDisableBack] = useState(true);
    const [disableFront, setDisableFront] = useState(false);
    const [onSelect, setOnSelect] = useState(false)
    function goBack() {
        setOnSelect(false)
        if (selectedItem - 1 <= 1) {
            setDisableBack(true);
        } else {
            setDisableFront(false);
        }
        setSelectedItem(selectedItem - 1);
    }
    function goFront() {
        setOnSelect(false)
        if (selectedItem + 1 >= 10) {
            setDisableFront(true);
        } else {
            setDisableBack(false);
        }
        setSelectedItem(selectedItem + 1);
    }
    function select() {
        setOnSelect(true)
    }

    return { items, selectedItem, disableBack, disableFront, onSelect, goBack, goFront, select };
}
_ = shuffleCopy(_);
export default function BubbleSort() {
    const array = useArray();
    return (
        <div id="container" className="flex flex-col justify-center content-center w-11/12 lg:w-6/12 lg:p-10 ">
            <div id="header" className="flex flex-col p-8">
                <p className="title">Crash Course 2 - Interactive Demonstration</p>
                <p className="subtitle">Linear Search</p>
            </div>
            <div id="controlcont pl" className="p-2">
                <div id="content" className="flex flex-row justify-center items-end w-full">
                    {array.items.map((item, index) => {
                        let color = "";
                        if (array.selectedItem == index + 1) color = "bg-blue-400";
                        else color = "bg-blue-50";
                        const height = (array.selectedItem - 1 == index && array.onSelect) ?  `${item * 1.25}rem` : "12.5rem"
                        return (
                            <div key={index} className={`border w-8 text-center m-1.25 p-0 ${color} box`} style={{ height: height }}>
                                {(array.selectedItem - 1 == index && array.onSelect) ? item : "?"}
                            </div>
                        );
                    })}
                </div>
                <div id="controls" className="flex justify-center m-2">
                    <button onClick={() => array.goBack()} disabled={array.disableBack} className="m-2 p-2 border ">
                        &lt;
                    </button>
                    <button onClick={() => array.select()} className="m-2 p-2 border">
                        Select
                    </button>
                    <button onClick={() => array.goFront()} disabled={array.disableFront} className="m-2 p-2 border">
                        &gt;
                    </button>
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
