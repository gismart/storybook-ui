import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export declare const enum answerTheme {
    DANCEBIT = "dancebit",
    ACCOUNT_DANCEBIT = "accountDancebit",
    LUVLY = "luvly",
    ACCOUNT_LUVLY = "accountLuvly",
    NUTRIMATE = "nutrimate",
    ACCOUNT_NUTRIMATE = "accountNutrimate",
    FITME = "fitme",
    ACCOUNT_FITME = "accountFitme",
    CARDIMATE = "cardimate",
    LUVLY_SOLID = "luvlySolid"
}
export declare const Answer: React.FC<IAnswerButtonProps & IOptionProps & IThemedComponent>;
