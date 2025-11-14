import React from 'react'
import './App.css'
import ButtonUsage from './components/Button'

function App() {
    const title = 'Hello World!';

    return (
        <div className='flex items-center justify-center w-full h-full'>
            {title}
            <ButtonUsage />
        </div>
    )
}

export default App
