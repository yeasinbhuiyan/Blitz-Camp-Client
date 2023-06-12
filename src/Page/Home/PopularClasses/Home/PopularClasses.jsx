import { useEffect, useState } from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";


const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://blitz-camp-server.vercel.app/popular-classes')
            .then(res => res.json())
            .then(data => {
                const approvedClass = data.filter(df => df.status === 'approve')
                const ap = approvedClass.slice(0,6)
                setClasses(ap)

            })
    }, [])
    return (
        <div>
           <div className="mt-24 mb-0">
           <SectionTitle heading={"Popular Classes"} subHeading={"See Our Top Six Enrolled"}></SectionTitle>
           </div>
            <div className="grid grid-cols-1 py-28 md:grid-cols-2 p-10 gap-8 lg:grid-cols-3 ">
                {
                  classes?.map(singleClass => <PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>)
                }
            </div>
        </div>

    );
};

export default PopularClasses;