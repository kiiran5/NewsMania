import React, { useState } from 'react';
import { createFileName, useScreenshot } from 'use-react-screenshot';

const Screenshot = ({ refToCapture }) => {
    const [isHovered, setIsHovered] = useState(false);
    const takeScreenshot = useScreenshot({
        type: 'image/jpeg',
        quality: 1.0
    })[1];

    const download = (image, { name = 'screenshot', extension = 'jpg' } = {}) => {
        const a = document.createElement('a');
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => {
        takeScreenshot(refToCapture.current).then(download);
    };
    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        padding: '10px 20px',
        backgroundColor: isHovered ? '#0056b3' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s, transform 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    };

    return (
        <button
            onClick={downloadScreenshot}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            CaptureIt
        </button>
    );
};

export default Screenshot;
