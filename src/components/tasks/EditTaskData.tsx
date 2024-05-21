import { useLocation } from "react-router-dom"


export default function EditTaskData() {
    
    const location=useLocation()
    const queryParams=new URLSearchParams(location.search)//obtenemos el id
    const taskId=queryParams.get('editTask')
    //console.log(location.search)
    console.log(taskId)
    
  return (
    <div>EditTaskData</div>
  )
}
