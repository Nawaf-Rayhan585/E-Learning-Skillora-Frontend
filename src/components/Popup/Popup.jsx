import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the popup after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 9000000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render the popup if not visible

  return (
    <div style={styles.popup}>
      <h2>Hurry It's Limited! 🎉</h2>
      <p style={styles.desc}>Use Code <span style={styles.span}>Skillora12</span> To Get A <span style={styles.span}>40%</span> Discount</p>
      <button onClick={handleClose} style={styles.closeButton}>Close</button>
    </div>
  );
};

// Styles for the popup and close button
const styles = {
  span: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '22px',
        textTransform: 'uppercase',
  },
  desc: {
        paddingTop: '20px',
        color: '#e8e8e8',
        fontSize: '20px',
  },
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#304059',
    padding: '50px 70px',
    color: '#e8e8e8',
    borderRadius: '8px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Adding shadow
    zIndex: '1000',
  },
  closeButton: {
    marginTop: '10px',
    padding: '8px 25px',
    backgroundColor: '#ff5c5c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default Popup;
