import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, duration, id, isActive, handleCardClick }) => {
  return (
    <>
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx ${isActive ? 'active' : ''}`} id={id} onClick={() => handleCardClick(id)}>
        <img src={imgUrl} alt={title} className="proj-job"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <span>{duration}</span>
        </div>
      </div>
    </Col>
    </>
  );
};