import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assests/img/arrow1.svg";
import arrow2 from "../assests/img/arrow2.svg";
import colorSharp from "../assests/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are some of the skills I have acquired over the years.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="" />
                            <h5>Data Structure and Algorithms</h5>
                        </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>Figma Designes</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>DataBase Managment</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>Content Writing</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>AI&Ml</h5>
                                </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}