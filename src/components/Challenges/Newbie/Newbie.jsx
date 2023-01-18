import React from 'react'
import './Newbie.css'
import MainLayout from '../../Layout/MainLayout'
import project1 from '../../../Assets/challenges/newbie/qr-code.zip'
import prev1 from '../../../Assets/preview-images/newbie/QR-desktop.png'
// import prev2 from '../../../Assets/preview-images/img2.png'
// import prev3 from '../../../Assets/preview-images/img3.png'
// import prev4 from '../../../Assets/preview-images/img4.png'


const data= [
    {
        title: 'QR card component',
        preview: prev1,
        reference:"#chal1",
        id: 'chal1',
        about: "Your challenge is to build out this QR code component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Download the starter code and go through the README.md file. This will provide further details about the project. The style-guide.md file is where you'll find colors, fonts, etc. Want some support on the challenge? Click the link below.",
        file: project1
    },
    // {
    //     title: 'hahaahahhahah',
    //     preview: prev2,
    //     reference:"#chal2",
    //     id: 'chal2',
    //     about: '',
    //     file: project1
    // },
    // {
    //     title: 'gsgsgssg',
    //     preview: prev3,
    //     reference:"#chal3",
    //     id: 'chal3',
    //     about: '',
    //     file: project1
    // },
    // {
    //     title: 'gsagsgsgsg',
    //     preview: prev4,
    //     reference:"#chal4",
    //     id: 'chal4',
    //     about: '',
    //     file: project1
    // },
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
