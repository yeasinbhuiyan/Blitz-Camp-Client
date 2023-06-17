import Lottie from "lottie-react";
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import logo from '../../../assets/121104-woman-discovering-business-statistics.json'


const ShareIdeas = () => {

    return (
        <div>
            <SectionTitle heading={"Share Ideas and Opinions"}></SectionTitle>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2  my-10">


                <div className="card mt-20 w-80 mx-auto">



                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-500 font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                id="name"
                                //   value={name}
                                //   onChange={(event) => setName(event.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your name"
                                required
                            />
                        </div>


                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-500  font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                name="user_email"
                                type="email"
                                id="email"
                                //   value={email}
                                //   onChange={(event) => setEmail(event.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your email"
                                required
                            />
                        </div>


                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-500 font-bold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                //   value={message}
                                //   onChange={(event) => setMessage(event.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your feedback message"
                                rows="6"
                                required
                            />
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Submit
                            </button>
                        </div>
                    </form>



                </div>


                <div className='w-10/12 md:mt-20 lg:mt-0 mx-auto'>
                    <Lottie animationData={logo} loop={true} />
                </div>



            </div>

        </div>
    );
};

export default ShareIdeas;