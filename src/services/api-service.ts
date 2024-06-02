import axios from "axios"

export const api = axios.create({
    baseURL: "http://ec2-18-117-156-135.us-east-2.compute.amazonaws.com:443/"
})