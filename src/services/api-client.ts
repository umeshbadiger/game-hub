import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '897cabcf8d0344b3abf8075a95d61905',
    }
})