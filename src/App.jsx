import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const App = () => {
    return (
        <div className='relative flex min-h-screen flex-row bg-[#13121a] p-4'>
            <div className='hidded relative mr-10 sm:flex'>
                {/* sidebar */}
                <Sidebar/>
            </div>

            <div className='mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5'>
            {/* Navbar */}
            <Routes>
                <Route path='/' element={<div>Home</div>} />
            </Routes>
            </div>
        </div>
    )
}

export default App
