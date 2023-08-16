import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home"
import { CreateMovie } from "../pages/CreateMovie"
import { Profile } from "../pages/Profile"
import { MovieDetails } from "../pages/MovieDetails";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createmovie" element={<CreateMovie/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
        </Routes>
    );
};