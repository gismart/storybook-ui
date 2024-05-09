var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
var circleProgress = function (isBackground) {
    if (isBackground === void 0) { isBackground = false; }
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  stroke-linecap: round;\n  fill: transparent;\n  transition: stroke-dasharray 0.2s;\n"], ["\n  ", ";\n  stroke-linecap: round;\n  fill: transparent;\n  transition: stroke-dasharray 0.2s;\n"])), function (_a) {
        var value = _a.value, _b = _a.radius, radius = _b === void 0 ? 45 : _b;
        var length = radius * Math.PI * 2;
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      stroke-dasharray: 0 ", ";\n      stroke-width: ", ";\n      stroke-dasharray: ", "\n        ", ";\n    "], ["\n      stroke-dasharray: 0 ", ";\n      stroke-width: ", ";\n      stroke-dasharray: ", "\n        ", ";\n    "])), length, radius / 5, isBackground ? length : length * (value / 100), length);
    });
};
export var StyledCircleProgress = {
    Container: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: relative;\n    height: ", ";\n    margin: ", ";\n  "], ["\n    position: relative;\n    height: ", ";\n    margin: ", ";\n  "])), function (_a) {
        var height = _a.height;
        return height || '220px';
    }, function (_a) {
        var margin = _a.margin;
        return margin || '0 auto 70px';
    }),
    Svg: styled.svg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n    transform: rotate(-90deg);\n    circle {\n      ", ";\n      stroke: ", ";\n    }\n    circle + circle {\n      ", ";\n      stroke: ", ";\n    }\n  "], ["\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n    transform: rotate(-90deg);\n    circle {\n      ", ";\n      stroke: ", ";\n    }\n    circle + circle {\n      ", ";\n      stroke: ", ";\n    }\n  "])), circleProgress(true), function (_a) {
        var strokeColorEmpty = _a.strokeColorEmpty;
        return strokeColorEmpty || '#ececf9';
    }, circleProgress(), function (_a) {
        var strokeColorFilled = _a.strokeColorFilled;
        return strokeColorFilled || '#ff8276';
    }),
    Label: styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    strong {\n      font-size: ", ";\n      font-weight: ", ";\n    }\n  "], ["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    strong {\n      font-size: ", ";\n      font-weight: ", ";\n    }\n  "])), function (_a) {
        var fontSize = _a.fontSize;
        return fontSize || '60px';
    }, function (_a) {
        var fontWeight = _a.fontWeight;
        return fontWeight || 600;
    }, function (_a) {
        var color = _a.color;
        return color || '#2d3240';
    }, function (_a) {
        var percentageFontSize = _a.percentageFontSize;
        return percentageFontSize || '32px';
    }, function (_a) {
        var percentageFontWeight = _a.percentageFontWeight;
        return percentageFontWeight || 700;
    }),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
