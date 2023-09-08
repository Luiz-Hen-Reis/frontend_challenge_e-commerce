"use client";

import { useState } from "react";

export function useLocalStorage(item: string) {
  let storageItem = localStorage.getItem(item);

  const [value, setValue] = useState<[] | null>(
    JSON.parse(storageItem as string)
  );

  return {
    value,
  };
}
