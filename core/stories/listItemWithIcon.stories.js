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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import checkIcon from 'assets/images/check-icon-pink.svg';
import { ListItemWithIcon } from 'components/ListItemWithIcon';
import { COMMON_STYLES_CONTROLS } from 'constants/controls';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/ListItemWithIcon',
    component: ListItemWithIcon,
    argTypes: COMMON_STYLES_CONTROLS,
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return (_jsxs(_Fragment, { children: [_jsx(ListItemWithIcon, __assign({}, args)), _jsx(ListItemWithIcon, __assign({}, args))] })); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
Regular.args = {
    children: (_jsx("span", { children: "Short yet effective workouts. Just 5 minutes a day to burn fat quickly" })),
    maxWidth: '320px',
    padding: '0 0 0 34px',
    margin: '0 0 20px 0',
    color: '#2d3240',
    lineHeight: '20px',
    iconWidth: 24,
    iconHeight: 24,
    iconSrc: checkIcon,
};
