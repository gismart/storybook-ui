var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
import { TextAlignment } from '../../constants/rootConstants';
var progressValueStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: currentColor;\n  transition: all 0.2s ease-out;\n"], ["\n  background-color: currentColor;\n  transition: all 0.2s ease-out;\n"])));
export var StyledPostPaymentProgressBar = {
    Wrapper: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 50px auto 20px;\n    display: flex;\n    justify-content: center;\n  "], ["\n    margin: 50px auto 20px;\n    display: flex;\n    justify-content: center;\n  "]))),
    StepBlock: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    align-items: center;\n  "], ["\n    position: relative;\n    display: flex;\n    align-items: center;\n  "]))),
    StepBlockProgress: styled.progress(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    overflow: hidden;\n    max-width: ", ";\n    height: 4px;\n    appearance: none;\n    border: none;\n    display: block;\n\n    &::-moz-progress-bar {\n      ", "\n    }\n\n    &::-ms-fill {\n      ", "\n    }\n\n    &::-webkit-progress-bar {\n      background: #eceaf4;\n    }\n\n    &::-webkit-progress-value {\n      background: ", ";\n    }\n\n    @media (min-width: 321px) {\n      max-width: ", ";\n    }\n  "], ["\n    overflow: hidden;\n    max-width: ", ";\n    height: 4px;\n    appearance: none;\n    border: none;\n    display: block;\n\n    &::-moz-progress-bar {\n      ", "\n    }\n\n    &::-ms-fill {\n      ", "\n    }\n\n    &::-webkit-progress-bar {\n      background: #eceaf4;\n    }\n\n    &::-webkit-progress-value {\n      background: ", ";\n    }\n\n    @media (min-width: 321px) {\n      max-width: ", ";\n    }\n  "])), function (_a) {
        var pointsNumber = _a.pointsNumber;
        return "".concat((280 - 16 * (pointsNumber + 1)) / pointsNumber, "px");
    }, progressValueStyles, progressValueStyles, function (_a) {
        var progressStepBackground = _a.progressStepBackground;
        return progressStepBackground;
    }, function (_a) {
        var pointsNumber = _a.pointsNumber;
        return "".concat((320 - 16 * (pointsNumber + 1)) / pointsNumber - 5, "px");
    }),
    Step: styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: relative;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    transition: background 0.2s linear;\n    ", "\n\n    ", "\n\n    ", "\n  "], ["\n    position: relative;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    transition: background 0.2s linear;\n    ", "\n\n    ", "\n\n    ", "\n  "])), CommonColorsStyles, function (_a) {
        var isActive = _a.isActive, activeColor = _a.activeColor, activeBackground = _a.activeBackground, activeBoxShadow = _a.activeBoxShadow;
        return isActive &&
            "\n          box-shadow: ".concat(activeBoxShadow, ";\n          background: ").concat(activeBackground, ";\n          color: ").concat(activeColor, "\n        ");
    }, function (_a) {
        var isPassed = _a.isPassed, progressCheckImg = _a.progressCheckImg, passedColor = _a.passedColor;
        return isPassed &&
            "\n          background: url(".concat(progressCheckImg, ") center center no-repeat;\n          background-size: contain;\n          color: ").concat(passedColor, "\n        ");
    }),
    StepText: styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    min-width: 50px;\n    transform: translateX(-50%);\n    ", ";\n    text-align: ", ";\n\n    @media (min-width: 321px) {\n      font-size: 11px;\n    }\n  "], ["\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    min-width: 50px;\n    transform: translateX(-50%);\n    ", ";\n    text-align: ", ";\n\n    @media (min-width: 321px) {\n      font-size: 11px;\n    }\n  "])), CommonFontsStyles, function (_a) {
        var textAlign = _a.textAlign;
        return textAlign || TextAlignment.CENTER;
    }),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
