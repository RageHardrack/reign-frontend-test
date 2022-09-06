import { useState } from "react";

/**
 * Sync state to local storage so that it persists through a page refresh. Usage is similar to useState except we pass in a local storage key so that we can default to that value on page load instead of the specified initial value.
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const server = typeof window === "undefined";

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (server) return initialValue;

    try {
      const item = window.localStorage.getItem(`Hacker_News_App_${key}`);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(
        `Hacker_News_App_${key}`,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};
