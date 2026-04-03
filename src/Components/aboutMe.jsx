import React from "react";
import { motion } from "framer-motion";
// import BalajiResume from '../assets/data/balaji_resume_dp_27_05.pdf';
import BalajiResume from '../assets/data/Balaji_K_Resume_SDE.pdf';
export default function AboutMe(){
    const openPDF = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        // const pdfPath = './assests/data/balaji_resume_dp_27_05.pdf';
        // const pdfPath = './assests/data/Balaji_K_Full_Stack_Developer_MERN_2025.pdf';
        const pdfPath = './assests/data/Balaji_K_Resume_SDE.pdf';
        window.open(BalajiResume, '_blank');
      };
    return(
        <section className="mb-xl-5 mb-4 py-md-5 py-4">
        <div className="d-flex align-items-center justify-content-center pb-5">
            {/* <img src="./assests/img/leftRightArrow.png" height="20px" width="20px" alt=""/> */}
            <h1 className="text-center m-3 p-0 fw-bolder heading">About Me</h1>
            {/* <img src=".//assests/img/leftRightArrow.png" className="transform180"  height="20px" width="20px" alt=""/> */}
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className="aboutContents bg_violet p-xl-5 p-3">
                        <p className="aboutPara fw-light"> Hello, I'm <span className="main_color fw-bold">Balaji K</span>, a <span className="main_color">Software Engineer</span> from Neyveli, India. I hold a Bachelor's degree in <span className="main_color">Computer Science and Engineering</span> from IFET College of Engineering, Vilupuram. </p>
                        <p className="aboutPara mb-0 fw-light"> I enjoy building reliable and scalable applications that solve real-world problems. I focus on writing clean, efficient code, thinking through edge cases, and creating solutions that are easy to maintain and improve over time. </p>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>
        <motion.div whileTap={{ scale: 0.8 }} className="text-center mt-xl-5 mt-4 pt-4 btn_download_hover">
        <a onClick={openPDF} className="py-3 px-5 h5 rounded-pill text-decoration-none cursor_pointer download_cv">
            Check Resume
        </a>
        </motion.div>
    </section>
    )
}