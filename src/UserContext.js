// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    const response = await axios.get('http://localhost:4000/api/v1/profile', {
                        headers: {
                            Authorization: token,
                        },
                    });

                    setUser(response.data);
                }
            } catch (error) {
                // Handle errors or redirect to the login page
                console.error('Error fetching user:', error.message);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};