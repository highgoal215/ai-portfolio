import React from 'react';
import "../../../css/modal-loading.css";
import { ModalLoadingAnimationProps } from '../../../types';

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
