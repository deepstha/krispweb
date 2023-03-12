import React, { useState } from 'react';
import {  connect } from "frontity";
import Link from '../link';
import { IconArrowRight } from './icon';

const Styles = [
    "btn-primary",
    "btn-secondary",
    "btn-tertiary",
    "btn-outline", 
    "btn-outline-primary",
    "btn-outline-secondary",
    "btn-outline-tertiary",
    "btn-icon",
    "btn-icon-tertiary",
]
const Sizes = [
    "lg",
    "medium",
    "sm"
];
export const Button = ({ 
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const ButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const ButtonSize = Sizes.includes(buttonSize) ? 'btn-'+ buttonSize : 'btn-'+ Sizes[0];
    return (
        <button 
            className={`btn ${ButtonStyle} ${ButtonSize}`} 
            onClick={onClick} 
            type={type}>
            {children}
        </button>

    );
};

export const BtnTrial = () => {
    return (
        <Link className="btn btn-primary my-2 my-sm-0" link={'/login'}>
            Start Free Trial
            <span className="icon icon-right">
                <IconArrowRight/>
            </span>
        </Link>

    );
};

export const BtnTour = () => {
    return (
        <Link className="btn btn-outline my-2 my-sm-0" link={'/register'}>
            Take a Tour
            <span className="icon-left arrow-fill-right"></span>
        </Link>

    );
};
export const BtnPrimary = ({children, link, addClass}) => {
    return (
        <Link className={`btn btn-primary ${addClass}`} link={link}>
            {children}
            <span className="icon icon-right"></span>
        </Link>
    );
};

export const BtnSecondary = ({children, link, addClass}) => {
    return (
        <Link className={`btn btn-secondary ${addClass}`} link={link}>
            {children}
        </Link>
    );
};

export const BtnTertiary = ({children, link}) => {
    return (
        <Link className="btn btn-tertiary" link={link}>
            {children}
            <span className="icon icon-right">
                <IconArrowRight/>
            </span>
        </Link>
    );
};
export const BtnDownload = ({children, link, addClass}) => {
    return (
        <Link className={`btn btn-secondary ${addClass}`} link={link} target="_blank" download>
            {children}
        </Link>
    );
};

