import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'
import { ComplexAnswerContent } from 'content/ComplexAnswerContent'

import { AnswerWithIcon } from 'components/AnswerWithIcon'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/AnswerWithIcon',
  component: AnswerWithIcon,
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
    iconSrc: {
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconWidth: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconHeight: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconAlignSelf: {
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    reverse: {
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    spacingBetweenIconAndContent: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    activeBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.SIZES,
      },
    },
  },
} as ComponentMeta<typeof AnswerWithIcon>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnswerWithIcon> = (args) => (
  <AnswerWithIcon {...args} />
)

// 👇 Each story then reuses that template
export const Simple = Template.bind({})
Simple.args = {
  children: 'Answer with big amount of words and letters',
  type: 'checkbox',
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  height: '64px',
  backgroundColor: '#ffffff',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  lineHeight: '22px',
  borderRadius: '20px',
  padding: '0 15px',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}

export const SimpleNutrimate = Template.bind({})
SimpleNutrimate.args = {
  activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
  activeBorder: '1px solid #a9cd50',
  activeColor: '#2c3131',
  backgroundColor: '#ffffff',
  border: '1px solid #e9e9e9',
  borderRadius: '48px',
  children: 'Female',
  color: '#2c3131',
  fontSize: '17px',
  fontWeight: '600',
  height: '80px',
  iconHeight: '24px',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  isFullWidth: true,
  lineHeight: '24px',
  maxWidth: '343px',
  padding: '0 16px',
  spacingBetweenIconAndContent: '16px',
  type: 'checkbox',
  value: 'Female',
}

export const Complex = Template.bind({})
Complex.args = {
  children: <ComplexAnswerContent />,
  type: 'checkbox',
  boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
  isFullWidth: true,
  maxWidth: '320px',
  backgroundColor: '#ffffff',
  color: 'rgb(45, 50, 64)',
  fontSize: '17px',
  lineHeight: '22px',
  borderRadius: '20px',
  padding: '10px 15px',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}

export const DancebitImage = Template.bind({})
DancebitImage.args = {
  children: 'Mid-sized',
  type: 'radio',
  isFullWidth: true,
  maxWidth: '343px',
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
  value: 'mid',
  iconHeight: '100px',
  spacingBetweenIconAndContent: '16px',
  iconSrc: 'https://i.ibb.co/yBpRY8q/mid-size.png',
  iconAlignSelf: 'flex-end',
  activeBoxShadow: ' 0 0 0 2px #03AAF5',
}
export const DancebitImageJapanese = Template.bind({})
DancebitImageJapanese.args = {
  children: 'Mid-sized',
  type: 'radio',
  isFullWidth: true,
  maxWidth: '343px',
  height: '100px',
  backgroundColor: '#FFF',
  activeBackgroundColor: '#EAF7FF',
  boxShadow: 'none',
  color: '#2C3131',
  activeColor: '#2C3131',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '16px',
  contentHorizontalAlign: 'flex-start',
  padding: '0 16px 0 8px',
  value: 'mid',
  iconHeight: '100px',
  spacingBetweenIconAndContent: '16px',
  iconSrc: 'https://i.ibb.co/yBpRY8q/mid-size.png',
  iconAlignSelf: 'flex-end',
  activeBorder: '3px solid #03AAF5',
  border: '3px solid transparent',
  borderGradientColor:
    'linear-gradient(to right, white, white), linear-gradient(to right, #C6E2FF, #F8DAFB)',
}
export const DancebitSexyFlow = Template.bind({})
DancebitSexyFlow.args = {
  type: 'radio',
  isFullWidth: true,
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  color: '#fff',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  padding: '0 16px',
  activeBackgroundColor: 'rgba(188, 25, 110, 0.25)',
  activeColor: '#fff',
  activeBorder: '2px solid #C61371',
  borderRadius: `16px`,
  border: `2px solid transparent`,
  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.25)',
  activeBoxShadow: ' 0 0 0 2px #C61371',
  backdropFilter: `blur(8px)`,
  height: '100px',
  iconHeight: '100px',
  iconMinHeight: '100px',
  iconMinWidth: '100px',
  spacingBetweenIconAndContent: '16px',
  iconAlignSelf: 'flex-end',
}

export const Fitme = Template.bind({})
Fitme.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  fontWeight: '600',
  lineHeight: '24px',
  color: '#17202A',
  activeColor: '#17202A',
  padding: '0 16px',
  backgroundColor: '#fff',
  activeBackgroundColor: '#F0ECFF',
  border: '2px solid transparent',
  activeBorder: '2px solid #8378EF',
  borderRadius: '16px',
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03);',
  activeBoxShadow: 'none',
  iconSrc:
    'https://cdn-prod-unified-content.gismart.xyz/9549c572d41fa1ace57a00b0494242d596edf1b52f29534285e9ae278735f1b2/FitMe+main+senior+flow+%28fitme_senior_3%29/Icons/birthday.png',
  iconHeight: '40px',
  spacingBetweenIconAndContent: '16px',
  children: 'No - just ready to look and feel my best!',
  type: 'checkbox',
  value: 'User answer',
}

export const FitmeDark = Template.bind({})
FitmeDark.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  fontWeight: '600',
  lineHeight: '24px',
  color: '#fff',
  activeColor: '#fff',
  padding: '0 16px',
  backgroundColor: '#3E3C48',
  activeBackgroundColor: '#25214D',
  border: '2px solid transparent',
  activeBorder: '2px solid #8378EF',
  borderRadius: '16px',
  activeBoxShadow: 'none',
  iconSrc:
    'https://cdn-prod-unified-content.gismart.xyz/9549c572d41fa1ace57a00b0494242d596edf1b52f29534285e9ae278735f1b2/FitMe+main+senior+flow+%28fitme_senior_3%29/Icons/birthday.png',
  iconHeight: '40px',
  spacingBetweenIconAndContent: '16px',
  children: 'No - just ready to look and feel my best!',
  type: 'checkbox',
  value: 'User answer',
}

export const LuvlySolid = Template.bind({})
LuvlySolid.args = {
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
  isFullWidth: true,
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03);',
  activeBoxShadow: 'none',
  iconHeight: '40px',
  spacingBetweenIconAndContent: '16px',
  type: 'checkbox',
  children: 'Female',
  value: 'User answer',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
}
