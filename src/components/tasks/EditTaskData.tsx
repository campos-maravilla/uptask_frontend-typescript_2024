import { getTaskById } from "@/api/TaskAPI"
import { useQuery } from "@tanstack/react-query"
import { useLocation, useParams } from "react-router-dom"
import EditTaskModal from "./EditTaskModal"

export default function EditTaskData() {
    //para traer el projecto de la tarea 
    const params=useParams()
    //console.log(params)
    const projectId=params.projectId! //sea solo un string
    
    const location=useLocation()
    const queryParams=new URLSearchParams(location.search)//obtenemos el id
    const taskId=queryParams.get('editTask')! //solamente sea string 
    //console.log(location.search)
   // console.log(taskId)
   const {data}=useQuery({
    queryKey:['task',taskId],
    queryFn:()=>getTaskById({projectId,taskId}),
    enabled:!!taskId // retorna true o false ,si no hay taskId la consulta no se hace  
   })
   
    if(data) return <EditTaskModal/>
}
