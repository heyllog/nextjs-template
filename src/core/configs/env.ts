export const envConfig = {
  isDev: String(process.env.NODE_ENV).toLowerCase().trim() !== 'production',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ? String(process.env.NEXT_PUBLIC_API_URL).trim() : '',
}
