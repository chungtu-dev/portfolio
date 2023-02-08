import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">What i'm have got</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ?
                            "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    } onClick={() =>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon">Education</i>
                    </div>

                    <div className={
                        toggleState === 2 ?
                            "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    } onClick={() =>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Major</h3>
                                <span className="qualification__subtitle">Infomation Technology (Applied Infomatics)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2015-2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">NGN Software</h3>
                                <span className="qualification__subtitle">Intern develop web & app</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2019</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MWG</h3>
                                <span className="qualification__subtitle">Fresher - Junior developer web application E-commerce</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualification__subtitle">Develop FE E-commerce</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">SelfLearning</h3>
                                <span className="qualification__subtitle">Develop UI/UX, design webste, app mobile, web api,...</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2023</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification