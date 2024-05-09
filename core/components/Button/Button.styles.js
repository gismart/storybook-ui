var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { TextAlignment } from '../../constants/rootConstants';
import { CommonColorsStyles } from '../../styles/CommonColors.styles';
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles';
import { CommonFontsStyles } from '../../styles/CommonFonts.styles';
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: 0.2s ease-out;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  overflow-wrap: break-word;\n\n  text-align: ", ";\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", ";\n  }\n"], ["\n  ", ";\n  ", ";\n  ", ";\n\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: 0.2s ease-out;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  overflow-wrap: break-word;\n\n  text-align: ", ";\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", ";\n  }\n"])), CommonFontsStyles, CommonColorsStyles, CommonDimensionsStyles, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign || TextAlignment.CENTER;
}, function (_a) {
    var disableBackgroundColor = _a.disableBackgroundColor;
    return disableBackgroundColor || '#e1e1e1';
});
var templateObject_1;
