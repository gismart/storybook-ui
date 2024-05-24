import React from 'react';
import { IColorsProps } from '../../models/colors';
import { IDimensionsProps } from '../../models/dimensions';
import { IThemedComponent } from '../../models/common';
import { IFontsProps } from '../../models/fonts';
import { IOptionProps } from '../Option/Option';
export interface IAnswerWithCheckboxContentProps {
    spacingBetweenCheckboxAndContent?: string;
    /**
     * How content will alignment horizontally
     */
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
}
export interface IAnswerWithCheckboxProps extends IDimensionsProps, IFontsProps, IColorsProps {
    children?: React.ReactNode;
    /**
     * What background color to use in active statement
     */
    activeBackgroundColor?: string;
    /**
     * What color to use in active statement
     */
    activeColor?: string;
    /**
     * What background gradient to use in active statement
     */
    activeBackgroundGradientColor?: string;
    /**
     * Define border on active element
     */
    activeBorder?: string;
    /**
     * Should icon render on the left side
     */
    reverse?: boolean;
}
export declare const AnswerWithCheckbox: React.FC<IAnswerWithCheckboxProps & IOptionProps & ICheckboxProps & IAnswerWithCheckboxContentProps & IThemedComponent>;
