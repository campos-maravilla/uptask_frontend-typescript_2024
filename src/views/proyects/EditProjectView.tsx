import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectAPI"

export default function EditProjectView() {
    const params=useParams()
    const projectId=params.projectId! // ese valor siempre va a existir 
   // console.log(projectId)
   const {data,isLoading,error,isError}= useQuery({
    queryKey:['editProjects',projectId],
    queryFn:()=>getProjectById(projectId),
   retry:false
  })
    console.log(data)
  return (
    <div>EditProjectView</div>
  )
}
