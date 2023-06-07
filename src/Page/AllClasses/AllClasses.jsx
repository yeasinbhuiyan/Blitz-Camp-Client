import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassesCard from "./ClassesCard";


const AllClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-classes')
            .then(res => res.json())
            .then(data => {
                const approvedClass = data.filter(df => df.status === 'pending')
                setClasses(approvedClass)
            })
    }, [])
 

    return (
        <div>
            <Helmet>
                <title>Biltz Camp | All Classes</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-8 lg:grid-cols-3 ">
                {
                    classes?.map(singleClass => <ClassesCard key={singleClass._id} singleClass={singleClass}></ClassesCard>)
                }
            </div>

        </div>
    );
};

export default AllClasses;