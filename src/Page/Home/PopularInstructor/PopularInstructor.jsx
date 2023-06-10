import { useEffect, useState } from "react";

import PopularInstructorCard from "./PopularInstructorCard";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popular-instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const approvedClass = data.filter(df => df.status === 'instructor')
                const ap = approvedClass.slice(0, 6)
                console.log(ap)
                setPopularInstructor(ap)


            })
    }, [])
    return (
        <div>
            <div className="mt-24">
                <SectionTitle heading={"Popular Instructor"} subHeading={"See Our Top Six"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-28 p-10">
                {
                    popularInstructor && popularInstructor.map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;