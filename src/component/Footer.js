// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy; 2024 Movie Point. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',

  left: '0',
  bottom: '0',
  width: '100%'
};

export default Footer;
