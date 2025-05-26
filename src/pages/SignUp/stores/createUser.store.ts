/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SignUpService from "../services";
import { CreateUserParams } from "../services/rest";

type State = {
  loading: boolean;
  response: string | null;
  error: string | null;
  createUser: (params: CreateUserParams) => Promise<void>;
};

export const useCreateUserStore = create<State>((set) => ({
  loading: false,
  response: null,
  error: null,

  createUser: async (params) => {
    try {
      set({ loading: true, error: null });
      const res = await SignUpService.createUserAPI(params);
      set({ response: res });
    } catch (err: any) {
      set({ error: err?.message || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
