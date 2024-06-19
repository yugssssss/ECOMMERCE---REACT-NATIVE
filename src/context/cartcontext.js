import { createContext, useState } from "react";


 export  const cartcontext = createContext();

 export  const CartProvider= ({children}) => {
   
    const [cart , setcart] = useState([]);
      
    const addtocart = (item)=>{
          
            setcart([...cart ,item])
          
    }

    const values = {
        cart,
        addtocart,
    }
    return <cartcontext.Provider value={values}>{children}</cartcontext.Provider>

}