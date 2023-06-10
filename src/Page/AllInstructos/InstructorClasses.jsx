import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const InstructorClasses = () => {
    const [classes, setClasses] = useState([])
    const { id } = useParams()

    useEffect(() => {

        fetch(`http://localhost:5000/single-instructor/${id}`)
            .then(res => res.json())
            .then(data => {

                setClasses(data)
                // console.log(data)
            })
    }, [id])

    console.log(classes)
    return (
        <div>

        </div>
    );
};

export default InstructorClasses;