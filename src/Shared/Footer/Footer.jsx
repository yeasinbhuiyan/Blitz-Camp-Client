
// import logo from '/logo2.jpeg'
import { FaArrowRight, FaFacebook, FaGithub, FaGoogle } from 'react-icons/Fa';


const Footer = () => {
    return (
        <>
            {/* </footer> */}
            <footer className="footer max-w-screen-xl   p-10 py-20 bg-blue-300">
                <div>


                    <h1 className="font-bold text-black flex items-center mb-4  top-8 "><span className="text-2xl flex items-center text-gradient">
                        {/* TODO   */}
                        {/* <img className="w-6 mr-2" src={logo} alt="" /> */}
                        Blitz</span> <sub className="font-mono text-sm ml-1">Camp</sub></h1>
                    <p className='text-sm font-lg font-semibold w-56'>Discover the wild world of Jungle Jamboree Toys! Explore our vast collection of animal-inspired toys.</p>
                </div>
                <div>
                    <span className="text-gray-700 font-bold text-xl">About</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Toys Information</a>
                    <a className="link link-hover">Press Contacts</a>
                </div>

                <div>
                    <span className="text-gray-700 font-bold text-xl">Legal Information</span>
                    <a className="link link-hover"> Trademarks</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover"> Cookie Policy</a>
                </div>
                <div>
                    <span className="text-gray-700 font-bold text-xl">Services</span>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Online Delivery</a>
                    <a className="link link-hover">Toy Marketing</a>
                    <a className="link link-hover">Help Center</a>
                </div>

                <div>
                    <span className="text-gray-700 font-bold text-xl">Newsletter</span>
                    <div className='flex items-center'>
                        <input className='p-3 rounded' type="email" name="email" placeholder='Enter Your Email' id="" />
                        <button className='p-4 btn-success rounded-full'>
                            <FaArrowRight></FaArrowRight>
                            </button>
                    </div>
                    {/* <hr  className='text-gray'/> */}
                    <div className='gap-4 flex text-2xl mt-5'>
                        <FaGithub></FaGithub>
                        <FaGoogle></FaGoogle>
                        <FaFacebook></FaFacebook>
                    </div>
                </div>
            </footer>





        </>
    );
};

export default Footer;