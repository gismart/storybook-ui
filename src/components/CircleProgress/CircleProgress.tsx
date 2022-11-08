import React from 'react'
import { IFontsProps } from 'models/fonts'
import { StyledCircleProgress as S } from './CircleProgress.styles'

export interface IContainerProps {
  /**
   * Define element height
   */
  height: string
  /**
   * Set element margin
   */
  margin: string
}

export interface IProgressValueProps extends IFontsProps {
  /**
   * Set percentage font size
   */
  percentageFontSize: string
  /**
   * Set percentage font weight
   */
  percentageFontWeight: string
  /**
   * What text color to use
   */
  color?: string
}

export interface ISvgProps {
  /**
   * Progress bar value
   */
  value: number
  /**
   * Set stroke color of empty circle
   */
  strokeColorEmpty: string
  /**
   * Set stroke color of filled circle
   */
  strokeColorFilled: string
  /**
   * Set circle radius
   */
  radius?: number
}

export interface ICircleProgressProps
  extends IContainerProps,
    ISvgProps,
    IProgressValueProps {}

export const CircleProgress: React.FC<ICircleProgressProps> = ({
  value,
  height,
  margin,
  strokeColorEmpty,
  strokeColorFilled,
  radius,
  fontSize,
  fontWeight,
  color,
  percentageFontSize,
  percentageFontWeight,
}) => (
  <S.Container height={height} margin={margin}>
    <S.Svg
      viewBox="0 0 100 100"
      value={value}
      strokeColorEmpty={strokeColorEmpty}
      strokeColorFilled={strokeColorFilled}
      radius={radius}
    >
      <circle r="45" cx="50" cy="50" />
      <circle r="45" cx="50" cy="50" />
    </S.Svg>
    <S.Label
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      percentageFontSize={percentageFontSize}
      percentageFontWeight={percentageFontWeight}
    >
      {value}
      <strong>%</strong>
    </S.Label>
  </S.Container>
)
