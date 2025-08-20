// Define other shared types for things like courses, messages, etc.
export type Course = {
    id: number,
    title: string,
    description: string,
    duration: string,
    price: number,

    instructorId: number,
}