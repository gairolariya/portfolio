import { Container } from "react-bootstrap";
import meter2 from "../assets/img/appreciations/spotlight2022.png";
import meter1 from "../assets/img/appreciations/GL_spotlight_of_the_month.png";
import meter3 from "../assets/img/appreciations/cohesiveAward.png";
import meter4 from "../assets/img/appreciations/appreciations.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ImageSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section>
      <Container>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true} // Enable auto-scroll
          autoPlaySpeed={2000} // Set auto-scroll speed (in milliseconds)
          className="owl-carousel owl-theme skill-slider"
        >
          <div className="appreciation">
            <img src={meter2} alt="Image" />
            <h5 className="title">SPOTLIGHT AWARD </h5>
          </div>
          <div className="appreciation">
            <img src={meter1} alt="Image" />
            <h5 className="title">SPOTLIGHT AWARD </h5>
          </div>
          <div className="appreciation">
            <img src={meter3} alt="Image" />
            <h5 className="title">COHESIVE TEAM AWARD </h5>
          </div>
          <div className="appreciation">
            <img src={meter4} alt="Image" />
            <h5 className="title">KUDOS </h5>
          </div>
        </Carousel>
      </Container>
    </section>
  );
};
