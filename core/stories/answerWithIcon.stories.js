var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { COMMON_STYLES_CONTROLS } from 'constants/controls';
import { ControlsCategories } from 'constants/rootConstants';
import { ComplexAnswerContent } from 'content/ComplexAnswerContent';
import { AnswerWithIcon } from 'components/AnswerWithIcon';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/AnswerWithIcon',
    component: AnswerWithIcon,
    argTypes: __assign(__assign({}, COMMON_STYLES_CONTROLS), { textAlign: {
            control: false,
            table: {
                category: ControlsCategories.ALIGNMENT,
            },
        }, contentHorizontalAlign: {
            table: {
                category: ControlsCategories.ALIGNMENT,
            },
        }, activeBackgroundColor: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, activeColor: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, activeBackgroundGradientColor: {
            control: 'text',
            table: {
                category: ControlsCategories.COLORS,
            },
        }, checked: {
            table: {
                category: ControlsCategories.INTERACTION,
            },
        }, disabled: {
            table: {
                category: ControlsCategories.INTERACTION,
            },
        }, iconSrc: {
            table: {
                category: ControlsCategories.ADDON,
            },
        }, iconWidth: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, iconHeight: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, iconAlignSelf: {
            table: {
                category: ControlsCategories.ALIGNMENT,
            },
        }, reverse: {
            table: {
                category: ControlsCategories.ADDON,
            },
        }, spacingBetweenIconAndContent: {
            control: 'text',
            table: {
                category: ControlsCategories.ADDON,
            },
        }, activeBorder: {
            control: 'text',
            table: {
                category: ControlsCategories.SIZES,
            },
        } }),
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return (_jsx(AnswerWithIcon, __assign({}, args))); };
// 👇 Each story then reuses that template
export var Simple = Template.bind({});
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
};
export var Complex = Template.bind({});
Complex.args = {
    children: _jsx(ComplexAnswerContent, {}),
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
};
export var Girlish = Template.bind({});
Girlish.args = {
    children: 'Answer with big',
    type: 'checkbox',
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
    padding: '0 16px',
    value: 'User answer',
    iconHeight: '77px',
    spacingBetweenIconAndContent: '8px',
    iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
    iconAlignSelf: 'flex-end',
};
