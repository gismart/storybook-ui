var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
export var StyledInput = {
    Wrapper: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: block;\n    width: ", ";\n\n    &::after {\n      display: block;\n      position: absolute;\n      left: 16px;\n      color: ", ";\n      font-size: ", ";\n      line-height: ", ";\n    }\n\n    &[data-valid='false'] {\n      &::after {\n        content: attr(data-validation-text);\n      }\n    }\n  "], ["\n    position: relative;\n    display: block;\n    width: ", ";\n\n    &::after {\n      display: block;\n      position: absolute;\n      left: 16px;\n      color: ", ";\n      font-size: ", ";\n      line-height: ", ";\n    }\n\n    &[data-valid='false'] {\n      &::after {\n        content: attr(data-validation-text);\n      }\n    }\n  "])), function (_a) {
        var width = _a.width;
        return width || '100%';
    }, function (_a) {
        var validationTextColor = _a.validationTextColor;
        return validationTextColor || '#f37264';
    }, function (_a) {
        var validationTextSize = _a.validationTextSize;
        return validationTextSize || '13px';
    }, function (_a) {
        var validationTextLineHeight = _a.validationTextLineHeight;
        return validationTextLineHeight || '20px';
    }),
    Input: styled.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: block;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    outline: none;\n    transition: border 0.2s ease-out;\n\n    &:focus {\n      border-color: ", ";\n    }\n\n    &:valid,\n    &:focus {\n      & + span {\n        top: 10px;\n        color: ", ";\n        font-size: ", ";\n        line-height: 1;\n      }\n    }\n\n    &[type='number'] {\n      /* Hide arrows */\n      -moz-appearance: textfield;\n\n      &::-webkit-outer-spin-button,\n      &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n\n    &::placeholder {\n      font-weight: 500;\n      line-height: 20px;\n      color: rgba(19, 29, 48, 0.5);\n    }\n  "], ["\n    display: block;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    outline: none;\n    transition: border 0.2s ease-out;\n\n    &:focus {\n      border-color: ", ";\n    }\n\n    &:valid,\n    &:focus {\n      & + span {\n        top: 10px;\n        color: ", ";\n        font-size: ", ";\n        line-height: 1;\n      }\n    }\n\n    &[type='number'] {\n      /* Hide arrows */\n      -moz-appearance: textfield;\n\n      &::-webkit-outer-spin-button,\n      &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n\n    &::placeholder {\n      font-weight: 500;\n      line-height: 20px;\n      color: rgba(19, 29, 48, 0.5);\n    }\n  "])), CommonDimensionsStyles, CommonFontsStyles, CommonColorsStyles, function (_a) {
        var label = _a.label;
        return label && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        padding-top: 32px;\n      "], ["\n        padding-top: 32px;\n      "])));
    }, function (_a) {
        var hasVisibilityControl = _a.hasVisibilityControl;
        return hasVisibilityControl && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        padding-right: 52px;\n      "], ["\n        padding-right: 52px;\n      "])));
    }, function (_a) {
        var isContentCentered = _a.isContentCentered;
        return isContentCentered && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        text-align: center;\n      "], ["\n        text-align: center;\n      "])));
    }, function (_a) {
        var focusedBorderColor = _a.focusedBorderColor;
        return focusedBorderColor || '#ff9a90';
    }, function (_a) {
        var focusedLabelColor = _a.focusedLabelColor;
        return focusedLabelColor || '#000';
    }, function (_a) {
        var focusedLabelFontSize = _a.focusedLabelFontSize;
        return focusedLabelFontSize || '13px';
    }),
    Label: styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    top: 20px;\n    left: ", ";\n    color: ", ";\n    font-size: ", ";\n    transition-property: top, color, font-size, line-height;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n    pointer-events: none;\n    cursor: text;\n  "], ["\n    position: absolute;\n    top: 20px;\n    left: ", ";\n    color: ", ";\n    font-size: ", ";\n    transition-property: top, color, font-size, line-height;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n    pointer-events: none;\n    cursor: text;\n  "])), function (_a) {
        var leftLabelPosition = _a.leftLabelPosition;
        return leftLabelPosition || '16px';
    }, function (_a) {
        var labelColor = _a.labelColor;
        return labelColor || '#81848c';
    }, function (_a) {
        var labelFontSize = _a.labelFontSize;
        return labelFontSize || '16px';
    }),
    VisibilityButton: styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding: 0;\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 52px;\n    height: 60px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-size: 20px 20px;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: center;\n  "], ["\n    padding: 0;\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 52px;\n    height: 60px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-size: 20px 20px;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: center;\n  "]))),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
