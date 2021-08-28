export const webStorage = {
    setToken: (name: string, value: any) => {
        localStorage.setItem(name, value)
    },
    getToken: (name: string ) => {
        return  localStorage.getItem(name)
    },
    removeToken: (name: string) => {
        localStorage.removeItem(name)
    }
}