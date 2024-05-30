import React from 'react'

import { IThemedComponent } from '../../models/common'
import { IAnswerButtonProps } from '../../models/answer'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'
import { StyledAnswerWithIcon as S } from './AnswerWithIcon.styles'

export interface IAnswerWithIconContentProps {
  spacingBetweenIconAndContent?: string
}

export interface IAnswerWithIconProps
  extends IAnswerButtonProps,
    IAnswerWithIconContentProps {
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
   * Define vertical alignment for icon
   */
  iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
}

export const enum answerWithIconTheme {
  DANCEBIT = 'dancebit',
}

const answerWithIconThemes: Record<string, Record<string, string | boolean>> = {
  dancebit: {
    type: 'radio',
    isFullWidth: true,
    height: '100px',
    backgroundColor: '#F5F6F7',
    activeBackgroundColor: '#EAF7FF',
    boxShadow: '0 0 0 1px#E9E9E9',
    color: '#2C3131',
    activeColor: '#2C3131',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    contentHorizontalAlign: 'flex-start',
    padding: '0 16px 0 8px',
    iconHeight: '100px',
    spacingBetweenIconAndContent: '16px',
    iconAlignSelf: 'flex-end',
    activeBoxShadow: ' 0 0 0 2px #03AAF5',
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
