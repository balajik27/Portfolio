import NanlogicalLogo from '../assets/images/experience/nanlogicalLogo.png';
import {InternProject} from './internProjects';
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
                          <h2>Junior Frontend Developer</h2>
                          <h6>NanLogical Consultancy services Pvt Lmt</h6>
                          <p><i>12/2023 - 02/2024</i></p>
                        </div>
                        <div className="col-xl-3 col-6">
                          <a href='https://www.nanlogical.com' target="_blank" rel="noopener noreferrer">
                          <img src={NanlogicalLogo} alt="Nanlogical Logo" className="img-fluid nanlogicalLogo" />
                          </a>
                        </div>
                      </div>
                       <p className="pt-3">During the 3-month internship, I focused on frontend development, utilizing HTML, CSS, JavaScript, Bootstrap 5.2, and Git for collaborative work. Successfully transformed UI designs into interactive interfaces for 5 projects.</p>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>

        <InternProject />
    </div>
  );
};
