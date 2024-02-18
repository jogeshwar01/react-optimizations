import { useState, useEffect } from "react";

// Create a hook that debounces a value given
// 1. The value that needs to be debounced
// 2. The interval at which the value should be debounced.

const useDebounce = (value, delay) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up a timer to update the debounced value after the specified delay
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timer if the value changes before the delay has passed
        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
};
