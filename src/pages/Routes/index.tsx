import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CatImages from "../CatImages";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cats" element={<CatImages />} />
                <Route path="/*" element={<Navigate replace to={'/cats'} />} />
            </Routes>
        </BrowserRouter>
    )
};

export default MyRoutes;