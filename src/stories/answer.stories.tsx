import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import { Answer } from 'components/Answer'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Answer',
  component: Answer,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    textAlign: {
      control: false,
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    contentHorizontalAlign: {
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    activeBackgroundColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    activeColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    activeBackgroundGradientColor: {
      control: 'text',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    checked: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    disabled: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    activeBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.SIZES,
      },
    },
  },
} as ComponentMeta<typeof Answer>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Answer> = (args) => <Answer {...args} />

// 👇 Each story then reuses that template
export const SimpleLuvly = Template.bind({})
SimpleLuvly.args = {
  children: 'Answer',
  type: 'checkbox',
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  height: '64px',
  backgroundColor: '#ffffff',
  activeBackgroundColor: '#ff8276',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  borderRadius: '20px',
  padding: '0 15px',
  value: 'User answer',
}

export const AccountLuvly = Template.bind({})
AccountLuvly.args = {
  children: `It's difficult to stay on track and find motivation to keep going`,
  type: 'checkbox',
  boxShadow: 'none',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#f2f3f5',
  activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #ff8276',
  color: '#17202a',
  activeColor: '#17202a',
  fontSize: '17px',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 17px',
  margin: '0 0 16px',
}

export const LuvlySolid = Template.bind({})
LuvlySolid.args = {
  children: `Less than a year`,
  type: 'checkbox',
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#fff',
  activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
  border: '2px solid transparent',
  activeBorder: '2px solid #ff8276',
  color: '#17202a',
  activeColor: '#17202a',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: '500',
  borderRadius: '16px',
  padding: '0 16px',
  margin: '0 0 12px',
  maxWidth: '343px',
}

export const SimpleDanceBit = Template.bind({})
SimpleDanceBit.args = {
  children: <span>Less than a year ago</span>,
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '180px',
  height: '80px',
  backgroundColor: 'rgb(245, 246, 247)',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 16px',
  value: 'Less than a year ago',
  activeBackgroundColor: '#EAF7FF',
  boxShadow: '0 0 0 1px #E9E9E9',
  activeBoxShadow: '0 0 0 2px #03AAF5',
  activeColor: '#17202A',
}

export const SimpleJapaneseDanceBit = Template.bind({})
SimpleJapaneseDanceBit.args = {
  children: <span>Less than a year ago</span>,
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '180px',
  height: '80px',
  backgroundColor: '#FFF',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 16px',
  activeBackgroundColor: '#EAF7FF',
  activeColor: '#17202A',
  activeBorder: '3px solid #03AAF5',
  border: '3px solid transparent',
  borderGradientColor:
    'linear-gradient(to right, white, white), linear-gradient(to right, #C6E2FF, #F8DAFB)',
}

export const SimpleDanceBitSexy = Template.bind({})
SimpleDanceBitSexy.args = {
  children: <span>Less than a year ago</span>,
  type: 'checkbox',
  isFullWidth: true,
  height: '80px',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  activeBorder: '2px solid #C61371',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  activeBackgroundColor: 'rgba(188, 25, 110, 0.25)',
  backdropFilter: 'blur(8px)',
  color: '#fff',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  padding: '0 16px',
  activeColor: '#fff',
}

export const AccountDanceBit = Template.bind({})
AccountDanceBit.args = {
  children: 'The challenge is overwhelming and requires too much effort',
  type: 'checkbox',
  boxShadow: 'none',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#f2f3f5',
  activeBackgroundColor: '#eaf7ff',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #03aaf5',
  activeColor: '#17202a',
  color: '#17202a',
  fontSize: '17px',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 17px',
  margin: '0 0 16px',
}

export const SimpleNutrimate = Template.bind({})
SimpleNutrimate.args = {
  activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
  activeBorder: '1px solid #a9cd50',
  activeColor: '#2c3131',
  backgroundColor: '#ffffff',
  border: '1px solid #e9e9e9',
  borderRadius: '48px',
  children: 'Less than a year ago',
  color: '#2c3131',
  fontSize: '17px',
  fontWeight: '600',
  height: '80px',
  isFullWidth: true,
  lineHeight: '24px',
  maxWidth: '343px',
  padding: '0 16px',
  type: 'checkbox',
  value: 'Less than a year ago',
}

export const AccountNutrimate = Template.bind({})
AccountNutrimate.args = {
  children: 'The challenge is overwhelming and requires too much effort',
  type: 'checkbox',
  boxShadow: 'none',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#fff',
  activeBackgroundColor: 'rgba(169, 205, 80, 0.20)',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #a9cd50',
  color: '#2c3131',
  activeColor: '#2c3131',
  fontSize: '17px',
  fontWeight: '600',
  lineHeight: '24px',
  borderRadius: '48px',
  padding: '0 17px',
  margin: '0 0 16px',
}

export const SimpleFitme = Template.bind({})
SimpleFitme.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  fontWeight: '600',
  lineHeight: '24px',
  color: '#17202A',
  activeColor: '#17202A',
  backgroundColor: '#ffffff',
  activeBackgroundColor: '#F0ECFF',
  border: '2px solid transparent',
  activeBorder: '2px solid #8378EF',
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
  activeBoxShadow: 'none',
  borderRadius: '16px',
  padding: '0 16px',
  type: 'checkbox',
  children: 'No, I have never heard about chair yoga',
  value: 'never',
}

export const AccountFitme = Template.bind({})
AccountFitme.args = {
  children: `It's difficult to stay on track and find motivation to keep going`,
  type: 'checkbox',
  boxShadow: 'none',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#f2f3f5',
  activeBackgroundColor: '#F0ECFF',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #8378ef',
  color: '#17202a',
  activeColor: '#17202a',
  fontSize: '17px',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 17px',
  margin: '0 0 16px',
}

export const SimpleCardimate = Template.bind({})
SimpleCardimate.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  color: '#2C3131',
  activeColor: '#2C3131',
  backgroundColor: '#F2F3F5',
  activeBackgroundColor: 'rgba(53, 179, 229, 0.12)',
  border: '1px solid #E9E9E9',
  activeBorder: '1px solid #35B3E5',
  borderRadius: '16px',
  padding: '0 16px',
  type: 'checkbox',
  children: 'Female',
  value: 'female',
}
