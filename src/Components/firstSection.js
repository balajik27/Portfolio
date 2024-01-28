
import Typewriter from 'typewriter-effect';

export default function FirstSection() {
    new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
    });
    return (
        <>
            <section id="firstSection" className="clipPath ">
                <div className="container pt-4 ">
                    <div className="row">
                        <div className="col-xl-5 col-sm-12 mainImageSection">
                            <div className="backLeft"></div>
                            <div className="backRight"></div>
                            <div className="mainImage overflow-hidden" >
                                    <img src="./assests/img/gallery/bals_cropped_2_ai_enhance-removebg.png" className="img-fluid"  />
                            </div>
                        </div>
                        <div className="col-xl-7 col-sm-12 mainDetails">
                            <div className="forBubble position-relative d-xl-block d-none ">
                                <div className="bubbleTop"></div>
                                <div className="bubbleBottom"></div>
                            </div>
                            <div className="mainContents ps-xl-2 ps-0">
                                <h3 className=" myName text-xl-start text-center fw-bolder" style={{ fontSize: '3rem' }}>Hi, I am </h3>
                                <h1 className=" myName text-xl-start text-center fw-bolder"> Balaji</h1>
                                <p className="frontEndDeveloper text-xl-start text-center fw-bold">I'm a
                                    <Typewriter  options={{
                                        strings: ['Front-end Developer', 'Programmer', 'Full Stack Developer'],
                                        autoStart: true,
                                        loop: true,
                            
                                    }} />
                                </p>
                                <p className="developerTagline text-xl-start text-center">Passionate Web Developer based in <br /> Neyveli, India.</p>
                            </div>
                            <div className="container">
                                <div className="row px-xl-0 px-md-5 px-sm-4 px-0 mx-xl-0 mx-md-5 mx-sm-4 mx-0">
                                    <div className="col-xl-2 col-12 fw-bold contact text-xl-start h3 text-center d-flex align-items-center">Contact</div>
                                    <div className="col-xl-5 col-12 pe-xl-4 ps-xl-0  px-4 contactInfo">
                                        <div className="contactbox">
                                            <a  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdHGvdcLVbVPQjbpWtVQNjdZGqFQwFVWXCXlQprKWtVCCqCpVbLRSDcHmdgbJpbcTZnjDCl" target="_blank"><img className="img-fluid p-2" src="./assests/img/svg/gmail_icon_new.svg" title="Gmail" alt="" /></a> 
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox">
                                            <a href="https://www.linkedin.com/in/balaji-k-programmer" target="_blank" >
                                                <img className="img-fluid p-2" src="./assests/img/svg/linkedin_2_new.svg" title="LinkedIn" alt="" />
                                            </a>
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox">
                                            <a href="https://github.com/balajik27" target="_blank">
                                                <img className="img-fluid p-2 rounded-circle" src="./assests/img/svg/github_png_icon.png" title="Github" alt="" />
                                            </a> 
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox" style={{height:'46px' , width : '46px'}}>
                                            <a href="https://api.whatsapp.com/send?phone=9080022621" target="_blank">
                                            <img className="img-fluid p-2" src="./assests/img/svg/whatsapp.svg" title="Whatsapp" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-5 contact"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}