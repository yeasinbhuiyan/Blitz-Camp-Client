import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";
import Gallery from "./Gallery";


const ClassGallery = () => {
    const [allClassImg, setAllClassImg] = useState([])
    useEffect(() => {
        fetch('https://blitz-camp-server.vercel.app/all-classes')
            .then(res => res.json())
            .then(data => {
                const approvedClass = data.filter(df => df.status === 'approve')
                setAllClassImg(approvedClass)
            })
    }, [])

    return (
        <div>
            <SectionTitle heading={"Class Gallery Collection"}></SectionTitle>
            <Marquee pauseOnClick speed={70}>
                <div className="flex gap-5 m-10">
                    {
                        allClassImg && allClassImg.map(classImg => <Gallery key={classImg._id} classImg={classImg}></Gallery>)
                    }
                </div>
            </Marquee>

        </div>
    );
};

export default ClassGallery;