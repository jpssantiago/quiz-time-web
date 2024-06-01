import { api } from "./api-service"

export async function authenticateWithPassword(pin: string, password: string): Promise<string | null> {
    try {
        const response = await api.post("/authenticate", { pin, password })
        return response.data.token
    } catch (err) {
        return null
    }
}