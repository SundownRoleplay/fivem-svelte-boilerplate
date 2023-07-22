import { onMount, onDestroy } from "svelte";

interface NuiMessage<T = unknown> {
  action: string;
  data: T;
}

/**
 * A function that manages event listeners for receiving data from the client scripts.
 * @param action The specific `action` that should be listened for.
 * @param handler The callback function that will handle data relayed by this function.
 *
 * @example
 * useNuiEvent<{ visibility: true; wasVisible: 'something' }>('setVisible', (data) => {
 *   // Your logic here
 * })
 **/

export function useNuiEvent<T = unknown>(
  action: string,
  handler: (data: T) => void
) {
  const eventListener = (event: MessageEvent<NuiMessage<T>>) => {
    const { action: eventAction, data } = event.data;

    if (eventAction === action) {
      handler(data);
    }
  };

  onMount(() => window.addEventListener("message", eventListener));
  onDestroy(() => window.removeEventListener("message", eventListener));
}
