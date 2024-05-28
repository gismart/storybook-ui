import React, { ButtonHTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, RefObject, FocusEvent } from 'react';
import { MultiValue, SingleValue } from 'react-select';

interface IDimensionsProps {
    /**
     * Define minimum width
     */
    minWidth?: string;
    /**
     * Define maximum width
     */
    maxWidth?: string;
    /**
     * Define element width
     */
    width?: string;
    /**
     * Define minimum height
     */
    minHeight?: string;
    /**
     * Define maximum height
     */
    maxHeight?: string;
    /**
     * Define element height
     */
    height?: string;
    /**
     * Set element padding
     */
    padding?: string;
    /**
     * Set element margin
     */
    margin?: string;
    /**
     * Should element fill all available width
     */
    isFullWidth?: boolean;
    /**
     * Define element border radius
     */
    borderRadius?: string;
    /**
     * Define element border
     */
    border?: string;
}

interface IColorsProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * What background gradient color to use
     */
    backgroundGradientColor?: string;
    /**
     * What text color to use
     */
    color?: string;
    /**
     * What shadow to use
     */
    boxShadow?: string;
}

interface IFontsProps {
    /**
     * Text size in px
     */
    fontSize?: string;
    /**
     * Line height in px
     */
    lineHeight?: string;
    /**
     * Text weight
     */
    fontWeight?: string;
}

interface IAnswerButtonProps extends IDimensionsProps, IFontsProps, IColorsProps {
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
     * Define border on active element
     */
    activeBorder?: string;
    /**
     * Define shadow on active element
     */
    activeBoxShadow?: string;
    /**
     * Custom styles
     */
    style?: {
        [key: string]: any;
    };
}

interface IThemedComponent {
    /**
     * Current theme
     */
    theme?: string;
}

interface IOptionProps {
    type?: 'radio' | 'checkbox';
    /**
     * Will save as user answer
     */
    value: string;
    /**
     * Use it for radio type
     */
    name?: string;
    /**
     * Use it in case with controlled component
     */
    checked?: boolean;
    /**
     * Should element be disable
     */
    disabled?: boolean;
    children?: React.ReactNode;
    onChange?: (value: string, isChecked: boolean) => void;
}
declare const Option: React.FC<IOptionProps>;

declare const Answer: React.FC<IAnswerButtonProps & IOptionProps & IThemedComponent>;

interface IAnswerWithCheckboxContentProps {
    spacingBetweenCheckboxAndContent?: string;
    /**
     * How content will alignment horizontally
     */
    contentHorizontalAlign?: 'flex-start' | 'center' | 'space-between' | 'flex-end' | 'space-around' | 'space-evenly';
}
interface ICheckboxProps {
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
interface IAnswerWithCheckboxProps extends IDimensionsProps, IFontsProps, IColorsProps {
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
declare const AnswerWithCheckbox: React.FC<IAnswerWithCheckboxProps & IOptionProps & ICheckboxProps & IAnswerWithCheckboxContentProps & IThemedComponent>;

interface IAnswerWithIconContentProps {
    spacingBetweenIconAndContent?: string;
}
interface IAnswerWithIconProps extends IDimensionsProps, IFontsProps, IColorsProps, IAnswerWithIconContentProps {
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
declare const AnswerWithIcon: React.FC<IAnswerWithIconProps & IOptionProps & IThemedComponent>;

declare const enum TextAlignment {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
    JUSTIFY = "justify"
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IFontsProps, IColorsProps, IDimensionsProps, IThemedComponent {
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
declare const Button: React.FC<IButtonProps>;

interface IButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement>, IFontsProps, IColorsProps, IDimensionsProps {
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
declare const ButtonWithIcon: React.FC<IButtonWithIconProps & IThemedComponent>;

interface IContainerProps {
    /**
     * Define element height
     */
    height: string;
    /**
     * Set element margin
     */
    margin: string;
}
interface IProgressValueProps extends IFontsProps {
    /**
     * Set percentage font size
     */
    percentageFontSize: string;
    /**
     * Set percentage font weight
     */
    percentageFontWeight: string;
    /**
     * What text color to use
     */
    color?: string;
}
interface ISvgProps {
    /**
     * Progress bar value
     */
    value: number;
    /**
     * Set stroke color of empty circle
     */
    strokeColorEmpty: string;
    /**
     * Set stroke color of filled circle
     */
    strokeColorFilled: string;
    /**
     * Set circle radius
     */
    radius?: number;
}
interface ICircleProgressProps extends IContainerProps, ISvgProps, IProgressValueProps {
}
declare const CircleProgress: React.FC<ICircleProgressProps>;

interface IHeaderProps extends IFontsProps, IColorsProps, IDimensionsProps {
    headerText?: string;
    logoSvg: string;
    marginRight?: string;
}
declare const Header: React.FC<IHeaderProps>;

interface IInputProps extends IColorsProps, IFontsProps, IDimensionsProps {
    /**
     * Define input validity
     */
    isValid?: boolean;
    /**
     * Define if validation icon should be shown
     */
    hasValidationIcon?: boolean;
    /**
     * icon?
     */
    iconSrc?: string;
    /**
     * Input type
     */
    type?: HTMLInputTypeAttribute;
    /**
     * Input label text
     */
    label?: string;
    /**
     * Label size in px
     */
    labelFontSize?: string;
    /**
     * Label line height in px
     */
    labelLineHeight?: string;
    /**
     * Label text weight
     */
    labelFontWeight?: string;
    /**
     * Label color
     */
    labelColor?: string;
    /**
     * Left label position
     */
    leftLabelPosition?: string;
    /**
     * Label color when input is focused
     */
    focusedLabelColor?: string;
    /**
     * Label font size in px when input is focused
     */
    focusedLabelFontSize?: string;
    /**
     * Border color when input is focused
     */
    focusedBorderColor?: string;
    /**
     * Input validation text
     */
    validationText?: string;
}

interface IWrapperProps {
    width?: string;
    validationText?: string;
    validationTextColor?: string;
    validationTextSize?: string;
    validationTextLineHeight?: string;
}
interface ILabelProps$1 {
    leftLabelPosition?: string;
    labelColor?: string;
    labelFontSize?: string;
}
interface IProps$1 extends IInputProps, ILabelProps$1, IWrapperProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
    hasVisibilityControl?: boolean;
    inputRef?: RefObject<HTMLInputElement>;
    className?: string;
    allowFloatNumbers?: boolean;
    isContentCentered?: boolean;
}
declare const Input: React.FC<IProps$1>;

interface ILabelProps {
    leftLabelPosition?: string;
    labelColor?: string;
    labelFontSize?: string;
    hasValue?: boolean;
}
interface IProps extends IInputProps, ILabelProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
    inputRef?: RefObject<HTMLInputElement>;
    className?: string;
    allowFloatNumbers?: boolean;
    isContentCentered?: boolean;
    iconSrc?: string;
    marginBottom?: number;
    checkIconSvg?: string;
    crossIconSvg?: string;
}
declare const InputWithFloatPlaceholder: React.FC<IProps>;

interface IListItemWithIconProps extends IFontsProps, IColorsProps, IDimensionsProps {
    children?: React.ReactNode;
    /**
     * Set icon src
     */
    iconSrc: string;
    /**
     * Set icon width
     */
    iconWidth?: number;
    /**
     * Set icon height
     */
    iconHeight?: number;
}
declare const ListItemWithIcon: React.FC<IListItemWithIconProps>;

interface IProgressBarBreadcrumbsProps extends IFontsProps, IColorsProps {
    stepsMap: {
        id: string;
        text: string;
    }[][];
    currentSectionIndex: number;
    lastStepText: string;
    isLastStepActive: boolean;
    stepRender: (text: string) => React.ReactNode;
    textAlign: string;
    progressCheckImg: string;
    activeColor: string;
    activeBackground: string;
    activeBoxShadow: string;
    progressStepBackground: string;
    passedColor: string;
}
declare const ProgressBarBreadcrumbs: React.FC<IProgressBarBreadcrumbsProps>;

interface IOptions {
    value: any;
    label: string;
}
interface IPlaceholder {
    placeholderFontSize?: string;
    placeholderLineHeight?: string;
    placeholderFontWeight?: string;
    placeholderColor?: string;
}
interface ISelectProps extends IColorsProps, IFontsProps, IDimensionsProps, IPlaceholder {
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
declare const Select: React.FC<ISelectProps>;

export { Answer, AnswerWithCheckbox, AnswerWithIcon, Button, ButtonWithIcon, CircleProgress, Header, Input, InputWithFloatPlaceholder, ListItemWithIcon, Option, ProgressBarBreadcrumbs, Select };