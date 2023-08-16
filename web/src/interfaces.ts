import { type ComponentType } from "svelte";

export interface Visibility {
  component: string;
  isVisible: boolean;
}

export interface VisibilityStore {
  [key: string]: boolean;
}

export interface Route {
  [key: string]: ComponentType;
}
