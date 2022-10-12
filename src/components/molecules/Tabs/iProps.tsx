export interface iProps {
  index?: number,
  value?: number,
  tabs: Array<iTabs>
}

export interface iTabs {
  text: string,
  handlerFn: Function
}
