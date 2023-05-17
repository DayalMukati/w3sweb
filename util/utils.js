const baseUrl = process.env.BASE_URL

console.log(baseUrl, "baseurl")
async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()
  console.log(url, data, "baseurl")
  return data
}
export { baseUrl, fetchQuery }