export type TUseWindowEvent = (
  type: keyof WindowEventMap,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => void;

export type TViewportSize = {
  height: number;
  width: number;
};
