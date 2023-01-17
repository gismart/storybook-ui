import React from 'react'
import { IColorsProps } from '../../models/colors'
import { IFontsProps } from '../../models/fonts'
import {
  INITIAL_PROGRESS_VALUE,
  PROGRESS_SECTION_STEP,
} from '../../components/ProgressBarBreadcrumbs/constants'
import { StyledPostPaymentProgressBar as S } from './ProgressBarBreadcrumbs.styles'

export interface IProgressBarBreadcrumbsProps
  extends IFontsProps,
    IColorsProps {
  stepsMap: { id: string; text: string }[][]
  currentSectionIndex: number
  lastStepText: string
  isLastStepActive: boolean
  stepRender: (text: string) => React.ReactNode
  textAlign: string
  progressCheckImg: string
  activeColor: string
  activeBackground: string
  activeBoxShadow: string
  progressStepBackground: string
  passedColor: string
}

export const ProgressBarBreadcrumbs: React.FC<IProgressBarBreadcrumbsProps> = ({
  stepsMap,
  currentSectionIndex,
  isLastStepActive,
  lastStepText,
  stepRender,
  ...props
}) => {
  return (
    <S.Wrapper>
      {stepsMap.map(([{ id, text }], index, arr) => {
        const progressValue =
          currentSectionIndex >= index ? arr.length : INITIAL_PROGRESS_VALUE
        const nextSectionIndex = currentSectionIndex + PROGRESS_SECTION_STEP

        return (
          <S.StepBlock key={id} {...props}>
            <S.Step
              isActive={nextSectionIndex === index}
              isPassed={currentSectionIndex >= index}
              {...props}
            >
              <S.StepText {...props}>{stepRender(text)}</S.StepText>
            </S.Step>
            <S.StepBlockProgress
              {...props}
              value={progressValue}
              max={arr.length}
              pointsNumber={arr.length}
            />
          </S.StepBlock>
        )
      })}
      <S.Step isActive={isLastStepActive} {...props}>
        <S.StepText {...props}>{lastStepText}</S.StepText>
      </S.Step>
    </S.Wrapper>
  )
}
