import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>;

/**
 * Sync state to local storage so that it persists through a page refresh. Usage is similar to useState except we pass in a local storage key so that we can default to that value on page load instead of the specified initial value.
 *
 * DISCLAIMER: This Hook's logic was taken from https://usehooks-ts.com/react-hook/use-local-storage
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(`Hacker_News_App_${key}`);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.error(
        `Error reading localStorage key “Hacker_News_App_${key}”:`,
        error
      );
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  /**
   * Return a wrapped version of useState's setter function that persists the new value to localStorage.
   */
  const setValue = (value: T | ((val: T) => T)) => {
    if (typeof window === "undefined") {
      console.warn(
        `Tried setting localStorage key “Hacker_News_App_${key}” even though environment is not a client`
      );
    }

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

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue];
};

/**
 * A wrapper for "JSON.parse()"" to support "undefined" value
 */
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}
