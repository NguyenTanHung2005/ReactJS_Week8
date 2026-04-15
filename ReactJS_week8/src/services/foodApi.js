import axios from 'axios'

const base = import.meta.env.VITE_FOOD_SERVICE_URL || 'http://localhost:8081'
export async function getFoods(){
  const res = await axios.get(`${base}/api/foods`)
  return res.data
}
