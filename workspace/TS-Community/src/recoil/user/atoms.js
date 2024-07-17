import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "loginUser",
  storage: sessionStorage,
});

export const userState = atom({
  key: "user",
  default: null,
  effects: [persistAtom],
});
