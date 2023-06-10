import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleClassesCard from "./SingleClassesCard";


const InstructorClasses = () => {
    const [classes, setClasses] = useState([])

    const location = useLocation()

    const email = location?.state?.email
    console.log(location)

    useEffect(() => {

        if (email) {
            fetch(`http://localhost:5000/instructor/all-class/${email}`)
                .then(res => res.json())
                .then(data => {
                    const classesFilter = data.filter(df => df.status === 'approve')

                    setClasses(classesFilter)

                })
        }
    }, [email])

    console.log(classes)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  px-6 py-24">
                {
                    classes && classes.map(singleClass => <SingleClassesCard key={singleClass._id} singleClass={singleClass}></SingleClassesCard>)
                }
            </div>

        </div>
    );
};

export default InstructorClasses;