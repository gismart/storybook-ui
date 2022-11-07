import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProgressBarBreadcrumbs } from 'components/ProgressBarBreadcrumbs'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ProgressBarBreadcrumbs',
  component: ProgressBarBreadcrumbs,
  argTypes: {
    ProgressBarBreadcrumbsRef: { control: false },
  },
} as ComponentMeta<typeof ProgressBarBreadcrumbs>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ProgressBarBreadcrumbs> = (args) => (
  <ProgressBarBreadcrumbs {...args} />
)

const renderStep = (text: string) => <div>{text}</div>

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  stepsMap: [
    [{ id: '1', text: 'Buy plan' }],
    [{ id: '2', text: 'Confirm information' }],
    [{ id: '3', text: 'Create Account' }],
  ],
  currentSectionIndex: 1,
  lastStepText: 'Access plan',
  isLastStepActive: false,
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '12px',
  textAlign: 'center',
  progressCheckImg:
    'https://face-yoga-ws.gidev.xyz/50e183cafee3dc65b2325b9c5e7109fb.svg',
  activeBoxShadow: 'inset 0px 0px 0px 2px #ff8276',
  backgroundColor: '#eceaf4',
  activeBackground: '#f7f8f9',
  progressStepBackground: 'rgb(255, 130, 118)',
  color: '#81848c',
  activeColor: '#2d3240',
  passedColor: 'rgb(255, 130, 118)',
  stepRender: renderStep,
}
