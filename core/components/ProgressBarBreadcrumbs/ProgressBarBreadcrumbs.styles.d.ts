import { ProgressHTMLAttributes } from 'react';
import { IFontsProps } from '../../models/fonts';
import { IProgressBarBreadcrumbsProps } from '../../components/ProgressBarBreadcrumbs/ProgressBarBreadcrumbs';
interface IProps extends ProgressHTMLAttributes<HTMLProgressElement> {
    pointsNumber: number;
    color?: string;
    background?: string;
}
declare type TStepNumberProps = {
    isActive: boolean;
    isPassed?: boolean;
};
export declare const StyledPostPaymentProgressBar: {
    Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    StepBlock: import("styled-components").StyledComponent<"div", any, {}, never>;
    StepBlockProgress: import("styled-components").StyledComponent<"progress", any, IProps & Partial<IProgressBarBreadcrumbsProps>, never>;
    Step: import("styled-components").StyledComponent<"div", any, TStepNumberProps & Partial<IProgressBarBreadcrumbsProps>, never>;
    StepText: import("styled-components").StyledComponent<"span", any, IFontsProps & {
        textAlign: string;
    }, never>;
};
export {};
//# sourceMappingURL=ProgressBarBreadcrumbs.styles.d.ts.map