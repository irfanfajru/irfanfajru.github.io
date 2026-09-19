import { create } from "zustand";

type Section = {
  id: string;
  title: string;
};

type GameState = {
  activeSection: string | null;
  isPaused: boolean;
  speed: number;

  setActiveSection: (section: string | null) => void;
  setPaused: (paused: boolean) => void;
  setSpeed: (speed: number) => void;
};

export const useGameStore = create<GameState>((set) => ({
  activeSection: null,
  isPaused: false,
  speed: 0,

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
}));