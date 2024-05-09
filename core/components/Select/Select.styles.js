var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled from 'styled-components';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
export var customSelectStyles = function (_a) {
    var focusedOptionBorder = _a.focusedOptionBorder, optionBoxShadow = _a.optionBoxShadow, openedBackgroundColor = _a.openedBackgroundColor, closedBackgroundColor = _a.closedBackgroundColor, fontSize = _a.fontSize, fontWeight = _a.fontWeight, minHeight = _a.minHeight, menuPadding = _a.menuPadding, borderRadius = _a.borderRadius, border = _a.border;
    return ({
        menu: function () { return ({
            border: focusedOptionBorder,
            borderRadius: borderRadius || '10px',
            padding: '7px 0',
            marginTop: '8px',
        }); },
        control: function (_, state) { return ({
            // none of react-select's styles are passed to <Control />
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: state.selectProps.menuIsOpen
                ? focusedOptionBorder
                : border || '1px solid transparent',
            borderRadius: borderRadius || '10px',
            padding: menuPadding,
            minHeight: minHeight,
            backgroundColor: state.selectProps.menuIsOpen
                ? openedBackgroundColor
                : closedBackgroundColor,
            boxShadow: state.selectProps.menuIsOpen ? 'none' : optionBoxShadow,
        }); },
        valueContainer: function (provided) { return (__assign(__assign({}, provided), { margin: 0, padding: 0, overflow: 'visible', position: 'relative', alignSelf: 'flex-end', fontWeight: fontWeight, fontSize: fontSize })); },
        multiValue: function (provided) { return (__assign(__assign({}, provided), { margin: 0, padding: 0, backgroundColor: 'transparent', marginRight: 5 })); },
        multiValueRemove: function () { return ({
            display: 'none',
        }); },
        indicatorsContainer: function (provided) { return (__assign(__assign({}, provided), { marginTop: '-16px' })); },
        dropdownIndicator: function (provided, state) { return (__assign(__assign({}, provided), { color: '#17202a', padding: 0, transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)' })); },
        indicatorSeparator: function () { return ({
            display: 'none',
        }); },
        input: function (provided) { return (__assign(__assign({}, provided), { display: 'none' })); },
        singleValue: function (provided) { return (__assign(__assign({}, provided), { margin: 0, padding: 0 })); },
    });
};
export var StyledSelect = {
    Root: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n  "], ["\n    position: relative;\n  "]))),
    Option: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n    display: flex;\n    align-items: center;\n    min-height: ", ";\n    height: ", ";\n    padding: ", ";\n    min-height: ", ";\n    cursor: pointer;\n    position: relative;\n    border-bottom: 1px solid #dadadd;\n\n    &:last-child {\n      border-bottom: 0;\n    }\n  "], ["\n    ", ";\n    display: flex;\n    align-items: center;\n    min-height: ", ";\n    height: ", ";\n    padding: ", ";\n    min-height: ", ";\n    cursor: pointer;\n    position: relative;\n    border-bottom: 1px solid #dadadd;\n\n    &:last-child {\n      border-bottom: 0;\n    }\n  "])), CommonColorsStyles, function (_a) {
        var minHeight = _a.minHeight;
        return minHeight || '0';
    }, function (_a) {
        var height = _a.height;
        return height || 'auto';
    }, function (_a) {
        var padding = _a.padding;
        return padding || 0;
    }, function (_a) {
        var optionMinHeight = _a.optionMinHeight;
        return optionMinHeight || '40px';
    }),
    SelectedIcon: styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 20px;\n    height: 20px;\n    background: ", ";\n    background-size: contain;\n    position: absolute;\n    right: 21px;\n    top: calc(50% - 10px);\n  "], ["\n    width: 20px;\n    height: 20px;\n    background: ", ";\n    background-size: contain;\n    position: absolute;\n    right: 21px;\n    top: calc(50% - 10px);\n  "])), function (_a) {
        var selectedIcon = _a.selectedIcon;
        return "url(".concat(selectedIcon, ") no-repeat center");
    }),
    CircleMarkIcon: styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    border: 1px solid #555965;\n    border-radius: 50%;\n    position: absolute;\n    top: calc(50% - 10px);\n    right: 20px;\n  "], ["\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    border: 1px solid #555965;\n    border-radius: 50%;\n    position: absolute;\n    top: calc(50% - 10px);\n    right: 20px;\n  "]))),
    MultiValue: styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", ";\n    margin-right: 4px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  "], ["\n    ", ";\n    margin-right: 4px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  "])), CommonFontsStyles),
    Placeholder: styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n    position: absolute;\n    z-index: 1;\n    top: 6px;\n    left: 21px;\n    pointer-events: none;\n  "], ["\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n    position: absolute;\n    z-index: 1;\n    top: 6px;\n    left: 21px;\n    pointer-events: none;\n  "])), function (_a) {
        var placeholderFontWeight = _a.placeholderFontWeight;
        return placeholderFontWeight || 400;
    }, function (_a) {
        var placeholderFontSize = _a.placeholderFontSize;
        return placeholderFontSize || '13px';
    }, function (_a) {
        var placeholderLineHeight = _a.placeholderLineHeight;
        return placeholderLineHeight || '15px';
    }, function (_a) {
        var placeholderColor = _a.placeholderColor;
        return placeholderColor || '#2d3240';
    }),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
