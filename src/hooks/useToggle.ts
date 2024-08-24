import { useState, useCallback, useDebugValue } from "react";
import type { NoneToVoidFunction } from "@_types/index";

type ToggleHook = (initialState?: boolean) => [boolean, NoneToVoidFunction];

/** This hook Takes a parameter with value true or false and toggles that value to opposite. It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show more/show less text, open/close side menu. */
const useToggle: ToggleHook = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);
  useDebugValue(state);

  return [state, toggle];
};

export default useToggle;
