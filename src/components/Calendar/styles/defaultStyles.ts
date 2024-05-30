import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../../types";

export const CalendarDefaultStyles = createGlobalStyle<ThemeInterface>`

.nayojs-calendar-container {
  width: 100%;
  padding: 20px;
  position:relative;

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
.nayojs-calendar-header-title h3 {
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



.nayojs-calendar-header-button svg {
  width: 10px;
  height: 10px;
}

.nayojs-calendar-navigators-button svg {
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
  background-color: rgb(0, 123, 255);
  color: #fff;
}

.nayojs-calendar-header-button:hover,
.nayojs-calendar-navigators-button:hover,
.nayojs-calendar-day-number:hover,
.nayojs-calendar-selector-list-item:hover {
  background-color: var(--fourth-color-50);
  transition: 0.3s ease-in;
}

`;
