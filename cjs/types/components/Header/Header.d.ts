import React from 'react';
import { IFontsProps } from '../../models/fonts';
import { IColorsProps } from '../../models/colors';
import { IDimensionsProps } from '../../models/dimensions';
export interface IHeaderProps extends IFontsProps, IColorsProps, IDimensionsProps {
    headerText?: string;
    logoSvg: string;
    marginRight?: string;
}
export declare const Header: React.FC<IHeaderProps>;
