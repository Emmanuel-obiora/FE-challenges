import React from "react";
import './Preview.css'
import Disp1 from '../../Assets/preview-images/img1.png'
import Disp2 from '../../Assets/preview-images/img2.png'
import Disp3 from '../../Assets/preview-images/img3.png'
import Disp4 from '../../Assets/preview-images/img4.png'
import Disp5 from '../../Assets/preview-images/img5.png'

import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Importing Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const data= [
    {
        preview: Disp1,
        name: 'Tina Snow',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp2,
        name: 'Tina Snow',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp3,
        name: 'Tina Snow',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp4,
        name: 'Tina Snow',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp5,
        name: 'Tina Snow',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
]

const Preview = () => {
    return (
        <section id="finished">
            <h2>Completed Projects</h2>

            <Swiper className="finished_container"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                
            >
                {
                data.map(({preview, name, liveSite}, index) => {
                    return(
                    <SwiperSlide className='preview'>
                        <div className="dev-preview">
                            <img src={preview} alt="Design one" />
                        </div>
                        <h5 className='dev_name'>{name}</h5>
                        <a href={liveSite} rel="noreferrer" 
                            className='btn-primary' target="_blank">Live Demo
                        </a>
                    </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>
    )
}

export default Preview
