import { create, StateCreator } from "zustand";
import { persist } from 'zustand/middleware'
import { customSessionStorage } from "../storages/session-storage.storage";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = ( set ) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set(({ firstName: value})),
  setLastName: (value: string) => set(({ lastName: value})),
});

export const usePersonStore = create<PersonState & Actions>()(
  persist(
    storeApi,
    {
      name: 'person-store',
      storage: customSessionStorage,
    })

  // Esta es una de las opciones o también lo podemo separar
  // Esta opción nos persiste la data directamente en el localStorage
  // persist(
  //   ( set ) => ({
  //   firstName: "",
  //   lastName: "",

  //   setFirstName: (value: string) => set(({ firstName: value})),
  //   setLastName: (value: string) => set(({ lastName: value})),
  // }), {name: 'person-storage'})
);