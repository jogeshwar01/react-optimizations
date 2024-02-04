import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
// should never use state variable to track this. As changing a state variable itself would cause a re-render

export function Assignment2() {
    const [, forceRender] = useState(0);
    const renderCount = useRef(0)

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    renderCount.current = renderCount.current + 1

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};