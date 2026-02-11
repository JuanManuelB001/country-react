import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { DetailsCountry } from "../pages/DetailsCountry";
export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/"  element={<SearchPage/>}/>
                <Route exact path="/country-details/:code"  element={<DetailsCountry/>} />
            </Routes>
        </Router>
    );
}