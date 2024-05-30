import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export interface IAnswerWithIconAndCheckboxContentProps {
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
export interface IAnswerWithIconAndCheckboxImageProps {
    /**
      Icon path
  */
    imageSrc?: string;
    /**
     * Icon width
     */
    imageWidth?: string;
    /**
     * Icon height
     */
    imageHeight?: string;
    /**
     * Define vertical alignment for icon
     */
    imageAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}
export interface IAnswerWithIconAndCheckboxProps extends IAnswerButtonProps {
    reverse?: boolean;
}
export declare const AnswerWithIconAndCheckbox: React.FC<IAnswerWithIconAndCheckboxProps & IAnswerWithIconAndCheckboxImageProps & IOptionProps & ICheckboxProps & IAnswerWithIconAndCheckboxContentProps & IThemedComponent>;
