import React from 'react'
import Carausel from '../Carausel/Carausel'
import Footer from '../Footer/Footer'
// import logo from '../../Assets/payroll.png'
import modernhr from '../../Assets/modernhr.png'
import culture from '../../Assets/culture.jpg'
import hiring from '../../Assets/hiring.png'
import payroll from '../../Assets/payroll.png'
import time from '../../Assets/time.png'
import project from '../../Assets/project.jpg'
import customer from '../../Assets/customer-logos.svg'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Carausel/><br/>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                CONSISTENTLY RANKED BEST IN THE HR INDUSTRY
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">POWERING PEOPLE PRACTICE THROUGH<br/>
                ADAPTABILITY, ACCOUNTABILITY, AND ACCURACY.
              </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">CONSULTING SERVICES</h2>
              <p className="leading-relaxed text-base">
                Our consulting practise helps you adopt industry best practices, & unleash the power of technology to meet your business needs and growth aspirations.
              </p>
              
            </div>
          </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">HR AUTOMATION</h2>
          <p className="leading-relaxed text-base">
                    Manage end-to-end employee lifecycle from pre-hire to retire. Ensure
                    higher employee and team productivity with automated workflows.
                </p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">PAYROLL AND COMPLIANCE</h2>
          <p className="leading-relaxed text-base">
                    Delight your employees with accurate, timely and secure payroll. Be
                    more efficient with a single payroll solution that is flexible.
          </p>
          
        </div>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>

<section>
  <h3 className='company-heading' >zenith is loved by companies of size 20 to 20,000</h3>
<p className='desc'>Employee experience that scales as your organization scales..</p>
<img className='ima' src={customer} />
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">EVERYTHING YOU NEED TO CREATE A HIGH PERFORMANCE CULTURE</h1>
      {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img src={payroll} />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Payroll & Expenses</h2>
          <p className="leading-relaxed text-base">Our industry redefining payroll system automates your payroll and saves time for everyone.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img src={modernhr} />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Modern HR</h2>
          <p className="leading-relaxed text-base">All your people information in one place to create a connected digital workplace.</p>
        </div>
      </div>
      
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img src={culture} />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Performance & Culture</h2>
          <p className="leading-relaxed text-base">An engaging culture driven by contextual feedback and organization aligned goals.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img src={hiring} />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Hiring & Onboarding</h2>
          <p className="leading-relaxed text-base">An integrated hiring platform for teams to collaborate with recruiters and hire good talent.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <img src={time} />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Time And Attendance</h2>
          <p className="leading-relaxed text-base">Track your employee time effectively and compensate on time while working remotely.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <img src={project}/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Project timesheet</h2>
          <p className="leading-relaxed text-base">Track your employee time and maintain effective utilization to grow your services business.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
    </div>
  )
}

export default Home