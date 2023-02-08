import React, { useState } from 'react'
import './services.css'
import TodoApp from '../components-todo/TodoApp'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) =>{
        setToggleState(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">With some another skills</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product</h3>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(1)}>View more{""}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="services__modal-title">Product</h3>
                            <p className="services__modal-description">Try TodoApp, what your plan?</p>

                            {/* <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul> */}

                            <TodoApp/>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UX/UI</h3>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(2)}>View more{""}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="services__modal-title">UX/UI</h3>
                            <p className="services__modal-description">Design website, app using package, tool and other libraries.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">HTMl5, CSS3</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Bootstrap, react-bootstrap, bootstrap-vue,...</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">antd, ant-design</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Design</h3>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(3)}>View more{""}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="services__modal-title">Design</h3>
                            <p className="services__modal-description">Some tool for making beauty applications.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Figma.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Canva.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Photoshop adobe</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services