export const postImageUpload = async (payload: unknown): Promise<unknown> => {
  const response = await fetch(`${process.env.IMAGE_API_URL}/api/images`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(payload) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}