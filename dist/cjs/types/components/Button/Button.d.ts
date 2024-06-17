import React, { ButtonHTMLAttributes } from 'react';
import { IFontsProps } from '../../models/fonts';
import { IColorsProps } from '../../models/colors';
import { IDimensionsProps } from '../../models/dimensions';
import { IThemedComponent } from '../../models/common';
import { TextAlignment } from '../../constants/rootConstants';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IFontsProps, IColorsProps, IDimensionsProps, IThemedComponent {
    /**
     * Ref object for best interaction
     */
    buttonRef?: React.Ref<HTMLButtonElement>;
    /**
     * How text will alignment horizontally
     */
    textAlign?: TextAlignment;
    /**
     * Is button disable
     */
    disabled?: boolean;
    /**
     * What background color to use when disable
     */
    disableBackgroundColor?: string;
    /**
     * Custom styles
     */
    style?: {
        [key: string]: any;
    };
}
export declare const enum buttonTHeme {
    DANCEBIT = "dancebitPrimary",
    NUTRIMATE = "nutrimate"
}
export declare const Button: React.FC<IButtonProps>;
