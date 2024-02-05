// Description of Job Experiences and Role

import React from 'react';

export const JobDetails = ({ id, isActive, handleCardClick }) => {
  const renderParagraph = () => {
    if (isActive) {
      if (id === 'namshi') {
        return (
              <p className="jobDetailsParagraph" >
                Namshi.com is the largest online multi-brand fashion e-com platform in the Middle East, home to 800+ brands.
                I have been working as a developer with the Marketing-Design-Content team.<br/>
                <i>Namshi is part of the noon Group.</i>
                <ul>
                  <li>I collaborate effectively with cross-functional teams to achieve project objectives for a smooth process of web 
                    development. </li>
                    <li>Cooperation with the Content Team, Design Team, OPS & Business Partnership
                    teams to plan and forecast forthcoming requirements in terms of UI/UX
                    development.</li>
                  <li>Work with the design team to setup a formal and effective way for performance
                    optimization and User experience (UX) design.</li>
                  <li>Mentor junior/intermediate teammates.</li>
                  <li>Implement requirements following the latest and best industry practices</li>
                  <li>Refactor part of our codebase.</li>
                  <li>Ensure cross-browser compatibility for the latest major releases of all major 
                    browsers and provide graceful degradation for outdated browser versions.</li>
                </ul>
              </p>
        );
      } else if (id === 'GL') {
        return (
              <p className="jobDetailsParagraph" >
                I have been associated with GOOGLE India as a Developer to develope , upgrade
                and implement changes for the Growth of Google products and apps/ Google
                Workspace (formerly called G Suite)
                <ul>
                  <li>I have strong understanding of responsive design and cross-browser compatibility.</li>
                  <li>I worked as a Frontend Developer in the Google Growth project where the
                      mission is to make Google Workspace uncomplicated for users, to gain more
                      Google value, and to build a new customer onboarding experience to drive
                      engagement and revenue.</li>
                  <li>Worked on developing, revamping, and executing new features and bug
                      resolving in Google Workspace onboarding(Signup/Setup) flows.</li>
                  <li>I also got to work on JUnit tests (jasmine/karma), JsWire (UI Testing), and
                      Google Analytics.</li>
                  <li>Experience with Git, Gulp, Babel, and Webpack.</li>
                  <li>Worked on independent projects and have worked as a lead in a project which
                      was part of GSuite to Google Workspace revamp</li>
                  <li>Competent of fundamental debugging and fixing backend-related issues.</li>
                  <li>Mentoring Juniors and giving training</li>               
                  <li>Got Awarded as "Spotlight Award" twice in 3 years and "The cohesive Team
                      Award" also got multiple Badges Of Appreciation from my managers and leads
                      recognizing and appreciating my performance in the Growth Project</li>
                  <li><b>Received Spotlight Award</b> - twice in 3 years : for recognizing and appreciating
                      my performance and punctual delivery.</li>     
                  <li><b>Cohesive Team Award </b> - for the successful revamp of GSUIT to GOOGLE
                      WORKSPACE launch.</li>   
                </ul>
              </p>
            );
      } else if (id === 'appdirect') {
        return (
              <p className="jobDetailsParagraph" >
                AppDirect is a Startup in India that is recognized in Forbes Cloud Top 100 company
                list. It provides an end-to-end commerce platform for selling any product, through
                any channel, on any device as a service for the customers to succeed in the digital
                economy.
                <ul>
                  <li>I worked as a Frontend Developer in Professional Services FE (PSFE) team</li>
                  <li>Execution of Customer Feature Requests in various Javascript frameworks</li>
                  <li>Executed a React project successfully with ownership</li>
                  <li>Involved in branding for multiple marketplace from requirement gathering to launch.</li>
                  <li>Contributing timely to multiple frontend repositories</li>
                  <li>Managing Jira Projects and Team backlog</li>
                  <li>Supervising all PSFE tasks and bugs</li>
                  <li>Occasionally, Mentoring Juniors and giving training</li>               
                  <li>Got recognition and ownership awards for delivery of new successful features for companies</li>
                  <li><b>True North - Ownership Award</b> - for delivery of new successful features with full 
                       ownership independently for Wordplay company.</li>     
                  <li><b>Appreciation badge </b> - multiple appreciation badges from my managers, leads &
                      collogues(different teams) recognizing and appreciating my performance and
                      involvement in the Project success.</li>   
                </ul>
              </p>
        );
      }
    }
    return null; // Return null if not active
  };

  return (
    <>
      <div className="jobDetailsContainer" onClick={() => handleCardClick(id)}>
        {renderParagraph()}
      </div>
    </>
  );
};
