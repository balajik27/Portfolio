import htmlIcon from '../assets/img/svg/html.svg';
import cssIcon from '../assets/img/svg/css.svg';
import jsIcon from '../assets/img/svg/js.svg';
import reactIcon from '../assets/img/svg/react.svg';
import reduxIcon from '../assets/img/svg/redux.svg';
import bootstrapIcon from '../assets/img/svg/bootstrap-logo-shadow.png';
import mediaQueryIcon from '../assets/img/svg/mediaQuery.svg';
import nodejsIcon from '../assets/img/svg/nodejs_light.png';
import djangoIcon from '../assets/img/svg/django.svg';
import expressIcon from '../assets/img/svg/expressjs_light-removebg.png';
import mongodbIcon from '../assets/img/svg/mongodb_light.png';
import mysqlIcon from '../assets/img/svg/mysql_light.png';
import githubIcon from '../assets/img/svg/github_png_icon.png';
import vscodeIcon from '../assets/img/svg/vscode.svg';
import cIcon from '../assets/img/svg/c.svg';
import javaIcon from '../assets/img/svg/java.svg';
import pythonIcon from '../assets/img/svg/python.svg';
import postmanIcon from '../assets/img/svg/postman.svg';
import picsartIcon from '../assets/img/svg/picsart.jpeg';
import canvaIcon from '../assets/img/svg/Canva_icon_2021.svg';
import springBootIcon from '../assets/img/svg/springboot.png';

export default function Skills(){
    return(
        <section className="mb-xl-5 mb-4 py-md-5 py-4">
        <div className="d-flex align-items-center justify-content-center pb-sm-5 pb-4">
            {/* <img src="./assests/img/leftRightArrow.png" height="20px" width="20px" alt=""/> */}
            <h1 className="text-center m-3 p-0 fw-bolder heading">Skills</h1>
            {/* <img src="./assests/img/leftRightArrow.png" className="transform180" height="20px" width="20px" alt=""/> */}
        </div>
        <div className="container">
            <div className="row ">
                <div className="col-xl-6 col-12 text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center ms-xl-auto skillMainBox pb-3 bg_violet">
                    <h2 className="d-block mt-3 mb-1">Front-End</h2>
                        <div className="d-flex flex-wrap  align-items-center justify-content-center skillInnerBox">
                      
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={htmlIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">HTML</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={cssIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">CSS</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={jsIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Javascript</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={reactIcon} width="30px" alt=""/><span className="h5  mb-0">React Js</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={reduxIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Redux</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={bootstrapIcon} height="31px" width="30px" alt=""/><span className="h5  mb-0">Bootstrap5</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={mediaQueryIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Media Query</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-4 text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center me-xl-auto skillMainBox py-3 h-100 bg_violet">
                    <h2 className="d-block my-1">Back-End</h2>
                        <div className="d-flex flex-wrap  align-items-center justify-content-center skillInnerBox" style={{gap : '15px'}}>
                      
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={nodejsIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Node Js</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={djangoIcon} height="26px" width="30px" alt=""/><span className="h5  mb-0">Django</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={expressIcon} height="25px" width="26px" alt=""/><span className="h5  mb-0">Express Js</span>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={mongodbIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Mongo DB</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img className="rounded-circle" src={mysqlIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">MySQL</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={springBootIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Spring Boot</span>
                        </div>
                    </div>
                    </div>
                </div>
               
            </div>
            <div className="row mt-xl-5 mt-1">
                <div className="col-xl-3 col-0"></div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-4 text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center mx-xl-auto skillMainBox py-3 bg_violet">
                    <h2 className="d-block my-2">Others</h2>
                        <div className="d-flex flex-wrap  align-items-center justify-content-center skillInnerBox" style={{gap : '11px'}}>
                      
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={githubIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Github</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={vscodeIcon} height="25px" width="26px" alt=""/><span className="h5  mb-0">VS Code</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={cIcon} height="25px" width="26px" alt=""/><span className="h5  mb-0">C</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={javaIcon} height="25px" width="26px" alt=""/><span className="h5  mb-0">Java</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={pythonIcon} height="25px" width="26px" alt=""/><span className="h5  mb-0">Python</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={postmanIcon} height="26px" width="30px" alt=""/><span className="h5  mb-0">Postman</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={picsartIcon} className="rounded-circle" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Picsart</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src={canvaIcon} height="inherit" width="30px" alt=""/><span className="h5  mb-0">Canva</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-0"></div>
            </div>
            <div className="row mt-5 pt-4">
                <div className="col-12 text-center">
                    <h2 className="mb-4">LeetCode Stats</h2>
                    <div className="d-flex justify-content-center">
                        <a href="https://leetcode.com/u/balajik272003/" target="_blank" rel="noreferrer">
                            <img src="https://leetcard.jacoblin.cool/balajik272003?theme=dark&font=Syne&ext=contest" alt="LeetCode Stats" className="img-fluid" style={{ maxWidth: '450px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}