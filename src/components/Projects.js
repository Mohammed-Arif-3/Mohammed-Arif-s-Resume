import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assests/img/project-img1.png";
import projImg2 from "../assests/img/project-img2.png";
import projImg3 from "../assests/img/project-img3.png";
import projImg4 from "../assests/img/project-img4.png";
import projImg5 from "../assests/img/project-img5.png";
import projImg6 from "../assests/img/project-img6.png";
import projImg7 from "../assests/img/project-img7.png";
import projImg8 from "../assests/img/project-img8.png";
import projImg9 from "../assests/img/project-img9.png";
import colorSharp2 from "../assests/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const FullStack = [
    {
      title: "Code-chef Cards",
      description: "Competitive stats. Clean design. CodeChef at a glance.",
      imgUrl: projImg7,
    },
    {
      title: "Modern Web  Design",
      description: "Designing Experiences, Not Just Websites.",
      imgUrl: projImg8,
    },
    {
      title: "Offside",
      description: "Offside — Your Gateway to Gaming Glory.",
      imgUrl: projImg9,
    },
    
  ];
  const Aiml = [
    {
      title: "Retinopathy Claassification",
      description: "Graph Neural Networks for Smarter Retinal Disease Detection.",
      imgUrl: projImg4,
    },
    {
      title: "Impactify",
      description: "Turn Social Media Noise into Emotional Insight.",
      imgUrl: projImg5,
    },
    {
      title: "U-Kam",
      description: "Break language barriers at a glance – instant visual translations through your camera.",
      imgUrl: projImg6,
    },
    
  ];
  const WebD = [
    {
      title: "Ai-Coder",
      description: "Write Less, Build More — in Any Programming Language.",
      imgUrl: projImg1,
    },
    {
      title: "Nike Parody",
      description: "A creative parody of Nike's website",
      imgUrl: projImg2,
    },
    {
      title: "Banking System",
      description: "Next-Gen Banking at Your Fingertips.",
      imgUrl: projImg3,
    },
   
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI & ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          WebD.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Aiml.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          FullStack.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}