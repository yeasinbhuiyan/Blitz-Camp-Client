import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
                <p className='text-7xl font-thin'></p>
                <RingLoader color="#365cd7" />
                <p className='text-7xl font-thin'></p>
            </div>

        </div>
    );
};

export default Spinner;