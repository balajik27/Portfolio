import NanlogicalLogo from '../assets/images/experience/nanlogicalLogo.png';
import {InternProject} from './internProjects';
import EnsureSafeLogo from '../assets/images/experience/ensureSafeLogo.png';
export const Experience = () => {
  return (
    <div id="experience" className="mb-xl-5 mb-4 py-md-5 py-4">
        <div className="d-flex align-items-center justify-content-center pb-5">
            <h1 className="text-center m-3 p-0 fw-bolder experienceHeading heading">Experience</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">

                  
                    <div className="experienceContents bg_violet p-xl-5 p-4 py-lg-4 py-5">

                        <div className="row d-flex justify-content-lg-start justify-content-center">
                        <div className="col-lg-8 col-12 ">
                          <h2 className='fw-bold'>Full Stack developer - MERN</h2>
                          <h6>Ensure Safe Consultancy Pte Ltd - Singapore (Remote)</h6>
                          <p><i>06/2024 - Present</i></p>
                        </div>
                        <div className="col-xl-3 col-6">
                          <a href='https://www.ensuresafe.sg' target="_blank" rel="noopener noreferrer">
                          <img src={EnsureSafeLogo} alt="EnsureSafe Logo" className="img-fluid nanlogicalLogo" />
                          </a>
                        </div>
                      </div>
                      <ul>


                        <li>
                      Led development of a <strong> Multi-role E-safe Management system (15+ modules)</strong> using MERN stack, deployed on <strong>Render</strong>.
                        </li>
                        <li>
                        Implemented advanced features like JWT authentication, face recognition, live location tracking, and automated report generation.

                        </li>
                        <li>
        Created scalable solutions with <strong> reusable components, dynamic workflows, and real-time dashboards using Chart.js</strong>.

                        </li>
                      </ul>
                       {/* <p className="pt-3">During the 3-month internship, I focused on frontend development, utilizing HTML, CSS, JavaScript, Bootstrap 5.2, and Git for collaborative work. Successfully transformed UI designs into interactive interfaces for 5 projects.</p> */}
                      
                      
                      <hr />


                      <div className="row d-flex justify-content-lg-start justify-content-center">
                        <div className="col-lg-8 col-12 ">
                          <h2 className='fw-bold'>Junior Frontend Developer</h2>
                          <h6>NanLogical Consultancy services Pvt Lmt - Chennai (Remote)</h6>
                          <p><i>12/2023 - 02/2024</i></p>
                        </div>
                        <div className="col-xl-3 col-6">
                          <a href='https://www.nanlogical.com' target="_blank" rel="noopener noreferrer">
                          <img src={NanlogicalLogo} alt="Nanlogical Logo" className="img-fluid nanlogicalLogo" />
                          </a>
                        </div>
                      </div>
                       <p className="">During the 3-month internship, I focused on frontend development, utilizing HTML, CSS, JavaScript, Bootstrap 5.2, and Git for collaborative work. Successfully transformed UI designs into interactive interfaces for 5 projects.</p>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>

        <InternProject />
    </div>
  );
};
