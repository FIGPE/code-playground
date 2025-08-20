
export type FigPe_User = {
    id: number,
    email: string,
    role: "student"|"teacher"|"admin"
    authMethod: "password"|"oauth"|"all",
    firstName: string,
    lastName: string,
    password?: string,
    phone?: string,
    dateCreated?: number,
    lastUpdated?: number,
}

// export type 