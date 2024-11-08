export type ELEMENT_TYPES =
  | string
  | Promise<WebdriverIO.Element>
  | WebdriverIO.Element;