export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    dob?: Date,
    contact?: number | string,
    password?: string
}
export default IUser;
