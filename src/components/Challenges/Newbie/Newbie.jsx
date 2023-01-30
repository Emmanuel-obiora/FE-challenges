import React from 'react'
import './Newbie.css'
import MainLayout from '../../Layout/MainLayout'

// importing compressed challenge files 
import project1 from '../../../Assets/challenges/newbie/qr-code.zip'
import project2 from '../../../Assets/challenges/newbie/3-column-preview-card-component-main.zip'
import project3 from '../../../Assets/challenges/newbie/faq-accordion-card-main.zip'
import project4 from '../../../Assets/challenges/newbie/huddle-landing-page-with-single-introductory-section-master.zip'
import project5 from '../../../Assets/challenges/newbie/interactive-rating-component-main.zip'
import project6 from '../../../Assets/challenges/newbie/order-summary-component-main.zip'

// importing challenge preview images
import prev1 from '../../../Assets/preview-images/newbie/QR-desktop.jpg'
import prev2 from '../../../Assets/preview-images/newbie/3-column-preview-card.jpg'
import prev3 from '../../../Assets/preview-images/newbie/faq-accordion-card.jpg'
import prev4 from '../../../Assets/preview-images/newbie/huddle-landing-page.jpg'
import prev5 from '../../../Assets/preview-images/newbie/interactive-rating-component.jpg'
import prev6 from '../../../Assets/preview-images/newbie/order-summary-component.jpg'


const data= [
    {
        title: 'QR card component',
        preview: prev1,
        reference:"#chal1",
        id: 'chal1',
        about: "Your challenge is to build out this QR code component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the starter code and go through the README.md file. This will provide further details about the project. The style-guide.md file is where you'll find colors, fonts, etc. Want some support on the challenge? Click the link below.",
        file: project1
    },
    {
        title: '3 column preview-card component',
        preview: prev2,
        reference:"#chal2",
        id: 'chal2',
        about: "Your challenge is to build out this 3-column preview card component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the project and go through the README.md file. This will provide further details about the project and help you get set up.",
        file: project2
    },
    {
        title: 'Faq accordion card component',
        preview: prev3,
        reference:"#chal3",
        id: 'chal3',
        about: "Your challenge is to build out this FAQ accordion card and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the starter code and go through the README.md file. This will provide further details about the project. The style-guide.md file is where you'll find colors, fonts, etc.",
        file: project3
    },
    {
        title: 'huddle landing page',
        preview: prev4,
        reference:"#chal4",
        id: 'chal4',
        about: "Your challenge is to build out this landing page from the designs provided in the starter code. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the starter code and go through the README.md file. This will provide further details about the project. The style-guide.md file is where you'll find colors, fonts, etc.",
        file: project4
    },
    {
        title: 'interactive rating component',
        preview: prev5,
        reference:"#chal5",
        id: 'chal5',
        about: "Your challenge is to build out this interactive rating component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the project and go through the README.md file. This will provide further details about the project and help you get set up.",
        file: project5
    },
    {
        title: 'order summary component',
        preview: prev6,
        reference:"#chal6",
        id: 'chal6',
        about: "Your challenge is to build out this order summary card component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the project and go through the README.md file. This will provide further details about the project and help you get set up.",
        file: project6
    },
]

const Newbie = () => {
    return (
            <MainLayout >
                <div className="chal-container">
                    <section className="new-challenges">
                        <h2>Select a challenge</h2>
                        <div className="challenge-article">
                            {
                                data.map(({title, preview, reference}, index) => {
                                    return(
                                            <article>
                                                <h3>{title}</h3>
                                                <img src={preview} alt={title} />
                                                <a href={reference}>Learn More</a>
                                            </article>
                                    )
                                })
                            }
                        </div>
                    </section>
                    
                    <section className="challenge-details">
                        {
                            data.map(({title, preview, id, about, file}, index) => {
                                return(
                                    
                                    <div id={id} className="project-slide">
                                        <article>
                                            <h3>{title}</h3>
                                            <img src={preview} alt={title} />
                                            <a href={file} download className='btn'>Download starter files</a>
                                        </article>
                                        <div className="more-info">
                                            <h3>Brief</h3>
                                            <p>{about}</p>
                                            <a href="https://app.slack.com/client/T03N6P73L4T/C03P0UHKEDN" rel="noreferrer" target="_blank">Join our slack community</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            </MainLayout>
    )
}

export default Newbie
