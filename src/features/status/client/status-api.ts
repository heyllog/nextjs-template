import { ofetch } from 'ofetch'

import { envConfig } from 'core/configs/env'

const counterClient = ofetch.create({
  baseURL: envConfig.apiUrl,
})

export const checkStatus = async (): Promise<boolean> => {
  try {
    const data = await counterClient('/status')

    return data.status
  } catch (error) {
    return false
  }
}
