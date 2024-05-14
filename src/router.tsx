import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardViews from "@/views/DashboardViews";
import CreateProjectView from "./views/proyects/CreateProjectView";
import EditProjectView from "./views/proyects/EditProjectView";
import ProjectDetailsView from "./components/projects/ProjectDetailsView";

export default function Router(){
    return (
<BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardViews/>} index />
          <Route path="/projects/create" element={<CreateProjectView/>} />
          <Route path="/projects/:projectId/edit" element={<EditProjectView/>} />
          <Route path="/projects/:projectId" element={<ProjectDetailsView/>} />
        </Route>
    </Routes>
</BrowserRouter>
    )
}