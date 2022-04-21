import { delay } from '../util/delay'

export const windowHasProperty = async (window: Window, property: string) => {
  while (!(window as { [key: string]: any })[property]) {
    await delay(5)
  }
}
