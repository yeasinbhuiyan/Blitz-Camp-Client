
import { Link } from 'react-router-dom';
import errorBanner from '/error.jpg'
const ErrorPage = () => {
    return (
        <div>

        <div className='w-full text-center  mx-auto'>

            <img className='max-h-screen w-full' src={errorBanner} alt="" />
            <Link to='/'> <button className=' btn btn-success absolute top-0.5'>Go Back</button></Link>
        </div>

    </div>
    );
};

export default ErrorPage;