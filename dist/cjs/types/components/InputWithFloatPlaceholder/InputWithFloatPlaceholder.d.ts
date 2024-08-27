import React, { InputHTMLAttributes, RefObject } from 'react';
import { IThemedComponent } from '../../models/common';
import { IInputProps } from '../../models/input';
export declare const enum InputWithFloatPlaceholderTheme {
    DANCEBIT = "dancebit",
    NUTRIMATE = "nutrimate",
    CARDIMATE = "cardimate"
}
export interface ILabelProps {
    leftLabelPosition?: string;
    labelColor?: string;
    labelFontSize?: string;
    hasValue?: boolean;
}
export interface IProps extends IInputProps, ILabelProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
    inputRef?: RefObject<HTMLInputElement>;
    className?: string;
    allowFloatNumbers?: boolean;
    isContentCentered?: boolean;
    iconSrc?: string;
    marginBottom?: number;
    backgroundColor?: string;
    checkIconSvg?: string;
    crossIconSvg?: string;
    validationIconSize?: number;
}
export declare const InputWithFloatPlaceholderBase: React.FC<IProps>;
export declare const InputWithFloatPlaceholder: React.FC<IProps & IThemedComponent>;
