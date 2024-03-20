"use client"
import { NextPage } from 'next'

interface Props { }

const Attendees: NextPage<Props> = ({ }) => {
    return (
        <div className='md:w-5/6 mx-auto py-5 my-28 rounded-lg px-5 space-y-5 items-center' >

            <div className=' md:w-4/5 mx-auto grid md:grid-cols-2 md:gap-5 md:p-5 gap-2 relative'>
                <div className='w-full flex-1 space-y-2 bg-white text-2xl'>
                    <p className=' text-3xl font-bold'>List of Attendees</p>
                    <p className='py-2 bg-gray-100 font-medium px-2 my-2'> Sis./Bro. from "Congregation"</p>
                    <p className='py-2 bg-gray-100 font-medium px-2 my-2'> Sis./Bro. from "Churcch of Christy Gbagi Ibadan Nigeria"</p>
                </div>
                <div className=' bg-red-700 absolute right-0 top-0 h-96 w-80 grid content-center'>
                    <p className='font-bold text-5xl text-center text-balance'> Total Attendance</p>
                    <p className='font-bold text-[9rem] text-center'> 150</p>

                </div>
            </div>
        </div>
    )

}

export default Attendees