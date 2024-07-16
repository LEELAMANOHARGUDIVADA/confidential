import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ResultPage from "../pages/ResultPage";

export default function Routers () {
    return (
       <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/results/:id`} element={<ResultPage />} />
       </Routes>
    )
}