import React from 'react'

import { IFontsProps } from '../../models/fonts'
import { IColorsProps } from '../../models/colors'
import { IDimensionsProps } from '../../models/dimensions'
import { IThemedComponent } from '../../models/common'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'
import { StyledAnswerWithIcon as S } from './AnswerWithIcon.styles'

export interface IAnswerWithIconContentProps {
  spacingBetweenIconAndContent?: string
}

export interface IAnswerWithIconProps
  extends IDimensionsProps,
    IFontsProps,
    IColorsProps,
    IAnswerWithIconContentProps {
  children?: React.ReactNode
  /**
   * How content will alignment horizontally
   */
  contentHorizontalAlign?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
  /**
   * What background color to use in active statement
   */
  activeBackgroundColor?: string
  /**
   * What color to use in active statement
   */
  activeColor?: string
  /**
   * What background gradient to use in active statement
   */
  activeBackgroundGradientColor?: string
  /**
   * Icon path
   */
  iconSrc?: string
  /**
   * Icon width
   */
  iconWidth?: string
  /**
   * Icon height
   */
  iconHeight?: string
  /**
   * Should icon render on the left side
   */
  reverse?: boolean
  /**
   * Define border on active element
   */
  activeBorder?: string
  /**
   * Define vertical alignment for icon
   */
  iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
}

const answerWithIconThemes: Record<string, Record<string, string | boolean>> = {
  girlish: {
    boxShadow: '0px 8px 20px #F2E6E1',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#D0DDD7',
    color: '#2C3131',
    activeColor: '#2C3131',
    fontSize: '18px',
    lineHeight: '24px',
    borderRadius: '20px',
    contentHorizontalAlign: 'flex-start',
    margin: '0 0 16px',
    padding: '0 16px',
    iconHeight: '77px',
    spacingBetweenIconAndContent: '8px',
  },
}

const AnswerWithIconBase: React.FC<IAnswerWithIconProps & IOptionProps> = ({
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
  iconSrc,
  iconWidth,
  iconHeight,
  spacingBetweenIconAndContent,
  iconAlignSelf,
  ...props
}) => (
  <Option
    value={value}
    name={name}
    type={type}
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  >
    <S.Root {...props}>
      <S.Icon
        src={iconSrc}
        alt=""
        style={{
          width: iconWidth,
          height: iconHeight,
          alignSelf: iconAlignSelf,
        }}
      />
      <S.Content spacingBetweenIconAndContent={spacingBetweenIconAndContent}>
        <div>{children}</div>
      </S.Content>
    </S.Root>
  </Option>
)

export const AnswerWithIcon: React.FC<
  IAnswerWithIconProps & IOptionProps & IThemedComponent
> = ({ theme, ...props }) => (
  <AnswerWithIconBase {...(theme && answerWithIconThemes[theme])} {...props} />
)
