import React from "react";
import { motion } from "framer-motion";
export default function AboutMe(){
    const openPDF = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        const pdfPath = './assests/data/Balaji_resume_13_12.pdf';
        window.open(pdfPath, '_blank');
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
                        <p className="aboutPara fw-light"> Hello, I'm Balaji K, a passionate Frontend Developer from Neyveli, India. Currently in my Final year pursuing a
                             Bachelor's degree in Computer Science at IFET College of Engineering, Vilupuram. </p>
                        <p className="aboutPara mb-0 fw-light">  Proficient in designing and maintaining responsive websites for a seamless user experience. My expertise lies in crafting dynamic, engaging interfaces through clean 
                            and optimized code, utilizing cutting-edge development tools and techniques.</p>
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