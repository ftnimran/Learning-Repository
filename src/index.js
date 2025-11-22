import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./navbar";
import Bio from "./Bio";
import Project from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   

    <Navbar />
    <App />
    <Bio />
    <p className="text-center display-6">Skills</p>
    <div
      className="container text-center d-flex justify-content-center"
      id="skillco">
      <Skills skname="Java" url="java-icon.png" />

      <Skills skname="JSP" url="jsp-icon.png" />
      <Skills skname="Hibernate ORM" url="hibernate_icon.png" />
      <Skills skname="HTML&CSS" url="html-css-icon.png" />
      <Skills skname="Spring-boot" url="springboot.png" />
      <Skills skname="MySQL" url="mysql-icon.png" />
      <Skills skname="JavaScript" url="javascript.png" />
      <Skills skname="Bootstrap" url="bootstrap-icon.png" />
    </div>
    <div className="text-center lead display-5 my-5 ">Projects</div>
    <div
      className="container-x margin-auto text-center  justify-content-center row "
      style={{ margin: "auto", maxWidth: "fit-content" }}
    >
      <Project
        image="https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ"
        title="WeatherWebApp "
        subtitle="J2EE , JSP ,Servlet ,RestApi"
        cardtext=" A Simple Weather Web App Using JSP , RestApi and Tomcat Server.The user can check the condition of present day and Temperature,
            humidity, windspeed Etc.."
      />
      <Project
        image="https://www.nicepng.com/png/detail/246-2466222_school-management-system-school-management-system-png.png"
        title="Student Management System"
        subtitle="Java Core, J2EE ,MYSQL"
        cardtext="A Student Management System (SMS) is a solution tool meant to collect, store, and manage all data created by a School/college, including a student's grades, attendance, interpersonal activity records, and so on."
      />
      <Project
        image="https://assets.materialup.com/uploads/6074307c-d7f8-4cd8-8d16-3561ceb2c442/preview.jpg"
        title="User Registration & login Module"
        subtitle="JSP, MYSQL, HTML CSS, Bootstrap"
        cardtext="User registration and login using j2EE and bootstrap html and css."
      />
          <Project
        image="https://d1iiooxwdowqwr.cloudfront.net/pub/appsubmissions/20190806153212_icon.png"
        title="Real Time Chatroom"
        subtitle="Spring boot, Websocket, HTML CSS, Bootstrap"
        cardtext="A realtime chat application using spring web,thymleaf and javascipt."
      />
          
    </div>
    <Footer />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
