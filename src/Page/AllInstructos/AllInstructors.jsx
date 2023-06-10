import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/allInstructors')
            .then(res => res.json())
            .then(data => {
                const instructorFilter = data.filter(df => df.status === 'instructor')
                setInstructors(instructorFilter)
            })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-28 p-10">
                {
                    instructors && instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>

        </div>
    );
};

export default AllInstructors;