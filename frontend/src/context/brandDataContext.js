import { createContext, useEffect, useState } from "react";

const BrandDataContext = createContext(null);

export const BrandDataProvider = ({ children }) => {
  const [data, setData] = useState(false);

  const fetchBrandData = async () => {};

  useEffect(fetchBrandData, []);

  if (!data) return <h3>Loading..</h3>;

  return (
    <BrandDataContext.Provider value={data}>
      {children}
    </BrandDataContext.Provider>
  );
};
