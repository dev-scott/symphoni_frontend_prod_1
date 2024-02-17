import { create } from "zustand";

type PersonalInfoStore = {
  data: {
    name: string;
    email: string;
    phone: number;
  };
  updatePersonalInfo: (data: any) => void;
};

export const usePersonalInfoStore = create<PersonalInfoStore>((set) => ({
  data: {
    name: "",
    email: "",
    phone: 0,
  },
  updatePersonalInfo: (data) => {
    set((state) => ({
      data: {
        ...state.data,
        ...data, // Merge les nouvelles données avec l'ancienne
      },
    }));
  },
}));
