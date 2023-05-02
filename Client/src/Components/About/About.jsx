import React from 'react'
import './About.css'
import img from '../../Assets/time.jpg'
import Footer from '../Footer/Footer'
const About = () => {
    return (
        <div className="about-container">
            <section className="contact"><br />
                <h2><strong>HR : ZENITH - REACHING THE PINNACLE OF HR EXCELLENCE</strong></h2>
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </span> <span id="review">&nbsp; 4.7|5 (391 reviews)</span>
                <span className="price">
                    Premium plan Starting at Just Rs 10,000/-
                </span>
                <p id="review">#2336 HSR Layout Bengaluru, Karnataka, India </p>
                <p id="review">Contact Us at : + 18003138282 | support@zenithHR.com</p>
            </section><br />

            <section className="content">
                <p className='paragraph'>
                    HR: Zenith is a platform that <strong>Aims to address the problem of lacking the Flexibility, Scalability and Time Management, Thus spending a lot of time in
                        performing routine Administrative Tasks</strong> and limiting their ability to focus on strategic HR initiatives. By <strong>Offering a Light Weight and Stable solution, Zenith
                            provides a User-Friendly, Secure and Scalable System</strong> to overcome the challenges that managers are facing right now.<br />
                    Zenith is a software application designed to manage human resource processes and procedures. The purpose of this software is to <i>Centralize HR data
                        and automate HR processes</i>, including employee data management, payroll, benefits administration, performance management, and training and
                    development. This is an essential tool for HR professionals to manage employee data and streamline HR processes.
                </p><br/>
                <div className="image">
                    <img src={img} className="image" width="100%" />
                </div>
                <br />
                <strong>We Aims For:-</strong>
                <ol className='paragraph'>
                    <li>
                        To provide HR professionals with valuable insights into their workforce and help them make informed decisions to improve
                        employee satisfaction and retention.
                    </li>
                    <li>
                        To increase efficiency and reduce administrative tasks associated with HR processes.
                    </li>
                    <li>
                        The role of performance management and training and development in improving employee performance and retention
                    </li>
                    <li>
                        The need for effective change management processes when implementing an HR: Zenith, including communication, training,
                        and stakeholder engagement.
                    </li>
                </ol>
            </section>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex ">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" id="map" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">#2336 HSR Layout Bengaluru, Karnataka, India</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">support@zenithHR.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+ 18003138282</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">CONTACT US</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Please Drop Your Query, Our Managers will contact you soon</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}

export default About