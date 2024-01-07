import { createContext } from "react";

const productContext = createContext({ products: [], getProducts: () => {} });

export default productContext;
