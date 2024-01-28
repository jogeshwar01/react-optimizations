import { useState } from 'react';
import './App.css'
import React from 'react';

function App() {
    const [header1, setHeader1] = useState('header1')

    const handleOnClick = () => {
        setHeader1(`${Math.random()}`)
    }

    return (
        <div>
            <Header title={header1} />
            <Header title={header1} />
            <Header title='test' />
            <Header title='test' />
            <Header title='test' />

            <button onClick={handleOnClick}>Click me to change the title</button>
        </div>
    )
}

type HeaderProps = {
    title: string;
};

// React.memo - skip re rendering when props unchanged
const Header = React.memo(function({title}: HeaderProps) {
  return (
    <div>
      {title}
    </div>
  )
})

export default App