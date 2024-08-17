import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.Books);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching books: ", error));
    }, []);

    return (
        <BookContext.Provider value={{ books, loading }}>
            {children}
        </BookContext.Provider>
    );
}
