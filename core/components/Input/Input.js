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
import { useCallback, useMemo, useState, } from 'react';
import { StyledInput as S } from './Input.styles';
export var NumericKeypadRegex = /([0-9]{1}|Backspace|Enter)/;
export var NumericKeypadFloatRegex = /([0-9.,]{1}|Backspace|Enter)/;
export var Input = function (_a) {
    var label = _a.label, _b = _a.hasVisibilityControl, hasVisibilityControl = _b === void 0 ? false : _b, _c = _a.isValid, isValid = _c === void 0 ? true : _c, _d = _a.validationText, validationText = _d === void 0 ? '' : _d, inputRef = _a.inputRef, className = _a.className, type = _a.type, _e = _a.allowFloatNumbers, allowFloatNumbers = _e === void 0 ? true : _e, _f = _a.maxLength, maxLength = _f === void 0 ? 30 : _f, _g = _a.isContentCentered, isContentCentered = _g === void 0 ? false : _g, props = __rest(_a, ["label", "hasVisibilityControl", "isValid", "validationText", "inputRef", "className", "type", "allowFloatNumbers", "maxLength", "isContentCentered"]);
    var _h = useState(false), isVisible = _h[0], setIsVisible = _h[1];
    var inputType = useMemo(function () {
        if (!hasVisibilityControl)
            return type;
        return isVisible ? 'text' : 'password';
    }, [hasVisibilityControl, isVisible, type]);
    var handleNumberKeyDown = useCallback(function (event) {
        if (!(allowFloatNumbers ? NumericKeypadFloatRegex : NumericKeypadRegex).test(event.key)) {
            event.preventDefault();
        }
    }, [allowFloatNumbers]);
    return (_jsxs(S.Wrapper, __assign({ "data-valid": isValid, "data-validation-text": validationText }, props, { children: [_jsx(S.Input, __assign({ className: className, hasVisibilityControl: hasVisibilityControl, isContentCentered: isContentCentered, required: true, type: inputType, ref: inputRef, spellCheck: false, maxLength: maxLength, onKeyDown: inputType === 'number' ? handleNumberKeyDown : undefined }, props)), label && _jsx(S.Label, __assign({}, props, { children: label })), hasVisibilityControl && (_jsx(S.VisibilityButton, { type: "button", onClick: function () { return setIsVisible(function (prevValue) { return !prevValue; }); }, "data-visible": isVisible }))] })));
};
