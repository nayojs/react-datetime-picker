export interface TriggerClassesI {
  triggerClasses?: { containerClass?: string };
}

export interface TriggerPropsI extends TriggerClassesI {
  calendarVisibilityHandler: () => void;
}
