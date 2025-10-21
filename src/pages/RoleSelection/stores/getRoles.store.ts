/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import RoleSelectionService from "../services";

type State = {
  getRolesLoading: boolean;
  getRolesResponse: any | null;
  getRolesError: string | null;
  fetchGetRoles: (signInToken: string) => Promise<void>;
  resetGetRoles: () => void;
};

export const useGetRolesStore = create<State>((set) => ({
  getRolesLoading: false,
  getRolesResponse: null,
  getRolesError: null,

  fetchGetRoles: async (signInToken: string) => {
    try {
      set({ getRolesLoading: true, getRolesError: null });
      const res = await RoleSelectionService.getRolesAPI(signInToken);
      set({ getRolesResponse: res });
    } catch (err: any) {
      set({ getRolesError: err?.message });
    } finally {
      set({ getRolesLoading: false });
    }
  },

  resetGetRoles: () => {
    set({
      getRolesLoading: false,
      getRolesResponse: null,
      getRolesError: null,
    });
  },
}));
