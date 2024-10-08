import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import { AnswerWithCheckbox } from 'components/AnswerWithCheckbox'

import checkIconWhite from '../assets/images/check-icon-white.svg'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/AnswerWithCheckbox',
  component: AnswerWithCheckbox,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    textAlign: {
      control: 'select',
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
    checkboxWidth: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxHeight: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxActiveBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBackgroundColor: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBackgroundActiveColor: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconSrc: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconSize: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    reverse: {
      control: 'boolean',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    spacingBetweenCheckboxAndContent: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
  },
} as ComponentMeta<typeof AnswerWithCheckbox>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnswerWithCheckbox> = (args) => (
  <AnswerWithCheckbox {...args} />
)

// 👇 Each story then reuses that template

export const AccountLulvyCheckbox = Template.bind({})
AccountLulvyCheckbox.args = {
  children: (
    <span>
      Get a smaller <br /> waist
    </span>
  ),
  type: 'checkbox',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#f2f3f5',
  activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
  color: '#17202a',
  fontSize: '17px',
  fontWeight: '400',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 17px',
  margin: '0 0 16px',
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  checkboxWidth: '22px',
  checkboxHeight: '22px',
  checkboxBorderRadius: '6px',
  checkboxBorder: '1px solid #e9e9e9',
  checkboxBackgroundActiveColor: '#ff8276',
  reverse: true,
  activeColor: '#17202a',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #ff8276',
  iconSrc: checkIconWhite,
  checkboxActiveBorder: '1px solid transparent',
}
export const DancebitCheckbox = Template.bind({})
DancebitCheckbox.args = {
  children: (
    <span>
      Get a smaller <br /> waist
    </span>
  ),
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '218px',
  height: '80px',
  backgroundColor: '#F5F6F7',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '6px',
  padding: '0 16px',
  value: 'lose_belly_fat',
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  checkboxWidth: '24px',
  checkboxHeight: '24px',
  checkboxBorderRadius: '8px',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBackgroundActiveColor: '#03AAF5',
  reverse: true,
  activeBackgroundColor: '#EAF7FF',
  activeColor: '#17202A',
  border: '2px solid transparent',
  iconSrc: checkIconWhite,
  boxShadow: '0 0 0 1px #E9E9E9',
  activeBoxShadow: '0 0 0 2px #03AAF5',
  checkboxActiveBorder: '1px solid transparent',
}

export const AccountDancebitCheckbox = Template.bind({})
AccountDancebitCheckbox.args = {
  children: (
    <span>
      Get a smaller <br /> waist
    </span>
  ),
  type: 'checkbox',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#f2f3f5',
  activeBackgroundColor: '#eaf7ff',
  color: '#17202a',
  fontSize: '17px',
  fontWeight: '400',
  lineHeight: '24px',
  borderRadius: '16px',
  padding: '0 17px',
  margin: '0 0 16px',
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  checkboxWidth: '22px',
  checkboxHeight: '22px',
  checkboxBorderRadius: '6px',
  checkboxBorder: '1px solid #e9e9e9',
  checkboxBackgroundActiveColor: '#03aaf5',
  reverse: true,
  activeColor: '#17202a',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #03aaf5',
  iconSrc: checkIconWhite,
  checkboxActiveBorder: '1px solid transparent',
}

export const NutrimateCheckbox = Template.bind({})
NutrimateCheckbox.args = {
  activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
  activeBorder: '1px solid #a9cd50',
  activeColor: '#2c3131',
  backgroundColor: '#fff',
  border: '1px solid #e9e9e9',
  borderRadius: '16px',
  children: 'Whole body',
  checkboxActiveBorder: '1px solid #a9cd50',
  checkboxBackgroundActiveColor: '#a9cd50',
  checkboxBackgroundColor: '#fff',
  checkboxBorder: '1px solid #E9E9E9',
  checkboxBorderRadius: '8px',
  checkboxHeight: '24px',
  checkboxWidth: '24px',
  color: '#2c3131',
  fontSize: '17px',
  fontWeight: '600',
  height: '80px',
  iconSrc: checkIconWhite,
  isFullWidth: true,
  lineHeight: '24px',
  maxWidth: '343px',
  padding: '0 16px',
  reverse: true,
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  value: 'whole_body',
  type: 'checkbox',
}

export const AccountNutrimateCheckbox = Template.bind({})
AccountNutrimateCheckbox.args = {
  children: (
    <span>
      Get a smaller <br /> waist
    </span>
  ),
  type: 'checkbox',
  isFullWidth: true,
  height: '80px',
  backgroundColor: '#fff',
  activeBackgroundColor: 'rgba(169, 205, 80, 0.20)',
  color: '#2c3131',
  fontSize: '17px',
  fontWeight: '600',
  lineHeight: '24px',
  borderRadius: '48px',
  padding: '0 17px',
  margin: '0 0 16px',
  spacingBetweenCheckboxAndContent: '0 0 0 16px',
  checkboxWidth: '22px',
  checkboxHeight: '22px',
  checkboxBorderRadius: '6px',
  checkboxBorder: '1px solid #e9e9e9',
  checkboxBackgroundActiveColor: '#a9cd50',
  reverse: false,
  activeColor: '#2c3131',
  border: '1px solid #e9e9e9',
  activeBorder: '1px solid #a9cd50',
  iconSrc: checkIconWhite,
  checkboxActiveBorder: '1px solid transparent',
}

export const FitmeCheckbox = Template.bind({})
FitmeCheckbox.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: '600',
  color: '#17202A',
  activeColor: '#17202A',
  padding: '0 16px',
  reverse: true,
  backgroundColor: '#fff',
  activeBackgroundColor: '#F0ECFF',
  border: '2px solid transparent',
  activeBorder: '2px solid #8378EF',
  borderRadius: '16px',
  boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03);',
  activeBoxShadow: 'none',
  iconSrc:
    'https://cdn-prod-unified-content.gismart.xyz/95a0f4aac157ae778464868301bbc89a757bbd8234362ef568be31e6d6bf9e38/check-icon-white.webp',
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  checkboxBorder: '1px solid #CACACA',
  checkboxBorderRadius: '50%',
  checkboxActiveBorder: 'none',
  checkboxBackgroundColor: '#fff',
  checkboxBackgroundActiveColor: '#8378EF',
  checkboxHeight: '24px',
  checkboxWidth: '24px',
  value: 'diet',
  type: 'checkbox',
  children: 'Diets & food restrictions',
}

export const CardimateCheckbox = Template.bind({})
CardimateCheckbox.args = {
  height: '80px',
  isFullWidth: true,
  maxWidth: '343px',
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: '700',
  color: '#2C3131',
  activeColor: '#2C3131',
  padding: '0 16px',
  reverse: true,
  backgroundColor: '#F2F3F5',
  activeBackgroundColor: 'rgba(53, 179, 229, 0.12)',
  border: '1px solid #E9E9E9',
  activeBorder: '1px solid #35B3E5',
  borderRadius: '16px',
  iconSrc: checkIconWhite,
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBorderRadius: '6px',
  checkboxActiveBorder: '1.5px solid transparent',
  checkboxBackgroundColor: '#F2F3F5',
  checkboxBackgroundActiveColor: '#35B3E5',
  checkboxHeight: '21px',
  checkboxWidth: '21px',
  value: 'heart_attack',
  type: 'checkbox',
  children: 'Heart attack prevention',
}
