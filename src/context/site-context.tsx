import React from "react";

interface GlobalProps {
  InfoShiftValue: number | null,
  setInfoShiftValue: (c: number | null) => void
}

const defaultValues = {
  InfoShiftValue: null,
  setInfoShiftValue: () => {}
};

export const SiteContext = React.createContext<GlobalProps>(defaultValues);

interface SiteProviderProps {
  children: React.ReactNode
}

export const SiteProvider = ({ children }: SiteProviderProps) => {
  const [ InfoShiftValue, setInfoShiftValue ] = React.useState<number|null>(69);

  React.useEffect(() => {}, []);

  return (
    <SiteContext.Provider
      value={{
        ...defaultValues,
        setInfoShiftValue,
        InfoShiftValue,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
