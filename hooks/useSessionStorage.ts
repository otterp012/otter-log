import { useCallback, useState, useEffect } from "react";

type value = string | number;
const useSessionStorage = <T>(key: string, initialValue: T) => {
  const getValue = useCallback(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const curValue = window.sessionStorage.getItem(key);
      return curValue ? (JSON.parse(curValue) as T) : initialValue;
    } catch {
      console.warn("Error reading sessionStorage Key");
      return initialValue;
    }
  }, [initialValue, key]);

  // 현재 세션스토리지에 저장된 값이 있는지 확인하고, 값이 있다면 값을 가져온다.
  // 값이 없다면, initialValue를 가져온다.
  const [storedValue, setStoredValue] = useState<T>(getValue);

  const setValue = (storedValue: T) => {
    if (typeof window === "undefined") return;
    try {
      const newValue = JSON.stringify(storedValue);
      window.sessionStorage.setItem(key, newValue);
      setStoredValue(storedValue);
    } catch {
      console.warn("Error setting sessionStorage");
    }
  };

  return {
    storedValue,
    setValue,
  };
};

export default useSessionStorage;
