export interface IUser {
    id?: string,
    firstName: string,
    lastName: string,
    DOB?: string,
    contact?: number | string,
    password?: string
}
export default IUser;
