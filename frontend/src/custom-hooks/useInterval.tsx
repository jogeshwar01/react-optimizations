import { useEffect } from "react";

// runs a certain callback function every n seconds.
const useInterval = (callback, delay) => {
    useEffect(() => {
        const intervalId = setInterval(callback, delay);

        return () => clearInterval(intervalId);
    }, [callback, delay]);
};
