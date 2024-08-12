import React from 'react';
import "../../../css/modal-loading.css";

interface ModalLoadingAnimationProps {
    children: React.ReactNode;
    duration: string; // e.g., '2s', '1.5s'
    direction: string; // 'loadingBTT', 'loadingTTB', 'loadingLTR', 'loadingRTL'
}

export default function ModalLoadingAnimation({ children, duration, direction }: ModalLoadingAnimationProps) {
    
    const style: React.CSSProperties = {
        animation: `${direction} ${duration} ease 1`
    };

    return (
        <div className="modal-loading-animation-container" style={style}>
            {children}
        </div>
    );
}
