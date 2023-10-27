import { StateStorage, createJSONStorage } from "zustand/middleware";

// Con este objeto guardamos la data en el sessionStorege del navegador
const storageApi: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    const data = sessionStorage.getItem( name );
    return data;
  },

  setItem: function (name: string, value: string): void | Promise<void> {
    sessionStorage.setItem( name, value );
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name)
  }
};

export const customSessionStorage = createJSONStorage( () => storageApi );