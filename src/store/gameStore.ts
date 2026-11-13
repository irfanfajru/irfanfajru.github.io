import { create } from "zustand";
import * as THREE from 'three';

type FastTravel = {
  isFastTravel: boolean;
  position: THREE.Vector3Tuple; 
  rotation: THREE.Vector3Tuple;
}

type FastTravelParam = {
  isFastTravel: boolean;
  position?: THREE.Vector3Tuple; 
  rotation?: THREE.Vector3Tuple;
}

type GameState = {
  activeSection: string | null;
  isPaused: boolean;
  speed: number;
  isDriftMode: boolean;
  fastTravel: FastTravel;

  setActiveSection: (section: string | null) => void;
  setPaused: (paused: boolean) => void;
  setSpeed: (speed: number) => void;
  setDriftMode: (isDriftMode: boolean) => void;
  setFastTravel: ({isFastTravel, position, rotation}: FastTravelParam) => void;
};

export const useGameStore = create<GameState>((set) => ({
  activeSection: null,
  isPaused: false,
  speed: 0,
  isDriftMode: false,
  fastTravel: {isFastTravel:false, position:[0,2,0], rotation:[0,0,0]},

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
      }),

    setFastTravel: ({isFastTravel, position = [0,2,0], rotation = [0,0,0]}:FastTravelParam) => 
      set({
        fastTravel:{
          isFastTravel,
          position,
          rotation
        }
      })
}));