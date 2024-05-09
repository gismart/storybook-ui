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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledCircleProgress as S } from './CircleProgress.styles';
export var CircleProgress = function (_a) {
    var value = _a.value, height = _a.height, margin = _a.margin, strokeColorEmpty = _a.strokeColorEmpty, strokeColorFilled = _a.strokeColorFilled, radius = _a.radius, fontSize = _a.fontSize, fontWeight = _a.fontWeight, color = _a.color, percentageFontSize = _a.percentageFontSize, percentageFontWeight = _a.percentageFontWeight;
    return (_jsxs(S.Container, __assign({ height: height, margin: margin }, { children: [_jsxs(S.Svg, __assign({ viewBox: "0 0 100 100", value: value, strokeColorEmpty: strokeColorEmpty, strokeColorFilled: strokeColorFilled, radius: radius }, { children: [_jsx("circle", { r: "45", cx: "50", cy: "50" }), _jsx("circle", { r: "45", cx: "50", cy: "50" })] })), _jsxs(S.Label, __assign({ fontSize: fontSize, fontWeight: fontWeight, color: color, percentageFontSize: percentageFontSize, percentageFontWeight: percentageFontWeight }, { children: [value, _jsx("strong", { children: "%" })] }))] })));
};
