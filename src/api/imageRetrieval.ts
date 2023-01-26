export const getImages = async (): Promise<unknown> => {
  const response = await fetch(`${process.env.REACT_APP_IMAGE_API_URL}/api/images`)
  
  return response.json(); // parses JSON response into native JavaScript objects
}