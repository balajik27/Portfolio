
import '../assets/css/updateStyle.css';
import Nanlogical from '../assets/images/nanlogical_md.png';
import Converta from '../assets/images/converta_md.png';
import Eshopify from '../assets/images/eshopify_md.png';
import Techbiz from '../assets/images/techbiz_md.png';
import Jamoo from '../assets/images/jamoo_md.png';

export const InternProject = () => {
   
    return (
        <> 
        <div className="d-flex align-items-center justify-content-center py-5">
            <h1 className="text-center my-3 p-0 fw-bolder experienceHeading heading">Internship Projects</h1>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-12">
                    <div className="projectList mx-2">
                        <article className="experienceProjectBox">
                            <a href="https://balajik27.github.io/NanLogical_P-1/" target="_blank" rel="noopener noreferrer">
                                <img src={Nanlogical} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://balajik27.github.io/NanLogical_P-2/" target="_blank" rel="noopener noreferrer">
                                <img src={Converta} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://balajik27.github.io/Nanlogical_E-Shopify_P-3" target="_blank" rel="noopener noreferrer">
                                <img src={Eshopify} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://balajik27.github.io/Nanlogical_P-4/" target="_blank" rel="noopener noreferrer">
                                <img src={Techbiz} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://balajik27.github.io/Nanlogical_P-5/" target="_blank" rel="noopener noreferrer">
                                <img src={Jamoo} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}
