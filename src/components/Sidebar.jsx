import React, { useState } from 'react';
import { navLinks } from '../constants'
import { sun } from '../assets'
import { Link, useNavigate } from 'react-router-dom';
import { IconHeartHandshake } from '@tabler/icons-react';


const Icon = ({ styles, name, imageUrl, isActive, disabled, handleClick }) => {
    return (
        <div className={`h-[48px] w-[48px] rounded-[10px] ${isActive && isActive == name && 'bg-[#2c2f32] flex items-center justify-center ${styles'}`}
            onClick={handleClick}
        >
            {!isActive ? (
                <img src={imageUrl} alt='cancer-logo' className='h-6 w-6' />
            ) : (
                <img src={imageUrl} alt='cancer-logo'
                    className={`h-6 w-6' ${isActive !== name && 'grayscale'}`}
                />
            )}
        </div>
    )
}

const Sidebar = () => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState('dashboard')

    return (
        <div className='sticky top-5 flex h-[93vh] flex-col items-center justify-between'>
            <Link to='/' >
                <div className='rounded=[10px] bg-[#2c2f32] p-2'>
                    <IconHeartHandshake size={40} color='#1ec070' />
                </div>
            </Link>
            <div className='mt-12 flex w-[76px] flex-1 items-center justify-between rounded-[20px] bg-[#1c1c24] py-4'>
                <div className='flex flex-col items-center justify-center gap-3'>

                    {navLinks.map((link) => {
                        <Icon
                            key={link.name}
                            {...link}
                            isActive={isActive}
                            handleClick={() => {
                                setIsActive(link.name)
                                navigate(link.link)
                            }}
                        />
                    })}

                </div>
                <Icon styles='bg-[#1c1c24] shadow-secondary' imageUrl={sun} />

            </div>
        </div>
    )
}

export default Sidebar