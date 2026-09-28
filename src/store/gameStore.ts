import { create } from "zustand";

type GameState = {
  activeSection: string | null;
  isPaused: boolean;
  speed: number;
  isDriftMode: boolean;

  setActiveSection: (section: string | null) => void;
  setPaused: (paused: boolean) => void;
  setSpeed: (speed: number) => void;
  setDriftMode: (isDriftMode: boolean) => void;
};

export const useGameStore = create<GameState>((set) => ({
  activeSection: null,
  isPaused: false,
  speed: 0,
  isDriftMode: false,

  setActiveSection: (section) =>
    set({
      activeSection: section,
    }),

  setPaused: (paused) =>
    set({
      isPaused: paused,
    }),

  setSpeed: (speed) =>
    set({
      speed,
    }),

    setDriftMode: (isDriftMode) =>
      set({
        isDriftMode
      })
}));