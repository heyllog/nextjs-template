import axios from 'axios'

import EnvironmentConfig from './environment-config'

export const axiosInstance = axios.create({
  baseURL: EnvironmentConfig.apiUrl,
})

export default axiosInstance
