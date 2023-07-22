import { isEnvBrowser } from "./misc";

interface DebugEvent<T = unknown> {
  action: string;
  data: T;
}
export const debugData = async <P>(events: DebugEvent<P>[], timer = 1000): Promise<void> => {
  if (isEnvBrowser()) {
    for (const event of events) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          window.dispatchEvent(
            new MessageEvent("message", {
              data: {
                action: event.action,
                data: event.data,
              },
            })
          );
          resolve();
        }, timer);
      });
    }
  }
};
