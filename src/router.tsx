import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardViews from "./views/DashboardViews";

export default function Router(){
    return (
<BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardViews/>} index />
        </Route>
    </Routes>
</BrowserRouter>
    )
}