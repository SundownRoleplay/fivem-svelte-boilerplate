import { writable, type Writable } from "svelte/store";

const initialState = {
  currentRoute: "/",
};

export const store = writable(initialState);

export const actions = {
  setRoute: (newRoute: string) => {
    store.update((state) => ({
      ...state,
      currentRoute: newRoute,
    }));
  },
};

export const visibility: Writable<boolean> = writable(false);
