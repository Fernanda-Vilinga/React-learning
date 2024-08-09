import React from "react";
import  { Route , BrowserRouter} from 'react-router-dom'
import Home from "./componentes/Home";
import CreateLocator from "./componentes/CreateLocator";

const Routes=()=>{
    return(
        <>
         <BrowserRouter>
         <Route element={<Home/>} path="/"  />
         <Route element={ <CreateLocator/>} path="/create-location"/>
         </BrowserRouter>
        </>
    );
}
export default Routes