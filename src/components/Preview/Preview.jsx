import React from "react";
import './Preview.css'
import Disp1 from '../../Assets/preview-images/about-me.png'
import Disp2 from '../../Assets/preview-images/chat-app.png'
import Disp3 from '../../Assets/preview-images/main.png'
import Disp4 from '../../Assets/preview-images/mode.png'

import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Importing Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const data= [
    {
        preview: Disp1,
        name: 'Obiora Emmanuel',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp2,
        name: 'Obiora Emmanuel',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp3,
        name: 'Obiora Emmanuel',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
    {
        preview: Disp4,
        name: 'Obiora Emmanuel',
        liveSite:"https://emmanuel-obiora.github.io/portfolio-about-me-/src"
    },
]

const Preview = () => {
    return (
        <section className="finished">
            <h2>Completed Projects</h2>

            <Swiper className="finished_container"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
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
                            <img src={preview} alt={name} />
                        </div>
                        <div className="coder2">
                            <h5 className='dev_name'>{name}</h5>
                            <a href={liveSite} rel="noreferrer" className='btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>
    )
}

export default Preview
