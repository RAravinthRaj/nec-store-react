/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import SignUpService from "../services";

type Response = {
  id: string;
  name: string;
};

type State = {
  loading: boolean;
  response: Response | null;
  error: string | null;
  fetchGetUser: (id: string) => Promise<void>;
};

export const useGetUserStore = create<State>((set) => ({
  response: null,
  loading: false,
  error: null,

  fetchGetUser: async (id) => {
    try {
      set({ loading: true, error: null });
      const response = await SignUpService.getUserAPI(id);
      set({ response });
    } catch (err: any) {
      set({ error: err?.message || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
