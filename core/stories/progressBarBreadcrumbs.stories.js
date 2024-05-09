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
import { ProgressBarBreadcrumbs } from 'components/ProgressBarBreadcrumbs';
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
};
// 👇 We create a “template” of how args map to rendering
var Template = function (args) { return (_jsx(ProgressBarBreadcrumbs, __assign({}, args))); };
var renderStep = function (text) { return _jsx("div", { children: text }); };
// 👇 Each story then reuses that template
export var Regular = Template.bind({});
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
    progressCheckImg: 'https://face-yoga-ws.gidev.xyz/50e183cafee3dc65b2325b9c5e7109fb.svg',
    activeBoxShadow: 'inset 0px 0px 0px 2px #ff8276',
    backgroundColor: '#eceaf4',
    activeBackground: '#f7f8f9',
    progressStepBackground: 'rgb(255, 130, 118)',
    color: '#81848c',
    activeColor: '#2d3240',
    passedColor: 'rgb(255, 130, 118)',
    stepRender: renderStep,
};
