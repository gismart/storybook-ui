var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles';
export var StyledInputWithFloatPlaceholder = {
    Wrapper: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    position: relative;\n    display: block;\n    margin-bottom: ", ";\n  "], ["\n    ", ";\n    position: relative;\n    display: block;\n    margin-bottom: ", ";\n  "])), CommonDimensionsStyles, function (_a) {
        var marginBottom = _a.marginBottom;
        return "".concat(marginBottom, "px");
    }),
    Input: styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n    ", ";\n    ", ";\n    width: 100%;\n    border: none;\n    outline: none;\n    transition: border 0.2s ease-out;\n\n    &:valid,\n    &:focus {\n      & + span {\n        top: 20px;\n        color: ", ";\n        font-size: ", ";\n        line-height: 1;\n      }\n    }\n\n    &:focus {\n      border-color: ", ";\n    }\n  "], ["\n    display: block;\n    ", ";\n    ", ";\n    width: 100%;\n    border: none;\n    outline: none;\n    transition: border 0.2s ease-out;\n\n    &:valid,\n    &:focus {\n      & + span {\n        top: 20px;\n        color: ", ";\n        font-size: ", ";\n        line-height: 1;\n      }\n    }\n\n    &:focus {\n      border-color: ", ";\n    }\n  "])), CommonColorsStyles, CommonFontsStyles, function (_a) {
        var focusedLabelColor = _a.focusedLabelColor;
        return focusedLabelColor || '#000';
    }, function (_a) {
        var focusedLabelFontSize = _a.focusedLabelFontSize;
        return focusedLabelFontSize || '13px';
    }, function (_a) {
        var focusedBorderColor = _a.focusedBorderColor;
        return focusedBorderColor || '#ff9a90';
    }),
    Label: styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    top: ", ";\n    transform: translateY(-50%);\n    left: ", ";\n    color: ", ";\n    font-size: ", ";\n    transition-property: top, color, font-size, line-height;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n    pointer-events: none;\n    cursor: text;\n  "], ["\n    position: absolute;\n    top: ", ";\n    transform: translateY(-50%);\n    left: ", ";\n    color: ", ";\n    font-size: ", ";\n    transition-property: top, color, font-size, line-height;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n    pointer-events: none;\n    cursor: text;\n  "])), function (_a) {
        var hasValue = _a.hasValue;
        return (hasValue ? '20px' : '50%');
    }, function (_a) {
        var leftLabelPosition = _a.leftLabelPosition;
        return leftLabelPosition || '16px';
    }, function (_a) {
        var labelColor = _a.labelColor;
        return labelColor || '#81848c';
    }, function (_a) {
        var labelFontSize = _a.labelFontSize;
        return labelFontSize || '16px';
    }),
    Icon: styled.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n  "], ["\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n  "]))),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
