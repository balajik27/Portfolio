
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay , EffectFade } from 'swiper/modules';
// import { Autoplay , EffectFade, Navigation, Pagination } from 'swiper/modules';


export default function PhotoGallery(){
    return(
        <>
        <section className="mb-xl-5 mb-4 py-5">
        <div className="d-flex align-items-center justify-content-center">
            <h1 className="text-center m-3 p-0 fw-bolder heading d-md-block d-none">Progress Journey Album</h1>
            <h1 className="text-center m-3 p-0 fw-bolder  d-md-none d-block">Progress Journey <br /> Album</h1>
        </div>
        <div className="container px-lg-5 px-md-4 px-4 mt-sm-5 mt-4">

    <div className="row ">
        <div className="col-md-2 col-sm-1 col-0"></div>
        <div className="col-md-8 col-sm-10 col-12">
            <div className="row">
                <div className="col-md-1 col-0"></div>
                <div className="col-md-5 col-sm-6 col-12 p-1">           
                    <div className="gallery_img">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                // navigation={true}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                // modules={[Autoplay , EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/Award/Techberry_pic.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/img/Award/techberry_certificate.jpg" height="225px" className=" object_fit_cover rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Won <strong>First prize</strong>  at <strong>Techberry-23</strong>  project expo for my project <strong>"OpenCV-based Video Surveillance by Using Haar Cascade Classifier."</strong>  at our intra-college event</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> April 13, 2023 </span>
                            </time>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-12 p-1">

                    <div className="gallery_img">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/intern_pic.jpg" className="img-fluid rounded h-100 w-100" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/intern_speak.jpg" height="223px" className=" object_fit_cover rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Secured an <strong>Internship</strong> at Nanlogical Consultancy Pvt Ltd as a <strong>Junior Web Developer!</strong>  Here's a group picture featuring me alongside the CEO.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> November 1, 2023 </span>
                            </time>
                        </div>
                    </div>
            
                </div>
                <div className="col-md-1 col-0"></div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12 p-1">

                    <div className="gallery_img pt-2 rounded">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/Drone_2.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/Drone_1.jpg" height="453px" className=" object_fit_cover rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Participated in a <strong>3-day drone workshop</strong>  where I successfully constructed and flew a basic drone</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> January 1, 2023 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/entreprenur_speech_1.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="./assests/img/gallery/entrepeuner_2.jpg" className="img-fluid rounded" alt="" />

                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Delivered a <strong> welcoming address</strong>  at Entrepreneurs Day.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> August 21, 2023 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/football.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="./assests/img/gallery/football_certificate.jpg" className="" height="215px" alt="" />

                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> 
                                Achieved <strong>First place</strong>  in football at the 25th Annual Sports Day.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2022 - 2023 </span>
                            </time>
                        </div>
                    </div>
                
                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <img src="./assests/img/gallery/acadamic_first.jpg" className="img-fluid rounded" alt="" />
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Secured <strong>First rank</strong>  in academic excellence with an outstanding <strong>9.47 CGPA</strong>  in the 2nd and 3rd semesters.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2021, 2022 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <img src="./assests/img/gallery/krishnaswamy_clg.jpg" className="img-fluid rounded" alt="" />
                        </div> 
                        <div className="last_publisher_info p-4 d-md-block d-none">
                            <div className="mb-2" style={{textIndent: '30px'}}>Participated in the <strong> Technical Symposium on Recent Trends in Digital Computing (RTDC'22)</strong> at Krishnaswamy College of Engineering, Cuddalore, presenting on <strong>"Integration of IoT with Blockchain."</strong> </div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2021, 2022 </span>
                            </time>
                        </div>
                    </div>

                </div>
                <div className="col-md-7 col-sm-6 col-12 p-1">

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/vivekanandha_poster.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/e-poster-certificate.jpg" className="d-md-block d-none object_fit_cover rounded" height="267px" alt="" />
                                    <img src="./assests/img/gallery/e-poster-certificate.jpg" className="d-md-none d-block object_fit_cover rounded" height="184px" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Won <strong>First prize</strong>  in the <strong>E-poster competition</strong>  held on National Youth Day Celebrations 2023.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> January 12, 2023 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <img src="./assests/img/gallery/hackathon_1.jpg" className="img-fluid rounded" alt="" />
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Took part in <strong>Smart India Hackathon 2023</strong> , addressing the problem statement of <strong> "Tech-Driven Solutions for Undertrial Prisoners in India."</strong></div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> September 20, 2023 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/kcg_1.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assests/img/gallery/kcg_certificate.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Participated in <strong>Avinya 2023</strong>  project competition themed under SDG at <strong>KCG College of Engineering , Chennai.</strong></div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> February 11, 2023 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden last_img_section">
                            <img src="./assests/img/gallery/hosting.jpg" className="img-fluid rounded" alt=""  />
                        </div> 
                        <div className="last_left_publisher_info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Happy to be a part of the 25th Annual day function as a <strong> Main English Compere.</strong></div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> April 15, 2023 </span>
                            </time>
                        </div>
                    </div>

                </div>
            </div>
    </div>
    <div className="col-md-2 col-sm-1 col-0"></div>
</div>


</div>

    </section>
        </>
    )
}