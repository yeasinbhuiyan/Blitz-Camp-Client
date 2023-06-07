import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import MyClassesCard from "./MyClassesCard";


const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [myClasses, setClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/instructor-classes/${user?.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))

    })
    return (
        <div>
            <div className="grid grid-cols-1 md:p-10 p-3">
                {
                    myClasses && myClasses.map(singleClass => <MyClassesCard key={singleClass._id} singleClass={singleClass}></MyClassesCard>)
                }
            </div>

        </div>
    );
};

export default MyClasses;