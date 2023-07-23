import { writable, type Writable } from "svelte/store";

// Defina o estado inicial
const initialState = {
  currentRoute: '/',
};

// Crie a store
export const store = writable(initialState);

// Defina as ações (comandos) que irão atualizar o estado
export const actions = {
  // Altera a rota atual
  setRoute: (newRoute: string) => {
    store.update((state) => ({
      ...state,
      currentRoute: newRoute,
    }));
  },
};


export const visibility: Writable<boolean> = writable(false);
