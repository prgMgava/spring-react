import Dashboard from "pages/Dashboard"
import Home from "pages/Home"
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom"

const Routes = () => {
    return (
        <>
        <BrowserRouter>
           <Switch>
               <Route path="/" element={<Home/>}/>
               <Route path="/dashboard" element={<Dashboard/>}/>
            </Switch> 
        </BrowserRouter>
        </>
    )
}

export default Routes