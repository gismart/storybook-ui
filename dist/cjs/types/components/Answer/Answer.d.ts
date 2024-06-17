import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export declare const enum answerTheme {
    DANCEBIT = "dancebit",
    LUVLY = "luvly",
    NUTRIMATE = "nutrimate"
}
export declare const Answer: React.FC<IAnswerButtonProps & IOptionProps & IThemedComponent>;
