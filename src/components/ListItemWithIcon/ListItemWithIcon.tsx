import React from 'react'
import { IFontsProps } from 'models/fonts'
import { IColorsProps } from 'models/colors'
import { IDimensionsProps } from 'models/dimensions'
import { StyledListItemWithIcon } from './ListItemWithIcon.styles'

export interface IListItemWithIconProps
  extends IFontsProps,
    IColorsProps,
    IDimensionsProps {
  children?: React.ReactNode
  /**
   * Set icon src
   */
  iconSrc: string
  /**
   * Set icon width
   */
  iconWidth?: number
  /**
   * Set icon height
   */
  iconHeight?: number
}

export const ListItemWithIcon: React.FC<IListItemWithIconProps> = ({
  children,
  ...props
}) => {
  return <StyledListItemWithIcon {...props}>{children}</StyledListItemWithIcon>
}
