
const Gallery = ({classImg}) => {
    return (
        <>
            <img title={classImg.class_name} className="w-80 h-60 rounded" src={classImg.class_image} alt="" />

        </>
    );
};

export default Gallery;