import api from "@/lib/axios";
import { Project, ProjectFormData, dashboardProjectSchema } from "../types";
import { isAxiosError } from "axios";

export async function createProject(formData:ProjectFormData){
    try {
        const {data}=await api.post('/projects',formData)
        //console.log(data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

//obtener todos los proyectos
export async function getProjects(){
    try {
        const {data}=await api('/projects')
       //console.log(data)
       const response=dashboardProjectSchema.safeParse(data)
       if(response.success){
        return response.data
       }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProjectById(id:Project['_id']){
    try {
        const {data}=await api(`/projects/${id}`)
       return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}