import { GroupBase, StylesConfig } from 'react-select';
import { IFontsProps } from '../../models/fonts';
import { IOptions, IPlaceholder, ISelectProps } from '../../components/Select/Select';
export declare const customSelectStyles: ({ focusedOptionBorder, optionBoxShadow, openedBackgroundColor, closedBackgroundColor, fontSize, fontWeight, minHeight, menuPadding, borderRadius, border, }: ISelectProps) => StylesConfig<IOptions, boolean, GroupBase<IOptions>>;
export declare const StyledSelect: {
    Root: import("styled-components").StyledComponent<"div", any, {}, never>;
    Option: import("styled-components").StyledComponent<"div", any, ISelectProps, never>;
    SelectedIcon: import("styled-components").StyledComponent<"span", any, {
        selectedIcon: any;
    }, never>;
    CircleMarkIcon: import("styled-components").StyledComponent<"span", any, {}, never>;
    MultiValue: import("styled-components").StyledComponent<"span", any, IFontsProps, never>;
    Placeholder: import("styled-components").StyledComponent<"span", any, IPlaceholder, never>;
};
