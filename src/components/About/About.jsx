"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import "./About.scss"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <p className="wrapper2">
        <ul>
        <li>Languages: Python, C++, JavaScript, Typescript, Java, SQL, HTML, CSS</li><br></br>
        <li>Databases: MySQL, PostgreSQL, MongoDB, Google Firebase</li><br></br>
        <li>Frameworks: Django, Flask, React JS, Node JS, AWS EC2, AWS S3, Scikit-learn</li><br></br>
        <li>Developer Tools: Git, Gitlab, Postman, VSCode, Pycharm, Jira, colab</li><br></br>
        </ul>
        </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p className="wrapper2">
      <ul>
        <br/>
      
      <li>Master Of Computer Science | Stevens Institue of Technlogy | Hoboken, USA</li><br></br>
      <li>Bacheloer of Technology | University of Mumbai | Mumbai, India</li>
      </ul>
      </p>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about">
      <div className="progress"><h1>About Me</h1></div>
      <div className="container">
      
                <div className="wrapper">
                    <div className="imageContainer" >
                    <img src='/laptop.png' alt="" />
                    </div>
               
                <div className="textContainer">
                    
                    <p className="text-base lg:text-lg">
                    <ul><li>A dedicated graduate student pursuing a Master's Degree in Computer
Science with a specialization in Full Stack Development.I have a gained professional experience in working with startups for 2 years.</li><br></br>
<li>During my undergraduate studies, I delved into various backend frameworks such as
Django, Flask, Node, and ExpressJs. My hands-on experience in web app development
includes creating a comprehensive diabetes management system using Django and
ReactJs. Proficient in both SQL and MongoDB databases, I have effectively handled
large volumes of user data in personal and professional projects.</li><br/><li>
I have experience in building complete peer to peer platform for the startup LendenClub and a complete user dashboard for Colgate-Palmolive have made me an experienced developer and giving me practical knowledge in full stack development with efficiency in building production Api(s) with user base of million plus.</li></ul>

          </p>
                    
                </div>
                </div>
                </div>
                <div className="tabs">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="wrap">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          
    </section>
  );
};

export default About
