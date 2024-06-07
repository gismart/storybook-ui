import React from 'react';
import { IThemedComponent } from '../../models/common';
import { IAnswerButtonProps } from '../../models/answer';
import { IOptionProps } from '../Option/Option';
export interface IAnswerWithIconContentProps {
    spacingBetweenIconAndContent?: string;
}
export interface IAnswerWithIconProps extends IAnswerButtonProps, IAnswerWithIconContentProps {
    /**
     * Icon path
     */
    iconSrc?: string;
    /**
     * Icon width
     */
    iconWidth?: string;
    /**
     * Icon height
     */
    iconHeight?: string;
    /**
     * Should icon render on the left side
     */
    reverse?: boolean;
    /**
     * Define vertical alignment for icon
     */
    iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}
export declare const enum answerWithIconTheme {
    DANCEBIT = "dancebit"
}
export declare const AnswerWithIcon: React.FC<IAnswerWithIconProps & IOptionProps & IThemedComponent>;
