
/*   Hook para obtener el origen de navegación   */

import { useLocation } from "react-router";

const useOrigen = (defaultValue = "public") => {
  const { state } = useLocation();
  return state?.origen ?? defaultValue;
};

export default useOrigen