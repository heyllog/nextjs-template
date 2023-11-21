class EnvironmentConfig {
  public static get env(): string {
    return String(process.env.NODE_ENV).toLowerCase().trim()
  }

  public static get apiUrl(): string {
    return String(process.env.NEXT_PUBLIC_API_URL).trim()
  }
}

export default EnvironmentConfig
