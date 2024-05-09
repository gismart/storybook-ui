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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { INITIAL_PROGRESS_VALUE, PROGRESS_SECTION_STEP, } from '../../components/ProgressBarBreadcrumbs/constants';
import { StyledPostPaymentProgressBar as S } from './ProgressBarBreadcrumbs.styles';
export var ProgressBarBreadcrumbs = function (_a) {
    var stepsMap = _a.stepsMap, currentSectionIndex = _a.currentSectionIndex, isLastStepActive = _a.isLastStepActive, lastStepText = _a.lastStepText, stepRender = _a.stepRender, props = __rest(_a, ["stepsMap", "currentSectionIndex", "isLastStepActive", "lastStepText", "stepRender"]);
    return (_jsxs(S.Wrapper, { children: [stepsMap.map(function (_a, index, arr) {
                var _b = _a[0], id = _b.id, text = _b.text;
                var progressValue = currentSectionIndex >= index ? arr.length : INITIAL_PROGRESS_VALUE;
                var nextSectionIndex = currentSectionIndex + PROGRESS_SECTION_STEP;
                return (_jsxs(S.StepBlock, __assign({}, props, { children: [_jsx(S.Step, __assign({ isActive: nextSectionIndex === index, isPassed: currentSectionIndex >= index }, props, { children: _jsx(S.StepText, __assign({}, props, { children: stepRender(text) })) })), _jsx(S.StepBlockProgress, __assign({}, props, { value: progressValue, max: arr.length, pointsNumber: arr.length }))] }), id));
            }), _jsx(S.Step, __assign({ isActive: isLastStepActive }, props, { children: _jsx(S.StepText, __assign({}, props, { children: lastStepText })) }))] }));
};
