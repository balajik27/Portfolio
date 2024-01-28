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
                            <img src="./assests/img/svg/html.svg" height="inherit" width="30px" alt=""/><span className="h5  mb-0">HTML</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/css.svg" height="inherit" width="30px" alt=""/><span className="h5  mb-0">CSS</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/js.svg" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Javascript</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/react.svg" width="30px" alt=""/><span className="h5  mb-0">React Js</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/redux.svg" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Redux</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/bootstrap-logo-shadow.png" height="31px" width="30px" alt=""/><span className="h5  mb-0">Bootstrap5</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/mediaQuery.svg" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Media Query</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-4 text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center me-xl-auto skillMainBox py-3 h-100 bg_violet">
                    <h2 className="d-block my-1">Back-End</h2>
                        <div className="d-flex flex-wrap  align-items-center justify-content-center skillInnerBox" style={{gap : '15px'}}>
                      
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/nodejs_light.png" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Node Js</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/django.svg" height="26px" width="30px" alt=""/><span className="h5  mb-0">Django</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/expressjs_light-removebg.png" height="25px" width="26px" alt=""/><span className="h5  mb-0">Express Js</span>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/mongodb_light.png"height="inherit" width="30px" alt=""/><span className="h5  mb-0">Mongo DB</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img className="rounded-circle" src="./assests/img/svg/mysql_light.png" height="inherit" width="30px" alt=""/><span className="h5  mb-0">MySQL</span>
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
                            <img src="./assests/img/svg/github_png_icon.png" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Github</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/vscode.svg" height="25px" width="26px" alt=""/><span className="h5  mb-0">VS Code</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/c.svg" height="25px" width="26px" alt=""/><span className="h5  mb-0">C</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/java.svg" height="25px" width="26px" alt=""/><span className="h5  mb-0">Java</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/python.svg" height="25px" width="26px" alt=""/><span className="h5  mb-0">Python</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/postman.svg" height="26px" width="30px" alt=""/><span className="h5  mb-0">Postman</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/picsart.jpeg" className="rounded-circle" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Picsart</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center skillBox">
                            <img src="./assests/img/svg/Canva_icon_2021.svg" height="inherit" width="30px" alt=""/><span className="h5  mb-0">Canva</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-0"></div>
            </div>
        </div>
    </section>
    )
}