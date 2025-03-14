import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
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
     * Icon min width
     */
    iconMinWidth?: string;
    /**
     * Icon height
     */
    iconHeight?: string;
    /**
     * Icon min height
     */
    iconMinHeight?: string;
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
    DANCEBIT = "dancebit",
    DANCEBIT_JAPANESE = "dancebitJa",
    DANCEBIT_ADULT = "dancebitAdult",
    NUTRIMATE = "nutrimate",
    FITME = "fitme",
    LUVLY_SOLID = "luvlySolid"
}
export declare const AnswerWithIcon: React.FC<IAnswerWithIconProps & IOptionProps & IThemedComponent>;
