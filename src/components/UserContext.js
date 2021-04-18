import React from 'react'
const UserContext = React.createContext("oukirche");
const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer,UserContext}