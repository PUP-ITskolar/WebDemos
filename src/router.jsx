import { createBrowserRouter } from "react-router";
import Main from "./layout/main";
import BubbleSort from "./boxes/bubblesort";
import InsertionSort from "./boxes/insertionsort";
import SelectionSort from "./boxes/selectionsort";
import LinearSearch from "./boxes/linearsearch";
import BinarySearch from "./boxes/binarysearch";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
    },
    {
        path: "/sort/bubble",
        Component: BubbleSort,
    },
    {
        path: "/sort/insertion",
        Component: InsertionSort,
    },
    {
        path: "/sort/selection",
        Component: SelectionSort,
    },
    {
        path: "/search/linear",
        Component: LinearSearch,
    },
    {
        path: "/search/binary",
        Component: BinarySearch,
    },
]);
