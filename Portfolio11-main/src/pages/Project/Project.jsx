import "./Project.css";

import img1 from "../../assets/images/bank.png";
import img2 from "../../assets/images/stock.png";
import img3 from "../../assets/images/travels.png";


const projects = [

  {
    title: "AlphaDecisionMaking",
    img: img2,
    desc: "Built a real-time stock decision-making platform that analyzes market data and provides intelligent buy/sell insights using predictive logic. Designed with a full-stack architecture, integrating dynamic data visualization and scalable backend processing for accurate, fast decision support.",
    skills: ["Django", "React-JS","Chart-JS", "MySql"]
  },
  
  {
    title: "Smart-Banking Service",
    img: img1,
    desc: "This project is not just a CRUD application. It simulates core banking operations with proper validation, transactional integrity, exception handling, and modular architecture — designed to reflect real-world backend system thinking.",
    skills: ["Django", "React-JS", "MySql"]
  },

  {
    title: "Tours & Travels",
    img: img3,
    desc: "A Tours and Travels Bootstrap project typically involves building a website or web application focused on showcasing travel destinations, tour packages, and booking services, using the Bootstrap framework for a responsive and visually appealing design.",
    skills: ["Bootstrap","HTML", "CSS"]
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="https://github.com/Vardhanjakka" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}