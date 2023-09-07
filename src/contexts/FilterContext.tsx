"use client";

import { FilterTypes } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";
import { ReactNode, createContext, useContext, useState } from "react";

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.POPULARITY,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
});

export function FilterProvider({ children }: FilterProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<FilterTypes>(FilterTypes.ALL);
  const [priority, setPriority] = useState<PriorityTypes>(
    PriorityTypes.POPULARITY
  );

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        type,
        setType,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
