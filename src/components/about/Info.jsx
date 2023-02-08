import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Skills</h3>
            <span className="about__subtitle">Javascript Es6 - Vue JS - React Native - React JS</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Activitives</h3>
            <span className="about__subtitle">Participating develop website introduce and mobile chat application,...</span>
        </div>

        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Front-end Developer VueJS, React Js, Dev UX/UI</span>
        </div>
    </div>
  )
}

export default Info