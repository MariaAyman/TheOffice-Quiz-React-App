import React from 'react';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='made-by'>
                <div className='logo'>
                    <img src='https://res.cloudinary.com/maria1877/image/upload/v1607171771/137210_idfozfBe_jmrcjq.png' alt='logo'/>
                </div>
                <span>Made by MariaAyman</span>
            </div>
            <div className='socmed-icons'>
                <a href='https://github.com/MariaAyman' target="_blank">
                    <i class="fa-brands fa-github fa-lg"></i>
                </a>
                <a href='https://www.linkedin.com/in/maria-ayman-mansour1877/' target="_blank">
                    <i class="fa-brands fa-linkedin fa-lg"></i>
                </a>
                <a href='https://dribbble.com/MariaAyman' target="_blank">
                    <i class="fa-brands fa-dribbble fa-lg"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;