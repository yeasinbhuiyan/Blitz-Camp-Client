import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const AllClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://blitz-camp-server.vercel.app/all-classes')
            .then(res => res.json())
            .then(data => {
                const approvedClass = data.filter(df => df.status === 'approve')
                setClasses(approvedClass)
            })
    }, [])


    return (
        <div>
            <Helmet>
                <title>Blitz Camp | All Classes</title>
            </Helmet>
            <div>
                
                <SectionTitle subHeading={""} heading={"Our All Classes"}></SectionTitle>
                <div className="grid grid-cols-1 py-28 md:grid-cols-2 p-10 gap-8 lg:grid-cols-3 ">
                    {
                        classes?.map(singleClass => <ClassesCard key={singleClass._id} singleClass={singleClass}></ClassesCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default AllClasses;