import styled from "styled-components";
import { flexMixin, font, gray, tag_color } from "../styled/styled";

const StyleContent = styled.div`
  ${flexMixin("column", undefined, "flex-start", "5px", undefined)}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font("12px", undefined)}
    color: ${tag_color};
    border: 1px solid ${tag_color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font("18px", 600)}
  }
  p {
    ${font("12px", undefined)}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyleContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyleContent>
  );
}
