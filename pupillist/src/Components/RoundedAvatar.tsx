import React from 'react';
import '../styles/general.css'

interface RoundedImageProps {
    src: string;
    alt: string;
    size?: string;
    className?: string;
}

const RoundedAvatar: React.FC<RoundedImageProps> = ({ src, alt, size = '50px', className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`roundedImage ${className}`}
            style={{ width: size, height: size }}
        />
    );
};

export default RoundedAvatar;
