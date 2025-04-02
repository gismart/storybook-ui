import React from 'react';
import { IAnswerButtonProps } from '../../models/answer';
import { IThemedComponent } from '../../models/common';
import { IOptionProps } from '../Option/Option';
export declare const enum answerTheme {
    DANCEBIT = "dancebit",
    DANCEBIT_JAPANESE = "dancebitJa",
    DANCEBIT_ADULT = "dancebitAdult",
    DANCEBIT_SEXY = "dancebitSexy",
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
