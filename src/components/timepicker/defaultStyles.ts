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
  border: 1px solid var(--fifth-color);
  border-radius: 5px;
  background-color:var(--secondary-color);
  height: 320px;
  border: 1px solid var(--fifth-color);
}

.nayojs-time-numbers {
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  position: relative;
  z-index: 0;
}

.nayojs-time-hour-list,
.nayojs-time-minutes-list {
  height: 100%;
  padding: 20px;
  overflow: auto;
  flex: 1;
}

.nayojs-time-minutes-list {
  border-left: 1px solid var(--fifth-color);
}


.nayojs-time-hour-list-item,
.nayojs-time-minutes-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: var(--primary-color);
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
  list-style: none;
  width: 100%;
  margin-bottom:10px;
}

.nayojs-time-submit {
  height: 70px;
  width: 100%;
  border-top: 1px solid var(--fifth-color);
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 1;

}

.nayojs-time-submit-button {
  outline: none;
  border: none;
  height: 35px;
  width: calc(50% - 40px);
  margin-right: 20px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

}

.nayojs-time-submit-button {
  background-color: rgb(0, 123, 255);
  color: #fff;
}

.nayojs-time-hour-list-item:hover,
.nayojs-time-minutes-list-item:hover {
  background-color: var(--fourth-color);
  transition: 0.3s ease-in;
}
`;
