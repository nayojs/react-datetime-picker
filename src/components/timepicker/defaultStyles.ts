import { createGlobalStyle } from "styled-components";

export const TimePickerDefaultStyles = createGlobalStyle`
  .nayojs-dtp-main-cointainer{
    width:320px
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

.nayojs-time-container {
  width: 100%;
  height: 320px;
  display: flex;
  border: 1px solid var(--fifth-color);
  border-radius: 5px;
  column-gap: 20px;
  overflow: hidden;
  background-color: var(--secondary-color);
}

.nayojs-time-hr {
  width: 1px;
  height: 100%;
  background-color: var(--fifth-color);
  border: none;
}

.nayojs-time-list {
  height: calc(100% - 40px);
  padding: 0 20px;
  overflow: auto;
  flex: 1;
}

.nayojs-time-hour-list {
  margin: 20px 0 0 20px;
}

.nayojs-time-minutes-list {
  margin: 20px 20px 0 0;
}


.nayojs-time-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom:10px;
  cursor: pointer;
  color: var(--primary-color);
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
  list-style: none;
  width: 100%;
}
.nayojs-time-list-item-active {
  background-color: rgb(0, 123, 255);
  color: #fff;
}

.nayojs-time-list-item:hover {
  background-color: var(--fourth-color);
  color: var(--primary-color);
  transition: 0.3s ease-in;
}

`;
