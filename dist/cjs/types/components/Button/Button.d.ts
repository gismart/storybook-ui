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
     * What font color to use when disable
     */
    disableColor?: string;
    /**
     * Custom styles
     */
    style?: {
        [key: string]: any;
    };
}
export declare const enum buttonTheme {
    LUVLY = "luvlyPrimary",
    DANCEBIT = "dancebitPrimary",
    NUTRIMATE_PRIMARY = "nutrimatePrimary",
    NUTRIMATE_DEFAULT = "nutrimateDefault",
    FITMI = "fitmePrimary",
    CARDIMATE = "cardimatePrimary"
}
export declare const Button: React.FC<IButtonProps>;
