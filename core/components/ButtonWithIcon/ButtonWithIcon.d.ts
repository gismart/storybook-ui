import React, { ButtonHTMLAttributes } from 'react';
import { IFontsProps } from '../../models/fonts';
import { IColorsProps } from '../../models/colors';
import { IDimensionsProps } from '../../models/dimensions';
import { IThemedComponent } from '../../models/common';
import { TextAlignment } from '../../constants/rootConstants';
export interface IButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement>, IFontsProps, IColorsProps, IDimensionsProps {
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
     * Icon width
     */
    iconWidth?: string;
    /**
     * Icon height
     */
    iconHeight?: string;
    /**
     * Icon position
     */
    iconPositionRight?: string;
    /**
     * Icon position
     */
    iconPositionLeft?: string;
    /**
     * Custom styles
     */
    style?: {
        [key: string]: any;
    };
}
export declare const ButtonWithIcon: React.FC<IButtonWithIconProps & IThemedComponent>;
//# sourceMappingURL=ButtonWithIcon.d.ts.map