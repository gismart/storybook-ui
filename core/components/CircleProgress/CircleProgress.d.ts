import React from 'react';
import { IFontsProps } from '../../models/fonts';
export interface IContainerProps {
    /**
     * Define element height
     */
    height: string;
    /**
     * Set element margin
     */
    margin: string;
}
export interface IProgressValueProps extends IFontsProps {
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
export interface ISvgProps {
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
export interface ICircleProgressProps extends IContainerProps, ISvgProps, IProgressValueProps {
}
export declare const CircleProgress: React.FC<ICircleProgressProps>;
//# sourceMappingURL=CircleProgress.d.ts.map