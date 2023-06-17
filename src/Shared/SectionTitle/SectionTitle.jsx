
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto md:px-0 px-14  md:w-4/12 pt-24 text-center'> 
            <p className='text-blue-500 mb-2'>{subHeading}</p>
            <h3 className='md:text-3xl text-2xl uppercase border-y-4 '>{heading}</h3>

        </div>
    );
};

export default SectionTitle;
