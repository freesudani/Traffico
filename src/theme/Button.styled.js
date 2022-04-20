import styled from "styled-components";
import { Colors, TextStyles } from "./Theme";

const Button = styled.button`
  transition-property: background-color, color, border, border-bottom;
  transition-duration: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  ${(p) => {
    switch (p.var) {
      case "contained":
        return `
                background-color: ${Colors.Brand.PrimaryMain};
                color: ${Colors.Text.TextWhite};
                border: 1px solid ${Colors.Brand.PrimaryMain};
                &:hover {
                background-color: ${Colors.Brand.PrimaryDark};
                border: 1px solid ${Colors.Brand.PrimaryDark};
                }
              `;
      default:
        return `
                background-color: transparent;
                color: ${Colors.Text.TextWhite};
                border-bottom : transparent;
                &:hover {
                border-bottom: 1rem solid ${Colors.Brand.PrimaryDark};
                }
              `;
    }
  }}
  ${(p) => {
    switch (p.size) {
      case "sm":
        return ` 
        width: 158px;
        height: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead)};
         `;
      case "lg":
        return ` 
        width: 220px;
        height: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead)};
         `;
      default:
        return ` 
        height: 44px;
        padding: 0 ;
        ${TextStyles.Bundler(TextStyles.Lead.Lead)};
         `;
    }
  }}
`;

export default Button;
