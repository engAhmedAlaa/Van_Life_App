import axios from 'axios';

export async function getVans({ queryKey }) {
  try {
    const vanId = queryKey[1];
    const url = vanId ? `/api/vans/${vanId}` : '/api/vans';
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    if (error.response) throw new Error(error.response.data.message);
    else if (error.request) throw new Error(error.message);
    throw new Error(`Error: ${error.message}`);
  }
}
