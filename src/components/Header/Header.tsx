import React from 'react'

import { IFontsProps } from '../../models/fonts'
import { IColorsProps } from '../../models/colors'
import { IDimensionsProps } from '../../models/dimensions'
import { StyledHeader as S } from './Header.styles'

export interface IHeaderProps
  extends IFontsProps,
    IColorsProps,
    IDimensionsProps {
  headerText?: string
  logoSvg: string
  marginRight?: string
}

export const Header: React.FC<IHeaderProps> = ({
  headerText,
  logoSvg,
  ...props
}) => (
  <S.Wrapper logoSvg={logoSvg} {...props}>
    <S.Logo>
      <img src={logoSvg} alt="logo" />
      {headerText && <span>{headerText}</span>}
    </S.Logo>
  </S.Wrapper>
)
