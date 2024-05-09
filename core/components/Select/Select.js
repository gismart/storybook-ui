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
import { useRef } from 'react';
import ReactSelect from 'react-select';
import { StyledSelect as S, customSelectStyles } from './Select.styles';
export var Select = function (_a) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? '' : _b, _c = _a.options, options = _c === void 0 ? [] : _c, selectedIcon = _a.selectedIcon, _d = _a.isMultiSelect, isMultiSelect = _d === void 0 ? false : _d, defaultValue = _a.defaultValue, onBlur = _a.onBlur, onChange = _a.onChange, props = __rest(_a, ["placeholder", "options", "selectedIcon", "isMultiSelect", "defaultValue", "onBlur", "onChange"]);
    var rootRef = useRef(null);
    var handleBlur = function (event) {
        onBlur && onBlur(event);
    };
    var handleChange = function (event) {
        onChange && onChange(event);
    };
    var CustomOption = function (_a) {
        var innerProps = _a.innerProps, isDisabled = _a.isDisabled, innerRef = _a.innerRef, isSelected = _a.isSelected, isMulti = _a.isMulti, children = _a.children;
        return !isDisabled ? (_jsxs(S.Option, __assign({}, innerProps, props, { ref: innerRef }, { children: [children, isSelected && _jsx(S.SelectedIcon, { selectedIcon: selectedIcon }), isMulti && !isSelected && _jsx(S.CircleMarkIcon, {})] }))) : null;
    };
    var MultiValueContainer = function (_a) {
        var selectProps = _a.selectProps, data = _a.data;
        var values = selectProps.value;
        if (values) {
            return values[values.length - 1].label === data.label ? (data.label) : (_jsxs(S.MultiValue, __assign({}, props, { children: ["".concat(data.label, ","), " "] })));
        }
        return '';
    };
    var handleMenuOpen = function () {
        setTimeout(function () {
            if (rootRef.current) {
                rootRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'end',
                });
            }
        }, 0);
    };
    return (_jsxs(S.Root, __assign({ ref: rootRef }, { children: [_jsx(S.Placeholder, __assign({}, props, { children: placeholder })), _jsx(ReactSelect, __assign({ defaultValue: defaultValue, isMulti: isMultiSelect, options: options, hideSelectedOptions: false, styles: customSelectStyles(__assign({}, props)), isClearable: false, isSearchable: false, onBlur: handleBlur, closeMenuOnSelect: !isMultiSelect, blurInputOnSelect: !isMultiSelect, onChange: handleChange, placeholder: "", onMenuOpen: handleMenuOpen, components: {
                    Option: CustomOption,
                    MultiValueContainer: MultiValueContainer,
                } }, props))] })));
};
