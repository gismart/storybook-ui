import React from 'react';
import { IColorsProps } from '../../models/colors';
import { IFontsProps } from '../../models/fonts';
export interface IProgressBarBreadcrumbsProps extends IFontsProps, IColorsProps {
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
export declare const ProgressBarBreadcrumbs: React.FC<IProgressBarBreadcrumbsProps>;
