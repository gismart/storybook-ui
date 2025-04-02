import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export interface IAnswerWithCheckboxContentProps {
    spacingBetweenCheckboxAndContent?: string;
    contentHorizontalAlign?: 'flex-start' | 'center' | 'space-between' | 'flex-end' | 'space-around' | 'space-evenly';
}
export interface ICheckboxProps {
    /**
     * Define checkbox width
     */
    checkboxWidth?: string;
    /**
     * Define checkbox height
     */
    checkboxHeight?: string;
    /**
     * Path to checkbox active state icon
     */
    iconSrc?: string;
    /**
     * Icon size as background
     */
    iconSize?: string;
    /**
     * What checkbox background color to use
     */
    checkboxBackgroundColor?: string;
    /**
     * What checkbox active state background color to use
     */
    checkboxBackgroundActiveColor?: string;
    /**
     * Define checkbox border style
     */
    checkboxBorder?: string;
    /**
     * Define checkbox active state border style
     */
    checkboxActiveBorder?: string;
    /**
     * What checkbox background color to use
     */
    checkboxBorderRadius?: string;
}
export interface IAnswerWithCheckboxProps extends IAnswerButtonProps {
    reverse?: boolean;
}
export declare const enum answerWithCheckboxTheme {
    ACCOUNT_LUVLY = "accountLuvly",
    DANCEBIT = "dancebit",
    DANCEBIT_JAPANESE = "dancebitJa",
    DANCEBIT_ADULT = "dancebitAdult",
    DANCEBIT_SEXY = "dancebitSexy",
    ACCOUNT_DANCEBIT = "accountDancebit",
    NUTRIMATE = "nutrimate",
    ACCOUNT_NUTRIMATE = "accountNutrimate",
    FITME = "fitme",
    ACCOUNT_FITME = "accountFitme",
    CARDIMATE = "cardimate",
    LUVLY = "luvly",
    BLESSED_PATH = "blessedPath"
}
export declare const AnswerWithCheckbox: React.FC<IAnswerWithCheckboxProps & IOptionProps & ICheckboxProps & IAnswerWithCheckboxContentProps & IThemedComponent>;
