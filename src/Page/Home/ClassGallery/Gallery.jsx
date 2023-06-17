
const Gallery = ({classImg}) => {
    return (
        <>
            <img title={classImg.class_name} className="w-80 h-60 rounded transition hover:scale-y-125" src={classImg.class_image} alt="" />

        </>
    );
};

export default Gallery;