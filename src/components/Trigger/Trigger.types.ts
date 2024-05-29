import { ThemeInterface } from "../types";

export interface TriggerClassesI {
  triggerClasses?: { containerClass?: string };
}

export interface TriggerPropsI extends TriggerClassesI, ThemeInterface {}
