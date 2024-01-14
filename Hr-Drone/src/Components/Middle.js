import Mng from '../img/mng.png'
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MOne from '../img/logo/M-One.png'
import EasyDmarc from '../img/logo/Easy-Dmarc.png'
import Hexact from '../img/logo/Hexact.png'
import PicsArt from '../img/logo/PicsArt.png'
import TeamViewer from '../img/logo/Team-Viewer.png'
import TeachNamin from '../img/logo/TeachNamin.png'
import Rectangle from '../img/Rectangle.png'
import document from '../img/Logo.png'
import icon from '../img/Icon.png'
import Profile from '../img/Profiles.png'
import HireWithUs from '../img/HireWithUs.png'
import hire1 from '../img/Hire1.png'
import hire2 from '../img/Hire2.png'
import hire3 from '../img/Hire3.png'
import hire4 from '../img/Hire4.png'
import avatar1 from '../img/avatars/avatar1.png'
import avatar2 from '../img/avatars/avatar2.png'
import avatar3 from '../img/avatars/avatar3.png'
import dots from '../img/dots.png'
import bg_image from '../img/bg_image.png'


function Body() {
    const [settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesMiniShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
      });

      const [Second_settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
      });

    const images = [
      TeamViewer,
      MOne,
      EasyDmarc,
      Hexact,
      PicsArt,
      TeachNamin
    ]

    const cards = [{
       bg_image,
       avatar1,
       Info: 'HR Drone has become an integral part of our HR strategy, revolutionizing the way we hire and manage talent.',
       Name_Surname: 'Ani Gevorgyan,TeamViewer',
       dots,
},
{    
    bg_image,
    avatar2,
    Info: 'HR Drone has become an integral part of our HR strategy, revolutionizing the way we hire and manage talent.',
    Name_Surname: 'Ani Gevorgyan,TeamViewer',
    dots
},
{   
    bg_image,
    avatar3,
    Info: 'HR Drone has become an integral part of our HR strategy, revolutionizing the way we hire and manage talent.',
    Name_Surname: 'Ani Gevorgyan,TeamViewer',
    dots
}
]

   const rows = [
    {name: 'Talents'},
    {name: 'Talents'},
    {name: 'Talents'},
    {name: 'Talents'},
   ]

return(
    <>
    <div>
         <img src={Mng} className='max-md:h-[13rem] max-md:w-[28rem] max-md:mt-[25%] mx-auto mt-[8%]' alt=''/>
        <div>
        {/* <button className=" mb-[10%] text-white ml-[10%] hover:bg-black duration-300 font-sans font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue">Job post</button> */}
        </div>
    </div>
    
    <div className='text-center mt-10'>
            <h1 className='max-md:text-base text-4xl font-sans'>We worked <b>with.</b></h1>
            <p className='max-md:text-base font-sans text-lg text-gray'>Not just clients, but partners</p>
    </div>
    <div className='max-w-[89%] ml-[4%] mt-[5%]'>
        <Slider centerMode {...settings}>
     {
        images.map((image,index) => (
           <div key={index}>
            <img src={image} className='max-w-[45%]' alt=''/>
            </div>
        ))
     }
     </Slider>
    </div>
    <h1 className='text-4xl w-[100%] max-md:text-sm font-sans mt-[6%] text-center'>Our <b>solutions.</b></h1>
    <div className='static mt-[5%]'>
        <img src={Rectangle} className='max-md:static max-md:mx-auto absolute ml-[11%] w-[70rem] h-[40rem] max-lg:h-[18rem] max-lg:w-[28rem] max-lg:right-[6%]' alt=''/>
        <ul className='max-md:text-[0.5rem] max-md:absolute max-md:space-x-4 max-md:bottom-[10%] max-lg:text-base max-lg:space-x-4 absolute flex justify-between text-lg font-sans font-bold list-inside mt-[4.5rem] ml-[14%] w-[25%]'>
        {
            rows.map((row,index) => (
             <li key={index}>
              <a href='/' className='hover:text-blue duration-500'>{row.name}</a>
             </li>
            ))
        }
        </ul>
        <h2 className='text-5xl font-bold max-md:text-xs max-md:absolute max-md:bottom-[-0.5rem] max-md:ml-[4.8rem] font-sans ml-[12.5rem] mt-[15rem] absolute'>Let us screen<br/>canditates for you</h2>
        <div>
            <div className='static'>
                <img src={icon} className='max-md:bottom-[-3rem] max-md:w-4 max-md:h-4 max-md:right-[27.5rem] absolute ml-[12.4rem] mt-[24rem]' alt=''/>
                <p className='max-md:bottom-[-3.6rem] max-md:text-[0.6rem] max-md:left-[-11.3rem]  absolute font-sans font-normal ml-[16rem] mt-[23.8rem]'>Our matching algorithm shows how well<br/>suited a candidate is for your job</p>
            </div>
            <div className='static'>
                <img src={document} className='max-md:bottom-[-6rem] max-md:w-4 max-md:h-4 max-md:right-[27.5rem] absolute ml-[12.4rem] mt-[30rem]' alt=''/>
                <p className='max-md:bottom-[-6.6rem] max-md:text-[0.6rem] max-w-12 max-md:left-[-11.3rem] absolute font-sans font-normal ml-[16rem] mt-[29.8rem]'>See jobseeker’s skill test results to decide<br/>whether to invite them to an interview or not</p>
            </div>
            <img src={Profile} className='max-md:w-[40%] max-md:h-[22%] max-md:right-[1.7rem] max-md:bottom-[-5.5rem] absolute h-[60%] w-[40%] ml-[44rem] mt-[8rem]' alt=''/>
        </div>
    </div>
    <img src={HireWithUs} className='max-md:absolute max-md:bottom-[-16rem] mt-[49rem]' alt=''></img>
    <div className=' max-md:relative max-md:right-[4rem]'>
        <h1 className='max-md:text-2xl max-md:mt-[7rem] max-md:left-[-10rem] font-sans font-normal text-6xl ml-[6rem] mt-[5rem]'>A new, easy<br/>way<b> to hire.</b></h1>
        <button className='max-md:text-xs max-md:h-[2rem] max-md:relative max-md:bottom-5 mt-[2rem] text-white ml-[6rem] hover:bg-black duration-300 font-sans font-semibold rounded-full text-sm px-5 py-2.5 dark:bg-blue'>See canditates</button>
    </div>
    <div className='flex static'>
        <img src={hire1} className='max-md:w-[35%]' alt=''/>
        <img src={hire2} className='absolute max-w-[30%] max-md:right-[50%] mt-[8rem] ml-[15rem]' alt=''/>
        <img src={hire3} className='absolute ml-[42rem] max-md:h-[31%] max-md:right-[8.2rem]' alt=''/>
        <img src={hire4} className='absolute max-md:w-[20%] max-md:right-[0.5rem] max-md:bottom-[-33rem] bottom-[-125rem] ml-[68rem]' alt=''/>
    </div>
    <div className='static max-md:space-y-9 max-md:mt-[-16rem]'>
    <h1 className='text-4xl w-[100%] max-md:text-sm font-sans mt-[22rem] text-center'>Our customer <b>stories.</b></h1>
   <div className='max-w-[89%] mx-auto mt-[5rem]'>
   <Slider centerMode {...Second_settings}>
        {
            cards.map((image,index) => (
                <div key={index} className=''>
                    <img src={image.bg_image} className='static max-w-[90%] ' alt=''/>
                    <div>
                        <img src={image.avatar1} className='max-md:relative max-md:w-[2.5rem] max-md:mt-[4.4rem] absolute bottom-[11rem] max-w-[7rem] ml-5' alt=''/>
                        <img src={image.avatar2} className='absolute max-md:w-[2.5rem] max-md:mb-2 bottom-[11rem] max-w-[7rem] ml-5' alt=''/>
                        <img src={image.avatar3} className='max-md:absolute max-md:w-[2.5rem] max-md:mb-2 absolute bottom-[11rem] max-w-[7rem] ml-5' alt=''/>
                        <img src={image.dots} className='max-md:absolute max-md:w-[3rem] max-md:ml-[6rem] max-md:mb-[2.2rem] absolute bottom-[68%] ml-[5%]' alt=''/>
                    </div>
                        <h1 className='absolute font-sans bottom-[3rem] ml-5 max-md:absolute max-w-[21rem] max-md:text-[0.4rem] max-md:max-w-[8rem] max-md:bottom-[9rem]'>{image.Info}</h1>
                        <p className='absolute font-sans bottom-[1rem] text-gray ml-5 max-md:absolute max-md:text-[0.5rem] max-md:max-w-[8rem] max-md:bottom-[8rem] '>{image.Name_Surname}</p>
                 {/* <img src={image.bg_image} className='max-w-[70%]' alt=''/>
                 <img src={image.Dots} className='max-w-[20%]' alt=''/>
                 <img src={image.image1} className='max-w-[20%] ml-[5%] mb-[50%]' alt=''/> */}
                </div>
            ))
        }
    </Slider>
   </div>
    </div>
    <div>
    </div>
    </>
)
}
export default Body;