import Sec_Rectangle from '../img/Sec_Rectangle.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/bi";



function Footer(){
    return(
        <div className='relative'>
            <img src={Sec_Rectangle} className='max-md:static max-md:mx-auto max-md:mt-[-3rem] absolute ml-[9rem] mt-[8rem] w-[74rem] h-[35rem] max-md:h-[16rem] max-md:w-[28rem]' alt=''/>
            <h1 className='font-sans font-normal absolute mt-[12rem] ml-[12rem] max-md:text-base max-md:ml-[3rem] max-md:bottom-[11.5rem] text-5xl'>Let’s make future<br/> a little <b>bit better.</b></h1>
            <div className='absolute flex justify-between w-[10rem] mt-[20rem] ml-[12rem] max-md:bottom-[9.3rem] max-md:right-[18rem]'>
           <AiFillInstagram
           color='#3776F5'
           size={30}
           className='max-md:w-[1rem]'
           /> 
           <FaFacebookF
           color='#3776F5'
           size={30}
           className='max-md:w-[0.5rem] max-md:mr-[7.8rem]'
           />
           <FaLinkedinIn
           color='#3776F5'
           size={30}
           className='max-md:w-[0.8rem] max-md:absolute max-md:ml-[3rem]'
           />
            </div>
            <div className='absolute mt-[23.5rem] ml-[12rem] max-md:text-[0.5rem] max-md:right-[10rem] max-md:w-[18rem] max-md:bottom-[7.5rem]'>
                <p className='font-sans text-gray'>support@hrdrone.am</p>
                <p className='font-sans text-gray'>651 N Broad St,Middletown,Delaware</p>
            </div>
            <div>
                <h1 className='font-sans max-md:text-sm text-lg max-md:text-[12%] max-md:bottom-[13rem] max-md:right-[14rem] absolute ml-[38rem] mt-[12.5rem]'><b>Sitemap</b></h1>
                <div className='text-gray max-md:text-[0.5rem] max-md:bottom-[7.5rem] max-md:right-[13.4rem] space-y-1 ml-[38rem] absolute mt-[15rem] hover:text-black'>
                    <p>For company</p>
                    <p>For talents</p>
                    <p>Job</p>
                    <p>Price</p>
                    <p>Partnerships</p>
                </div>
                <h1 className='font-sans text-lg space-y-1 absolute max-md:text-[0.45rem] max-md:w-[40%] max-md:bottom-[12.85rem] max-md:right-[-1rem] ml-[48rem] mt-[12.5rem]'><b>Features for Company</b></h1>
                <div className='text-gray space-y-2 ml-[48rem]  max-md:text-[0.5rem] max-md:bottom-[7.3rem] max-md:right-[2rem] max-md:w-[30%] absolute mt-[15rem] hover:text-black'>
                    <p>Anonymous profiles</p>
                    <p>Filter</p>
                    <p>Matching jobs</p>
                    <p>Salary</p>
                    <p>Notification</p>
                </div>
                <h1 className='font-sans max-md:bottom-[4.5rem] max-md:text-[0.5rem] max-md:w-[30%] max-md:right-[9.3rem] text-lg space-y-1 absolute ml-[63rem] mt-[12.5rem]'><b>Features for Talents</b></h1>
                <div className='text-gray max-md:flex max-md:bottom-[1.3rem] max-md:text-[0.3rem] max-md:w-[10rem] max-md:right-[15rem] space-y-2 ml-[63rem] absolute mt-[15rem] hover:text-black'>
                    <p>Matching</p>
                    <p>Filter</p>
                    <p>Ai-powered job description</p>
                    <p>Telegram notification for matching</p>
                    <p>Job posted to telegram channel</p>
                    <p>ATS integration</p>
                    <p>Activity hub</p>
                    <p>Skill test results</p>
                    <p>Skill test results</p>
                    <p>Multiple teammates</p>
                    <p>Careers page with custom domain</p>
                    <p>Switch between companies</p>
                </div>
            </div>
            <div className='absolute flex justify-between w-[80%] ml-[10rem] mt-[44rem]'>
                <p className=' font-sans text-gray'>© 2023 HR Drone Ltd.</p>
                <p className=' font-sans text-gray'>Privacy Police</p>
            </div>
        </div>
    )
}

export default Footer;