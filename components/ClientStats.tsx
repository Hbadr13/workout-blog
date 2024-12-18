import React from 'react'

const ClientStats = () => {
    return (
        <div className=' mt-52 w-full h-auto flex justify-center items-center'>

            <div className='w-[96%] h-96 max-w-[1200px] relative   bhgg-red-700 flex justify-center items-center '>
                <div className='w-[95%] lg:h-24 sm:h-28 h-32   bg-wr-primary-dark  skew-y-12'></div>
                <div className='w-[95%] bg-black/95  absolute -skew-y-6   flex justify-center items-center h-52 md:h-72 '>
                    <div className=' grid grid-flow-col grihud-flow-row  grid-rows-2   gap-x-20  md:grid-rows-1'>
                        <div className='w-auto h-auto flex   justify-center space-y-4 items-center flex-col'>
                            <span className='text-white   font-bold text-3xl'>987</span>
                            <span className=' text-white text-2xl '>Happy Clients</span>
                        </div>
                        <div className='w-auto h-auto flex  justify-center space-y-4  items-center flex-col'>
                            <span className='text-white  font-serif text-3xl'>987</span>
                            <span className=' text-white text-2xl '>Happy Clients</span>
                        </div>
                        <div className='w-auto h-auto flex  justify-center space-y-4  items-center flex-col'>
                            <span className='text-white  font-serif text-3xl'>907</span>
                            <span className=' text-white text-2xl '>Happy Clients</span>
                        </div>

                    </div>
                </div>
                <div className='w-full h-full absolute md:flex justify-end items-start hidden btg-blue-700'>
                    <img src="/man.png" alt="High Quality Video" className=" lg:w-80 lg:h-80 md:w-60 lg-mt-24   -mt-16  -ml-56 md:h-60 " />
                </div>
            </div>
        </div>)
}

export default ClientStats