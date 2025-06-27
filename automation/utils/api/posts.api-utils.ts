import axios, { AxiosResponse } from "axios"
import { PostDto } from "../../dto/PostDto"

const postsController = "/posts"

export const executeGetPostsByIdRequest = async (id: number): Promise<AxiosResponse> => {
    return axios.get(`${postsController}/${id}`).catch((error) => error.response)
}

export const executePostPostsRequest = async (data: PostDto): Promise<AxiosResponse> => {
    return axios.post(`${postsController}`, data).catch((error) => error.response)
}