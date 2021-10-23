import axios from 'axios'

import EnvironmentConfig from './EnvironmentConfig'

export const axiosInstance = axios.create({
  baseURL: EnvironmentConfig.apiUrl,
})

export default axiosInstance
