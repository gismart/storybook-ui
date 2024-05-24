import React, { InputHTMLAttributes, RefObject } from 'react';
import { IInputProps } from '../../models/input';
export declare const NumericKeypadRegex: RegExp;
export declare const NumericKeypadFloatRegex: RegExp;
export interface IWrapperProps {
    width?: string;
    validationText?: string;
    validationTextColor?: string;
    validationTextSize?: string;
    validationTextLineHeight?: string;
}
export interface ILabelProps {
    leftLabelPosition?: string;
    labelColor?: string;
    labelFontSize?: string;
}
export interface IProps extends IInputProps, ILabelProps, IWrapperProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
    hasVisibilityControl?: boolean;
    inputRef?: RefObject<HTMLInputElement>;
    className?: string;
    allowFloatNumbers?: boolean;
    isContentCentered?: boolean;
}
export declare const Input: React.FC<IProps>;
