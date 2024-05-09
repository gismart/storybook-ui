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
import { useMemo } from 'react';
import { StyledOption as S } from './Option.styles';
export var Option = function (_a) {
    var type = _a.type, value = _a.value, children = _a.children, name = _a.name, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, rest = __rest(_a, ["type", "value", "children", "name", "checked", "disabled", "onChange"]);
    var inputProps = useMemo(function () {
        var props = {
            value: value,
            type: type,
            onChange: function (_a) {
                var target = _a.target;
                return onChange && onChange(target.value, target.checked);
            },
        };
        if (name) {
            props.name = name;
        }
        if (checked !== undefined) {
            props.checked = checked;
        }
        return props;
    }, [checked, name, onChange, type, value]);
    return (_jsxs(S.OptionContainer, __assign({}, rest, { children: [_jsx("input", __assign({ disabled: disabled }, inputProps)), children] })));
};
