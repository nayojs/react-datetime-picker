import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../../types";

export const CalendarDefaultStyles = createGlobalStyle<ThemeInterface>`
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

.nayojs-calendar-container {
  width: 100%;
  padding: 20px;
  position:relative;
  border: 1px solid var(--fifth-color);
  border-radius: 5px;
}

.nayojs-calendar-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nayojs-calendar-header-title,
.nayojs-calendar-header-navigators {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

.nayojs-calendar-selector-list::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: transparent;
}

.nayojs-calendar-selector-list::-webkit-scrollbar-button {
  width: 7px;
  height: 7px;
  background-color: transparent;
}

.nayojs-calendar-selector-list::-webkit-scrollbar-track {
  background-color: transparent;
}

.nayojs-calendar-selector-list::-webkit-scrollbar-thumb {
  background-color: var(--fifth-color);
  border-radius: 7px;
}

.nayojs-calendar-selector-list::-webkit-scrollbar-thumb:hover {
  background-color: var(--third-color);
}

.nayojs-calendar-selector-list {
  position:absolute;
  background-color:var(--secondary-color);
  height:320px;
  overflow:auto;
  top:0;
  left:0;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  border: 1px solid var(--fifth-color);
  border-radius: 5px;
  align-items:start;
  align-content: start;

}

.nayojs-calendar-selector-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: var(--primary-color);
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
}

.nayojs-calendar-header-navigators{
  column-gap: 1rem;
}
.nayojs-calendar-header-title-text {
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
  color: var(--primary-color);
}

.nayojs-calendar-header-button,
.nayojs-calendar-navigators-button,
.nayojs-calendar-day-number {
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  color: var(--primary-color);
}



.nayojs-calendar-header-button-icon {
  width: 10px;
  height: 10px;
}

.nayojs-calendar-navigators-button-prev-icon, .nayojs-calendar-navigators-button-next-icon {
  width: 12px;
  height: 12px;
}


.nayojs-calendar-days {
  width: 100%
}

.nayojs-calendar-days-header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.nayojs-calendar-day-title {
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  height: 35px;
  color: var(--third-color);
}

.nayojs-calendar-days-body {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.nayojs-calendar-day-number-active {
  border: 1px solid var(--fifth-color);
}
.nayojs-calendar-day-number-selected,
.nayojs-calendar-selector-list-item-active {
  background-color: rgb(0, 123, 255);
  color: #fff;
}

.nayojs-calendar-header-button:hover,
.nayojs-calendar-navigators-button:hover,
.nayojs-calendar-day-number:hover,
.nayojs-calendar-selector-list-item:hover {
  background-color: var(--fourth-color);
  color: var(--primary-color);
  transition: 0.3s ease-in;
}

`;
