import React from 'react';
import { Tab, Col, Row } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, duration, id, isActive, handleCardClick }) => {
  const renderParagraph = () => {
    if (isActive) {
      if (id === 'namshi') {
        return (

              <p>
                This is the paragraph for Project e1. Modify this content as needed. namshinamshinamshinamshinamshi
              </p>

        );
      } else if (id === 'GL') {
        return (

              <p>This is the paragraph for Project e2. Modify this content as needed.GLGLGLGLGLGL</p>

        );
      } else if (id === 'appdirect') {
        return (

              <p>
                This is the paragraph for Project e3. Modify this content as needed.appdirectappdirectappdirectappdirectappdirect
              </p>

        );
      }
    }

    return null; // Return null if not active
  };

  return (
    <>
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx ${isActive ? 'active' : ''}`} id={id} onClick={() => handleCardClick(id)}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <span>{duration}</span>
        </div>
      </div>
       {/* {renderParagraph()} */}
    </Col>
   {/* <Row><Col> {renderParagraph()}</Col></Row> */}
    </>
  );
};
