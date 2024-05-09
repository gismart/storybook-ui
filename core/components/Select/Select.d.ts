import React, { FocusEvent } from 'react';
import { MultiValue, SingleValue } from 'react-select';
import { IDimensionsProps } from '../../models/dimensions';
import { IColorsProps } from '../../models/colors';
import { IFontsProps } from '../../models/fonts';
export interface IOptions {
    value: any;
    label: string;
}
export interface IPlaceholder {
    placeholderFontSize?: string;
    placeholderLineHeight?: string;
    placeholderFontWeight?: string;
    placeholderColor?: string;
}
export interface ISelectProps extends IColorsProps, IFontsProps, IDimensionsProps, IPlaceholder {
    placeholder?: string;
    options?: IOptions[];
    defaultValue?: IOptions | undefined | IOptions[];
    isMultiSelect?: boolean;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: MultiValue<IOptions> | SingleValue<IOptions>) => void;
    selectedIcon?: string;
    focusedOptionBorder?: string;
    optionBoxShadow?: string;
    openedBackgroundColor?: string;
    closedBackgroundColor?: string;
    menuPadding?: string;
    optionMinHeight?: string;
}
export declare const Select: React.FC<ISelectProps>;
//# sourceMappingURL=Select.d.ts.map