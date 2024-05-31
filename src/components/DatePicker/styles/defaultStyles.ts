import { createGlobalStyle } from "styled-components";

export const DatePickerDefaultStyles = createGlobalStyle`
  .nayojs-dtp-main-cointainer{
    width:320px;
    position: relative;

  }

  .nayojs-dtp-controller {
  background-color: transparent;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid var(--fifth-color);
  color: var(--primary-color);
  cursor: pointer;
}

.nayojs-dtp-controller input {
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
}

.nayojs-dtp-controller svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
`;
