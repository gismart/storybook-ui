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
import { Answer } from 'components/Answer';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Answer',
    component: Answer,
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
        }, activeBorder: {
            control: 'text',
            table: {
                category: ControlsCategories.SIZES,
            },
        } }),
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return _jsx(Answer, __assign({}, args)); };
// 👇 Each story then reuses that template
export var SimpleLuvly = Template.bind({});
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
};
export var ComplexLuvly = Template.bind({});
ComplexLuvly.args = {
    children: _jsx(ComplexAnswerContent, {}),
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
};
export var SimpleDanceBit = Template.bind({});
SimpleDanceBit.args = {
    children: 'Answer',
    type: 'checkbox',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: 'rgb(245, 246, 247)',
    color: 'rgb(19, 29, 48);',
    fontSize: '16px',
    fontWeight: 'regular',
    borderRadius: '16px',
    padding: '0 15px',
    value: 'User answer',
    activeBackgroundColor: 'rgb(3, 170, 245)',
};
export var SimpleLuvlyGirlish = Template.bind({});
SimpleLuvlyGirlish.args = {
    children: '18-29',
    type: 'radio',
    boxShadow: '0px 8px 20px #F2E6E1',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#D0DDD7',
    activeColor: '#2C3131',
    color: '#2C3131',
    fontSize: '18px',
    lineHeight: '24px',
    borderRadius: '20px',
    padding: '0 16px',
    value: 'User answer',
};
export var SimpleBook = Template.bind({});
SimpleBook.args = {
    children: 'Physical activity',
    type: 'radio',
    boxShadow: '0px 8px 20px #E8E8E8',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#83BAB3',
    activeColor: '#FFFFFF',
    color: '#17202A',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    borderRadius: '20px',
    padding: '0 16px',
    value: 'User answer',
};
