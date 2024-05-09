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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledInputWithFloatPlaceholder as S } from './InputWithFloatPlaceholder.styles';
export var InputWithFloatPlaceholder = function (_a) {
    var value = _a.value, label = _a.label, _b = _a.isValid, isValid = _b === void 0 ? true : _b, _c = _a.validationText, validationText = _c === void 0 ? '' : _c, _d = _a.type, type = _d === void 0 ? 'text' : _d, iconSrc = _a.iconSrc, _e = _a.marginBottom, marginBottom = _e === void 0 ? 0 : _e, _f = _a.height, height = _f === void 0 ? '60px' : _f, _g = _a.hasValidationIcon, hasValidationIcon = _g === void 0 ? false : _g, checkIconSvg = _a.checkIconSvg, crossIconSvg = _a.crossIconSvg, props = __rest(_a, ["value", "label", "isValid", "validationText", "type", "iconSrc", "marginBottom", "height", "hasValidationIcon", "checkIconSvg", "crossIconSvg"]);
    return (_jsxs(S.Wrapper, __assign({ "data-valid": isValid, "data-validation-text": validationText, marginBottom: marginBottom }, props, { children: [_jsx(S.Input, __assign({ required: true, type: type, height: height, value: value }, props)), _jsx(S.Label, __assign({ hasValue: !!value }, { children: label })), hasValidationIcon && (_jsxs(_Fragment, { children: [value && isValid && _jsx(S.Icon, { src: checkIconSvg, alt: "check-icon" }), value && !isValid && _jsx(S.Icon, { src: crossIconSvg, alt: "cross-icon" })] })), iconSrc && _jsx(S.Icon, { src: iconSrc, alt: "input-icon" })] })));
};
