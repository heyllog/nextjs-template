import axiosInstance from 'app/api'

export async function fetchCount(amount = 1): Promise<{ data: number }> {
  const { data } = await axiosInstance.post<{ data: number }>('/api/counter', { amount })

  return data
}
