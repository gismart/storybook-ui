import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export declare const enum answerAccordionTheme {
    LUVLY = "luvly"
}
export interface IAnswerAccordionProps extends IAnswerButtonProps {
    /**
     * Icon path
     */
    iconSrc?: string;
    /**
     * Icon width
     */
    iconWidth?: string;
    /**
     * Icon min width
     */
    iconMinWidth?: string;
    /**
     * Icon height
     */
    iconHeight?: string;
    /**
     * Icon min height
     */
    iconMinHeight?: string;
    /**
     * Define vertical alignment for icon
     */
    iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    /**
     * Define margin between icon and text
     */
    spacingBetweenIconAndContent?: string;
}
export declare const AnswerAccordion: React.FC<IAnswerButtonProps & IOptionProps & IThemedComponent & IAnswerAccordionProps>;
