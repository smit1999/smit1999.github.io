import { useRef } from "react"
import "./experiences.scss"
import { useScroll, useSpring, useTransform } from "framer-motion";
import {motion} from "framer-motion"

const items=[{
    id:1,
    title:"Sapio Analytics Pvt. LTD ",
    img :'/sapio.png',
    desc:<><h3>Software Developer - 1</h3><p className="para"><ul><li>Developed one of the largest job portals, Samarth catering to blue and white-collar workers, serving millions of users.</li><br></br><li>Operated the platform with Django Rest Framework and MongoDB middle-ware incorporating token authentication and role-based access controls with a front-end supported by React JS framework with simultaneous hosting on Amazon RDS and EC2.</li><br></br><li>Implemented Algorithm for candidate recommendations, using Fuzzy Wuzzy matching achieving a 90% accuracy rate.</li></ul></p></>,
    link:'https://www.sapioanalytics.com'
},
{
    id:2,
    title:"Lendenclub Techserve Pvt. LTD.",
    img :'/lenden.png',
    desc:<><h3>Software Developer</h3><p className="para"><ul><li>Played a pivotal role in the development of India’s largest peer-to-peer platform, coding 1000+ production-grade APIs through Django and PostgreSQL, consolidating InstaMojo, Paytm payment gateways.</li><br></br><li>Restructured prevailing workflow via micro-service architecture supporting million plus individuals.</li><br></br><li>Automated Real-Time Repayment Transactions through Redis and Python scripting reducing prolonged 5-hour span to a mere 2 minutes.</li></ul></p></>,
    link:'https://www.lendenclub.com'
},
{
    id:3,
    title:"Colgate-Palmolive Pvt. LTD.",
    img :'/colgate.png',
    desc:<><h3>Associate Technical Analyst</h3><p className="para"><ul><li> Devoted significant efforts to familiarize capabilities of ReactJS and typescript. Focusing on developing an
    administrative portal enriched with functionalities that enable seamless uploading, selection, and editing of multiple
    images applying hooks.</li><br></br><li> Pioneered tool creation tailored for employee data management, formulated through Django integration incorporating
Okta Authentication and Google Firebase Storage managing 10000 plus employee data.
</li></ul></p></>,
    link:'https://www.colgate.com'
},
{
    id:4,
    title:"National Informatics Centre",
    img :'/nic.png',
    desc:<><h3>Software Development Intern</h3><p className="para"><ul><li>Crafted Inventory system containing Django Model-View-Template (MVT) framework and seamlessly integrated
    Bootstrap templates. To ensure data integrity, PostgreSQL database was employed for efficient storage management.</li><br></br><li>Coded loggers for transaction recording. Additionally incorporated Email Service, enabling seamless communication.</li><br></br><li>Assured OTP-based authentication with filters to facilitate extraction of specific product transaction data.</li></ul></p></>,
    link:'https://www.nic.in'
}

]

const Single = ({item}) =>{
   
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target : ref
    });

    const y = useTransform(scrollYProgress, [0,1],[-1,1]);

    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" >
                    <img src={item.img} alt="" />
                    </div>
               
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    {item.desc}
                    <button><a href={item.link} target="_blank"> website link</a></button>
                    
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Experiences = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target : ref,
        offset:['end end','start start']
    });
    const scaleX =useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className="experience" ref={ref}>
        <div className="progress">
            <h1>Work Experience</h1>
            <motion.div  style={ {scaleX }} className="progressbar"></motion.div>
        </div>
        {items.map(item=>
            <Single item={item} key={item.id}/>)}
    </div>
  );
};

export default Experiences