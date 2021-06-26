import React from "react";

export default function CardDescription() {
  // const pic_url = author.user_pic ? author.user_pic : "/img/noPic.jpg";

  return (
    <>
      <h1 className="h4 mb-0 mt-3" style={{textAlign: "left"}}>1. What is React?</h1>
      <div className="teacher d-flex align-items-center mt-3">
        <img
          alt="author name"
          className="avatar avatar-md-sm rounded-circle shadow"
          src="https://firebasestorage.googleapis.com/v0/b/tu-academia.appspot.com/o/user-pics%2F366-tomas_vasquez?alt=media&token=61a8fc1e-936a-4cdb-a71e-ecb9063f42b2"
          style={{height: "40px", width: "40px"}}
        />
        <div className="ml-2">
          <h6 className="mb-0 text-shadow">
            <strong>Stephen Grider</strong>
          </h6>
          <p className="small my-0 text-muted">
            Fullstack developer
          </p>
        </div>
      </div>
      
      <p className="mt-3" style={{textAlign: "left"}}>This video gonna show you what React in real world is. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.(Unit description)</p>
      
    </>
  );
}
