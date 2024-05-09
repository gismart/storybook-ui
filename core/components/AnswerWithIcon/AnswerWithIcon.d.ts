import React from 'react';
import { IFontsProps } from '../../models/fonts';
import { IColorsProps } from '../../models/colors';
import { IDimensionsProps } from '../../models/dimensions';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export interface IAnswerWithIconContentProps {
    spacingBetweenIconAndContent?: string;
}
export interface IAnswerWithIconProps extends IDimensionsProps, IFontsProps, IColorsProps, IAnswerWithIconContentProps {
    children?: React.ReactNode;
    /**
     * How content will alignment horizontally
     */
    contentHorizontalAlign?: 'flex-start' | 'center' | 'space-between' | 'flex-end' | 'space-around' | 'space-evenly';
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
     * Define border on active element
     */
    activeBorder?: string;
    /**
     * Define vertical alignment for icon
     */
    iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}
export declare const AnswerWithIcon: React.FC<IAnswerWithIconProps & IOptionProps & IThemedComponent>;
//# sourceMappingURL=AnswerWithIcon.d.ts.map