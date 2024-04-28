import api from "@/lib/axios";
import { ProjectFormData } from "../types";
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
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}