import { DefaultTheme } from "styled-components";
import { CalendarClassesI } from "../Calendar/Calendar.types";
import { TriggerClassesI } from "../Trigger/Trigger.types";

export interface DatePickerProps extends CalendarClassesI, DefaultTheme, TriggerClassesI {}
