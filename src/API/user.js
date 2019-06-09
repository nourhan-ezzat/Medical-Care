import axios from 'axios'
const BASEURL = 'http://localhost:3000'
export const login = ({username, password}) => {
        return axios.post(`${BASEURL}/login`,
        {username: username, password: password}
    ).then(res => res.data)
}

export const getprofile = () => {
        return axios.get(`${BASEURL}/patients/profile`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        }
    ).then(res => res.data)
}
