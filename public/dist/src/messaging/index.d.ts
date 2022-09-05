import { MessageType } from './messageTypes';
import IMessaging, { RemoveEventListener } from './messaging';
export declare type MessageCallback<T> = (payload: T) => void;
export declare class WindowMessaging implements IMessaging {
    constructor(window: Window);
    private window;
    addEventListener<T>(type: MessageType, cb: MessageCallback<T>): RemoveEventListener;
    postMessage<T>(type: MessageType, payload: T): void;
}
