import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import './projects.scss'
const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Diabetes Retinopathy Detector ",
      description:
        <p><ul><li>Engineered a diabetes detection system by harnessing the machine learning algorithms with accuracy of 93%.</li><br/>
        <li>Seamlessly trained random forest model into Flask framework.Orchestrated its fusion with ReactJS framework.</li><br/>
        <li>Structured health graph showing health conditions forming a pie chart to detect abnormalities in conditions providing
data warehousing using MongoDB giving the results under 1 minute.</li><br></br><li>Presaging The Signs Of Diabetes Using Machine Learning Algorithms",
     Published in IEEE Xplore, Jun “21.<a href="https://ieeexplore.ieee.org/document/9579669/authors#authors" style={{'text-decoration':'none','color':"orange"}} target="_blank"> [Paper Link]</a></li></ul></p>,
        link:<button className='btn_project'><a href="https://github.com/aditya0sehgal/CareNet" target="_blank">Code <span class="material-symbols-outlined">
        code
        </span></a></button>,
      icon: '/diebetes.png',
    },
    {
      title: "Talk To Prescribe !",
      description:
      <p><ul><li>Organized a web application capable of discerning a doctor’s spoken words and autonomously formulating patient
      prescriptions using user input. Eliminating doctors from manually writing prescriptions.</li><br/>
      <li>Employed Flask macro for system foundation. Voice detection and keyword recognition were achieved through Python
NLTK boasting an impressive accuracy of 90% with a feature to email pdf-converted prescriptions to patient.</li><br/>
      <li>Upholding data security and organization with MD5 encryption, relied on PostgreSQL database to house user data
with emailing feature.</li></ul></p>,
      link:<button className='btn_project'><a href="https://github.com/zenilharia26/Doctors-Prescription" target="_blank">Code <span class="material-symbols-outlined">
      code
      </span></a></button>,
      icon: '/voice.png',
    },
    {
      title: "E-Commerce Website",
      description:
      <p><ul><li>Crafted a comprehensive website showcasing a diverse array of electronic goods such as mobiles and TVs. Leveraging PHP, merged
      essential functionalities, including User Authentication, Product Selection.</li><br/>
      <li>Managed the data within a PostgreSQL database and linked with Bootstrap templates. Enhancing user experience by introducing dynamic Live Searching capabilities, seamlessly guided by Ajax queries.</li><br/>
      <li>Delivered an efficient filtering mechanism, categorizing products for seamless navigation and exploration for better user experience.</li></ul></p>,
      link:<button className='btn_project'><a href="https://github.com/smit1999/e-commerce" target="_blank">Code <span class="material-symbols-outlined">
      code
      </span></a></button>,
      icon: '/online.png',
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length-1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="project">
        <h1>Projects</h1>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <ProjectItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Project;