import { ProgressHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { IFontsProps } from 'models/fonts'
import { CommonFontsStyles } from 'styles/CommonFonts.styles'
import { TextAlignment } from 'constants/rootConstants'
import { IProgressBarBreadcrumbsProps } from 'components/ProgressBarBreadcrumbs/ProgressBarBreadcrumbs'
import { CommonColorsStyles } from 'styles/CommonColors.styles'

interface IProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  pointsNumber: number
  color?: string
  background?: string
}

type TStepNumberProps = {
  isActive: boolean
  isPassed?: boolean
}

const progressValueStyles = css`
  background-color: currentColor;
  transition: all 0.2s ease-out;
`

export const StyledPostPaymentProgressBar = {
  Wrapper: styled.div`
    margin: 50px auto 20px;
    display: flex;
    justify-content: center;
  `,
  StepBlock: styled.div`
    position: relative;
    display: flex;
    align-items: center;
  `,
  StepBlockProgress: styled.progress<
    IProps & Partial<IProgressBarBreadcrumbsProps>
  >`
    overflow: hidden;
    max-width: ${({ pointsNumber }) =>
      `${(280 - 16 * (pointsNumber + 1)) / pointsNumber}px`};
    height: 4px;
    appearance: none;
    border: none;
    display: block;

    &::-moz-progress-bar {
      ${progressValueStyles}
    }

    &::-ms-fill {
      ${progressValueStyles}
    }

    &::-webkit-progress-bar {
      background: #eceaf4;
    }

    &::-webkit-progress-value {
      background: ${({ progressStepBackground }) => progressStepBackground};
    }

    @media (min-width: 321px) {
      max-width: ${({ pointsNumber }) =>
        `${(320 - 16 * (pointsNumber + 1)) / pointsNumber - 5}px`};
    }
  `,
  Step: styled.div<TStepNumberProps & Partial<IProgressBarBreadcrumbsProps>>`
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: background 0.2s linear;
    ${CommonColorsStyles}

    ${({ isActive, activeColor, activeBackground, activeBoxShadow }) =>
      isActive &&
      `
          box-shadow: ${activeBoxShadow};
          background: ${activeBackground};
          color: ${activeColor}
        `}

    ${({ isPassed, progressCheckImg, passedColor }) =>
      isPassed &&
      `
          background: url(${progressCheckImg}) center center no-repeat;
          background-size: contain;
          color: ${passedColor}
        `}
  `,
  StepText: styled.span<IFontsProps & { textAlign: string }>`
    position: absolute;
    bottom: 20px;
    left: 50%;
    min-width: 50px;
    transform: translateX(-50%);
    ${CommonFontsStyles};
    text-align: ${({ textAlign }) => textAlign || TextAlignment.CENTER};

    @media (min-width: 321px) {
      font-size: 11px;
    }
  `,
}
