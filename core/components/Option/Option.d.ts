import React from 'react';
export interface IOptionProps {
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
export declare const Option: React.FC<IOptionProps>;
//# sourceMappingURL=Option.d.ts.map