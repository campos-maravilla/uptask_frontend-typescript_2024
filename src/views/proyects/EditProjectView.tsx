import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectAPI"
import EditProjectsForm from "@/components/projects/EditProjectsForm"

export default function EditProjectView() {
    const params=useParams()
    const projectId=params.projectId! // ese valor siempre va a existir 
   // console.log(projectId)
   const {data,isLoading,isError}= useQuery({
    queryKey:['editProjects',projectId],
    queryFn:()=>getProjectById(projectId),
   retry:false
  })
    
  if(isLoading) return 'Cargando...'
  if(isError) return <Navigate to='/404' />
 
  if(data) return <EditProjectsForm data={data} projectId={projectId} />
}
