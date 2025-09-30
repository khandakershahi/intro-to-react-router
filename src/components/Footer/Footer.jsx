import React from 'react';

const Footer = () => {
    return (
        <div className='bg-blue-300 h-30 max-w-[1200px] mx-auto flex justify-center flex-col items-center'>
            <p>
                <small>Thank you for vising our website</small>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms</a>
                <a href="/fb">Facebook</a>
            </p>
        </div>
    );
};

export default Footer;