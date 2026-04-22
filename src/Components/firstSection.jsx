import Typewriter from 'typewriter-effect';
// import myProfile from '../assets/img/gallery/balaji_new_2.jpg';
import myProfile from '../assets/img/gallery/Balaji_latest_portfolio.jpeg';
import gmailIcon from '../assets/img/svg/gmail_icon_new.svg';
import linkedinIcon from '../assets/img/svg/linkedin_2_new.svg';
import githubIcon from '../assets/img/svg/github_png_icon.png';
import whatsappIcon from '../assets/img/svg/whatsapp.svg';
import leetcodeIcon from '../assets/img/svg/leetcode.png';

export default function FirstSection() {
    return (
        <>
            <section id="firstSection" className="clipPath ">
                <div className="container pt-4 ">
                    <div className="row">
                        <div className="col-xl-5 col-sm-12 mainImageSection">
                            <div className="backLeft"></div>
                            <div className="backRight"></div>
                            <div className="mainImage overflow-hidden" >
                                    {/* <img src={bals_crop} className="img-fluid"  /> */}
                                    <img src={myProfile} className="img-fluid" />
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
                                <div className="frontEndDeveloper text-xl-start text-center fw-bold">I'm a
                                    <Typewriter  options={{
                                        strings: ['Software Engineer', 'Full Stack Developer', "Programmer"],
                                        autoStart: true,
                                        loop: true,
                                    }} />
                                </div>
                                <p className="developerTagline text-xl-start text-center">Passionate Web Developer based in <br /> Neyveli, India.</p>
                            </div>
                            <div className="container">
                                <div className="row px-xl-0 px-md-5 px-sm-4 px-0 mx-xl-0 mx-md-5 mx-sm-4 mx-0">
                                    <div className="col-xl-2 col-12 fw-bold contact text-xl-start h3 text-center d-flex align-items-center">Contact</div>
                                    <div className="col-xl-5 col-12 pe-xl-4 ps-xl-0  px-4 contactInfo">
                                        <div className="contactbox">
                                            <a  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdHGvdcLVbVPQjbpWtVQNjdZGqFQwFVWXCXlQprKWtVCCqCpVbLRSDcHmdgbJpbcTZnjDCl" target="_blank"><img className="img-fluid p-2" src={gmailIcon} title="Gmail" alt="" /></a> 
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox">
                                            <a href="https://www.linkedin.com/in/balaji-k-programmer" target="_blank" >
                                                <img className="img-fluid p-2" src={linkedinIcon} title="LinkedIn" alt="" />
                                            </a>
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox">
                                            <a href="https://github.com/balajik27" target="_blank">
                                                <img className="img-fluid p-2 rounded-circle" src={githubIcon} title="Github" alt="" />
                                            </a> 
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox" style={{height:'46px' , width : '46px'}}>
                                            <a href="https://api.whatsapp.com/send?phone=9080022621" target="_blank">
                                            <img className="img-fluid p-2" src={whatsappIcon} title="Whatsapp" alt="" />
                                            </a>
                                        </div>
                                        <div className="contactBoxLine"></div>
                                        <div className="contactbox" style={{height:'46px' , width : '46px'}}>
                                            <a href="http://leetcode.com/balajik272003" target="_blank">
                                            <img className="img-fluid p-2" src={leetcodeIcon} title="LeetCode" alt="" />
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