export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    phone: string,
    password: string,
    confirmPassword: string
    remember?: boolean,
    terms?: boolean,
}
export default IUser;
