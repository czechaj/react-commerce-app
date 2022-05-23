import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.primary ? " #316b83" : "#F32424")};
  padding: 0.7rem 0.9rem;
  color: #fefbf3;

  &:hover {
    background-color: transparent;
    border: 1px solid ${(props) => (props.primary ? "#316b83" : "#F32424")};
    color: ${(props) => (props.primary ? "#316b83" : "#F32424")};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.12);
  }
`;

export default Button;
