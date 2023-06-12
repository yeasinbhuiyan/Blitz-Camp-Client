import { FaArrowRight } from "react-icons/Fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 md:p-1   gap-10 py-10 items-center mx-auto bg-base-200'>
            <div data-aos="fade-up" className='mx-auto py-10'>
                

                
            </div>
            <div className='space-y-6 mx-auto px-7 py-10'>
                <h1 data-aos="fade-up" className='text-3xl border-l-indigo-400 border-l-8 p-5 rounded-full font-light'>Learn About Us</h1>
                <div data-aos="fade-up" className='space-y-3'>
                    <h1 className='font-semibold  text-3xl'>Our Story - Passion, Dedication, and Sports Excellence</h1>
                    <p className='font-medium text-sm'>At Blitz Camp, we have a story rooted in passion, dedication, and a shared commitment to sports excellence. Discover how our journey began, the values that drive us, and the vision that propels us forward. Join us as we create a dynamic platform that empowers athletes to reach their full potential and make their mark in the world of sports.</p>
                </div>
                <div data-aos="fade-up" className='space-y-3'>
                    <h1 className='font-semibold  text-3xl'>The Intersection of Sports and Education</h1>
                    <p className='font-medium text-sm'>where we focus on building champions through the intersection of sports and education. We believe that academic knowledge and athletic prowess go hand in hand. Explore our curated collection of educational materials, personalized training plans, and expert guidance to take your performance to new heights and become a true champion in your sport.</p>
                </div>
                <div>
                    <Link to='/about'> <button className='flex items-center border-2 p-2 hover:bg-cyan-400 text-cyan-400 hover:text-gray-700 border-cyan-300 rounded-full'>Read more <FaArrowRight className='ml-2'></FaArrowRight></button></Link>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;