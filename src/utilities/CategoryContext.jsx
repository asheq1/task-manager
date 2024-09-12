import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState(["Work", "Personal", "Shopping"]);

    return(
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}

CategoryProvider.propTypes = {
    children: PropTypes.object
}
