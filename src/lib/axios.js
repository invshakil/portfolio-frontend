import Axios from 'axios'

const Api = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API}`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default Api
