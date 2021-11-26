import React from 'react';
import { useParams } from 'react-router';

const CourseID = () => {
    const param = useParams();
    return (
        <div>
            <h2>Course Id </h2>
            <span>Param is : {param.courseid}</span>
        </div>
    );
}

export default CourseID;
