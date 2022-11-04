import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { Header } from 'components/Header'
import logo from 'src/assets/images/logo.svg'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Header',
  component: Header,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    headerText: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Header>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  padding: '13px 0',
  height: '50px',
  margin: '0 auto 15px',
  boxShadow: '0 5px 20px #dfe3f3',
  backgroundColor: '#fff',
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '18px',
  color: '#2d3240',
  logoSvg: logo,
  marginRight: '10px',
  headerText: '',
}
