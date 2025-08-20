
export type API_Response<T> = {
    status: "success"|"error"|"warning"|"info",
    message: string,
    payLoad: T,
    // auth?:
}