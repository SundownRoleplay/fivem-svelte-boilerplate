import { writable, type Writable } from "svelte/store";
import type { VisibilityStore } from "../interfaces";

export const currentRoute: Writable<string> = writable("/");
export const visibilityProvider: Writable<VisibilityStore> = writable({});

export const setComponentVisibility = (key: string, value: boolean) => {
  visibilityProvider.update((oldVisibilityProvider) => ({
    ...oldVisibilityProvider,
    [key]: value,
  }));
};
