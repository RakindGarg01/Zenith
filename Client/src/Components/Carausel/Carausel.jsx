import React from 'react'
import './carausel.css'
import slider1 from '../../Assets/slider1.jpg';
import slider2 from '../../Assets/slider2.jpg';
import slider3 from '../../Assets/slider3.jpg';
const Carausel = () => {
    return (
        <section className='section1'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='text'>&nbsp;Payroll and compliance&nbsp;</div>
                        <div className='text1'>&nbsp;One Time, Every Time Pay&nbsp;</div>
                        <img src={slider1} id="car-img" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <div className='text'>&nbsp;HR automation&nbsp;</div>
                    <div className='text1'>&nbsp;Strategic Tool for HR Management&nbsp;</div>
                        <img src={slider2} id="car-img" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <div className='text'>&nbsp;Corporate Compliance Management&nbsp;</div>
                    <div className='text1'>&nbsp;Zero tolerance on regulatory compliance&nbsp;</div>
                        <img src={slider3} id="car-img" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carausel