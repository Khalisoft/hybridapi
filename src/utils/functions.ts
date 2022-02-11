export const comparePassword = ({ password, dbPassword }) => {
    return password === dbPassword ? true : false
}