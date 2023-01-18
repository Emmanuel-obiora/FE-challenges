import React from 'react'
import './Footer.css'

const Footer = () => {

    setInterval(() => {
        var preDate = new Date();
        var yearNow = preDate.getFullYear();
    
        document.getElementById('year').innerHTML = yearNow;
      },10);

    return (
        <footer>
            <p>
                &copy; <span className='seamfix'>Seamfix</span> FE-NextGen cohort 1 <span id='year'>Current year</span> All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
