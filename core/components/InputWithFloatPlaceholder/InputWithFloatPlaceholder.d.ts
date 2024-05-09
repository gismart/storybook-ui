import React, { InputHTMLAttributes, RefObject } from 'react';
import { IInputProps } from '../../models/input';
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
    checkIconSvg?: string;
    crossIconSvg?: string;
}
export declare const InputWithFloatPlaceholder: React.FC<IProps>;
//# sourceMappingURL=InputWithFloatPlaceholder.d.ts.map