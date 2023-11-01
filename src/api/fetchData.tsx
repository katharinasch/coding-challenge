import axios from 'axios'

type SearchItem = {
  title: string
  description: string
}

export const fetchData = async (
  url: string,
): Promise<{ items: SearchItem[] }> => {
  try {
    const response = await axios.get(url)
    return response.data as { items: SearchItem[] }
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default fetchData
