import { useEffect, useState } from "react";
import { createContext } from "react";

export const GeneralContext = createContext<any>(null);

interface GeneralContextProviderInterface {
  children: any;
}

const GeneralProvider: React.FC<GeneralContextProviderInterface> = ({
  children,
}) => {
  const [artistId, setArtistId] = useState<string>("");
  // console.log(artistDetails, "this is useContext");
  return (
    <GeneralContext.Provider value={{ artistId, setArtistId }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
