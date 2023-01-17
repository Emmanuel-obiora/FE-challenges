import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './MainLayout.css'

const MainLayout = ({children}) => {
    return (
        <div className='main'>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
