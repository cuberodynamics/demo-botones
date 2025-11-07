"use client";

import { create } from "zustand";

const useMetricsStore = create((set) => ({
  clicksCreate: 0,
  clicksResults: 0,
  activeUsers: 1, // mínimo 1: tú 😄

  addCreateClick: () =>
    set((state) => ({ clicksCreate: state.clicksCreate + 1 })),

  addResultsClick: () =>
    set((state) => ({ clicksResults: state.clicksResults + 1 })),

  increaseUsers: () =>
    set((state) => ({ activeUsers: state.activeUsers + 1 })),

  decreaseUsers: () =>
    set((state) => ({
      activeUsers: Math.max(1, state.activeUsers - 1),
    })),
}));

export default useMetricsStore;
