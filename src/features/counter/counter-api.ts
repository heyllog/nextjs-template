import axios from 'axios'

import EnvironmentConfig from 'core/environment-config'

const axiosInstance = axios.create({
  baseURL: EnvironmentConfig.apiUrl,
})

export async function fetchCount(amount = 1): Promise<{ data: number }> {
  const { data } = await axiosInstance.post<{ data: number }>('/api/counter', { amount })

  return data
}
