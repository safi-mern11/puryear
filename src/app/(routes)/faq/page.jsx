import Faqs from '@/app/components/common/Faqs'
import React from 'react'

const Page = () => {
    return (
        <div className=' w-full mx-auto '>
            <div className='px-[40px] xl:pt-[106px] lg:pt-[75px] xl:pb-[98px] lg:pb-[70px] md:pt-[56px] md:pb-[52px] pt-[41px] pb-[42px] bg-[#3C523F] '>
                <h1 className='xl:text-[64px] lg:text-[45px] md:text-[35px] text-[30px] text-[#DCCEA4] xl:leading-[64px] lg:leading-[45px] md:leading-[34px] leading-[30px] md:font-bold font-normal text-center'>Frequently Asked Questions <span className='font-bold'>(FAQs)</span> </h1>
            </div>
            <div className=' xl:pt-[113px] lg:pt-[80px] xl:pb-[131px] lg:pb-[75px] md:pt-[60px] md:pb-[56px] pt-[26px] pb-[35px] '>

                <Faqs />
            </div>
        </div>
    )
}

export default Page