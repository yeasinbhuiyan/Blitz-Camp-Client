import Lottie from "lottie-react";
import animationlottie2 from '../../../assets/61182-ball-sport.json'
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const AskedQuestion = () => {
    return (
        <>
            <SectionTitle heading={"Commonly Asked Question"}></SectionTitle>
            <div className='lg:grid mt-10 lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse '>
                <div>
                    <div data-aos="fade-up" tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-semibold">
                            What is Blitz Camp?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Blitz Camp is an intensive summer program designed to provide students with an immersive learning experience in various subjects. It offers a unique combination of academic courses, hands-on workshops, and recreational activities to enhance knowledge, skills, and personal development.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-semibold">
                            Who can participate in Blitz Camp?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Blitz Camp is open to students of all ages and educational backgrounds. Whether you're in elementary, middle, or high school, or even a college student seeking additional enrichment, Blitz Camp welcomes participants from diverse backgrounds and interests.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-semibold">
                            What courses and activities are offered at Blitz Camp?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Blitz Camp offers a wide range of courses and activities to cater to different interests. Some examples include coding and programming, robotics, creative writing, entrepreneurship, art and design, sports and outdoor adventures, and team-building exercises. Please check our program schedule for a complete list of available courses.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-semibold">
                        How long is Blitz Camp, and where is it located
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>Blitz Camp typically runs for four weeks during the summer vacation. The exact dates may vary each year, so it's important to check our website for the latest information. As for the location, our camp is situated in a picturesque setting, combining natural surroundings with modern facilities. Please refer to our website for the specific location details.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-semibold">
                        How can I register for Blitz Camp, and what is the cost?
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>To register for Blitz Camp, you can visit our website and navigate to the registration page. There, you will find instructions on how to complete the registration process. As for the cost, fees may vary depending on the duration of the camp and the chosen courses. Please refer to the registration page or contact our team for detailed information regarding fees and payment options.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-semibold">
                        What is the daily schedule like at Blitz Camp
                        </div>
                        <div className="collapse-content">
                            <p className='text-sm font-semibold text-gray-800'>The daily schedule at Blitz Camp is carefully structured to provide a balanced mix of academic learning, hands-on activities, and recreational time. Each day typically starts with morning classes or workshops, followed by lunch and afternoon sessions. Afternoons are often dedicated to engaging in sports, outdoor adventures, or group activities. Evenings may include special events, guest speakers, or social activities to foster connections among participants. Rest assured, we prioritize both learning and fun throughout the day.</p>
                        </div>
                    </div>
                  


                </div>

                <div className='w-1/2 mb-10 md:mb-0 mx-auto'>
                    <Lottie animationData={animationlottie2} loop={true} />
                </div>
            </div></>
    );
};

export default AskedQuestion;