export const GET = async (): Promise<Response> => {
  return Response.json({ status: true }, { status: 200 })
}
