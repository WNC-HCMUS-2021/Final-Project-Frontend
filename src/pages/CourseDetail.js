import React from "react";
import SingleCourse from "../components/SingleCourse";
import data from "../data";


function CourseDetail(props) {
    const academy = data.accademys.find(x => x.academy_id.toString() === props.match.params.id);
    console.log(props);
    console.log(academy);
    if (!academy) {
        return <div>Course Not Found</div>;
    }
    return (
        <SingleCourse academy={academy}/>
    );
};

export default CourseDetail;
