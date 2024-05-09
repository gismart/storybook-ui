var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { TextAlignment } from '../../constants/rootConstants';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles';
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: 0.2s ease-out;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  overflow-wrap: break-word;\n  position: relative;\n\n  text-align: ", ";\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", ";\n  }\n"], ["\n  ", ";\n  ", ";\n  ", ";\n\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: 0.2s ease-out;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  overflow-wrap: break-word;\n  position: relative;\n\n  text-align: ", ";\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", ";\n  }\n"])), CommonFontsStyles, CommonColorsStyles, CommonDimensionsStyles, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign || TextAlignment.CENTER;
}, function (_a) {
    var disableBackgroundColor = _a.disableBackgroundColor;
    return disableBackgroundColor || '#e1e1e1';
});
export var StyledButtonWithIcon = {
    Button: styled(StyledButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n\n    img {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 1;\n      width: ", ";\n      height: ", ";\n      right: ", ";\n      left: ", ";\n    }\n  "], ["\n    position: relative;\n\n    img {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 1;\n      width: ", ";\n      height: ", ";\n      right: ", ";\n      left: ", ";\n    }\n  "])), function (_a) {
        var iconWidth = _a.iconWidth;
        return iconWidth || '100%';
    }, function (_a) {
        var iconHeight = _a.iconHeight;
        return iconHeight || 'auto';
    }, function (_a) {
        var iconPositionRight = _a.iconPositionRight;
        return iconPositionRight || 'auto';
    }, function (_a) {
        var iconPositionLeft = _a.iconPositionLeft;
        return iconPositionLeft || 'auto';
    }),
};
var templateObject_1, templateObject_2;
