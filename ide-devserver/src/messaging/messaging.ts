import { MessageCallback } from '.'
import { MessageType } from './messageTypes'

export type RemoveEventListener = () => void

export default interface IMessaging {
  addEventListener<T>(
    event: MessageType,
    cb: MessageCallback<T>
  ): RemoveEventListener
  postMessage<T>(event: MessageType, payload: T): void
}
