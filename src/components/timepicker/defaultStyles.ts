import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../types";

export const TimePickerDefaultStyles = createGlobalStyle<ThemeInterface>`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
:root {
  ${({ theme }) =>
    theme === "dark"
      ? `
    --primary-color: #fff;
    --secondary-color: #000;
    --third-color: rgba(255, 255, 255, 0.5);
    --fourth-color: rgba(255, 255, 255, 0.08);
    --fifth-color: rgba(255, 255, 255, 0.2);
    `
      : `
    --primary-color: #000;
    --secondary-color: #fff;
    --third-color: rgba(0, 0, 0, 0.5);
    --fourth-color: rgba(0, 0, 0, 0.08);

    --fifth-color: rgba(0, 0, 0, 0.2);

  `}
}

*{
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
}

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

.nayojs-dtp-controller-input {
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
}

.nayojs-dtp-controller-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.nayojs-time-container {
  width: 100%;
  height: 320px;
  position: absolute;
  top: 60px;
  left: 0;
  border: 1px solid var(--fifth-color);
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--secondary-color);
}
.nayojs-time-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--fifth-color);
  background-color: var(--secondary-color);
  display: grid;
  align-content: center;
  grid-template-columns: repeat(2, 1fr);
}

.nayojs-time-title {
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--primary-color);
}
.nayojs-time-digits{
  width: 100%;
  height: calc(100% - 50px);
  display:flex;
  column-gap: 20px;
}
.nayojs-time-hr {
  width: 1px;
  height: 100%;
  background-color: var(--fifth-color);
  border: none;
}

.nayojs-time-list::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: transparent;
}

.nayojs-time-list::-webkit-scrollbar-button {
  width: 7px;
  height: 7px;
  background-color: transparent;
}

.nayojs-time-list::-webkit-scrollbar-track {
  background-color: transparent;
}

.nayojs-time-list::-webkit-scrollbar-thumb {
  background-color: var(--fifth-color);
  border-radius: 7px;
}

.nayojs-time-list::-webkit-scrollbar-thumb:hover {
  background-color: var(--third-color);
}

.nayojs-time-list {
  height: calc(100% - 40px);
  padding: 0 20px 20px 20px;
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
