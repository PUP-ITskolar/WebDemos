import { useState } from "react";
export function useArray() {
    const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
    const [selectedItem, setSelectedItem] = useState(1);
    const [disableBack, setDisableBack] = useState(true);
    const [disableFront, setDisableFront] = useState(false);
    const [onSplit, setOnSplit] = useState(false);
    const [leftLimit, setLeftLimit] = useState(1);
    const [rightLimit, setRightLimit] = useState(10);
    function goBack() {
        if (selectedItem - 1 <= leftLimit) {
            setDisableBack(true);
        } else {
            setDisableFront(false);
        }
        setSelectedItem(selectedItem - 1);
    }
    function goFront() {
        if (selectedItem + 1 >= rightLimit) {
            setDisableFront(true);
        } else {
            setDisableBack(false);
        }
        setSelectedItem(selectedItem + 1);
    }
    function split() {
        setOnSplit(true);
    }
    function selectLeft() {
        setRightLimit(selectedItem - 1);
        setSelectedItem(selectedItem - 1);
        setDisableFront(true);
        setOnSplit(false);
    }
    function selectRight() {
        setLeftLimit(selectedItem + 1);
        setSelectedItem(selectedItem + 1);
        setOnSplit(false);
        setDisableBack(true);
    }
    return { items, selectedItem, disableBack, disableFront, onSplit, leftLimit, rightLimit, goBack, goFront, split, selectLeft, selectRight };
}
export default function BubbleSort() {
    const array = useArray();
    return (
        <div id="container" className="flex flex-col justify-center content-center w-11/12 lg:w-6/12 lg:p-10 ">
            <div id="header" className="flex flex-col p-8">
                <p className="title">Crash Course 2 - Interactive Demonstration</p>
                <p className="subtitle">Binary Search</p>
            </div>
            <div id="controlcont pl" className="p-2">
                <div id="content" className="flex flex-row justify-center items-end w-full">
                    {array.items.map((item, index) => {
                        let color = "";
                        console.log(index, array.leftLimit);

                        if (index + 1 <= array.leftLimit - 1 || array.rightLimit + 1 <= index + 1) color = "bg-gray-400";
                        else if (array.selectedItem == index + 1) color = "bg-blue-400";
                        else color = "bg-blue-50";
                        const height = array.onSplit && index == array.selectedItem - 1 ? `${item * 1.25}rem` : "12.5rem";
                        return (
                            <div key={index} className={`border w-8 text-center m-1.25 p-0 ${color} box`} style={{ height: height }}>
                                {array.onSplit && index == array.selectedItem - 1 ? item : "?"}
                            </div>
                        );
                    })}
                </div>
                <div id="controls" className="flex justify-center m-2">
                    <button onClick={() => array.goBack()} disabled={array.disableBack || array.onSplit} className="m-2 p-2 border ">
                        &lt;
                    </button>
                    <button onClick={() => array.split()} className="m-2 p-2 border" disabled={array.onSplit}>
                        Select
                    </button>
                    <button onClick={() => array.goFront()} disabled={array.disableFront || array.onSplit} className="m-2 p-2 border">
                        &gt;
                    </button>
                </div>
                <div id="controls" className="flex justify-center m-2" hidden={!array.onSplit}>
                    <button onClick={() => array.selectLeft()} className="m-2 p-2 border">
                        Select Left
                    </button>
                    <button onClick={() => alert("Congrats!")} className="m-2 p-2 border">
                        Select Item
                    </button>
                    <button onClick={() => array.selectRight()} className="m-2 p-2 border">
                        Select Right
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
