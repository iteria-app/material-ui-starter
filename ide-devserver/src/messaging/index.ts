import { MessageType } from './messageTypes'
import IMessaging, { RemoveEventListener } from './messaging'

export type MessageCallback<T> = (payload: T) => void

export class WindowMessaging implements IMessaging {
  constructor(window: Window) {
    this.window = window
  }

  private window: Window

  addEventListener<T>(type: MessageType, cb: MessageCallback<T>) {
    const eventListenerCallback = (e: MessageEvent) => {
      if (e.data.type === type && e.source === window) cb(e.data.payload)
    }
    this.window.addEventListener('message', eventListenerCallback)

    return (() =>
      this.window.removeEventListener(
        'message',
        eventListenerCallback
      )) as RemoveEventListener
  }

  postMessage<T>(type: MessageType, payload: T) {
    console.log('messaging postMessage', type)
    // FIXME update message
    this.window.postMessage({ type, payload }, '*')
  }
}
