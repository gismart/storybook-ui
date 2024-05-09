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
import { CircleProgress } from 'components/CircleProgress';
import { ControlsCategories } from 'constants/rootConstants';
// eslint-disable-next-line import/no-default-export
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/CircleProgress',
    component: CircleProgress,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        },
        strokeColorEmpty: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        },
        strokeColorFilled: {
            control: 'color',
            table: {
                category: ControlsCategories.COLORS,
            },
        },
    },
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return (_jsx(CircleProgress, __assign({}, args))); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
Regular.args = {
    value: 50,
};
