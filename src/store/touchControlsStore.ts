import { create } from "zustand";

type TouchControlsState = {
    forward: boolean;
    back: boolean;
    left: boolean;
    right: boolean;
    brake: boolean;
    setForward: (forward: boolean) => void;
    setBack: (back: boolean) => void;
    setLeft: (left: boolean) => void;
    setRight: (right: boolean) => void;
    setBrake: (brake: boolean) => void;
};

export const useTouchControlsStore = create<TouchControlsState>((set) => ({
   forward: false,
   back: false,
   left: false,
   right: false,
   brake: false,
    setForward: (forward) =>
        set({
        forward
    }),
    setBack: (back) =>
        set({
        back
    }),
    setLeft: (left) =>
        set({
        left
    }),
    setRight: (right) =>
        set({
        right
    }),
    setBrake: (brake) =>
        set({
        brake
    })
}));