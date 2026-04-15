import httpClient from './httpClient'

const base = import.meta.env.VITE_FOOD_SERVICE_URL || 'http://localhost:8081'

const mockFoods = [
  { id: 1, name: 'Lotus delight salad', description: 'Fresh lotus-inspired salad.' },
  { id: 2, name: 'Italian-style tomato salad', description: 'Tomatoes, basil, olive oil.' },
  { id: 3, name: 'Sunny-side up fried eggs', description: 'Classic breakfast favorite.' },
]

function findFood(foodId) {
  return mockFoods.find((food) => String(food.id) === String(foodId))
}

export async function getFoods(){
  try {
    const res = await httpClient.get(`${base}/api/foods`)
    return Array.isArray(res.data) ? res.data : []
  } catch (error) {
    if (error?.response) {
      throw error
    }
    return mockFoods
  }
}

export async function getFoodById(id) {
  try {
    const res = await httpClient.get(`${base}/api/foods/${id}`)
    return res.data
  } catch (error) {
    if (error?.response) {
      throw error
    }

    const found = findFood(id)
    if (!found) {
      throw new Error('Food not found')
    }
    return found
  }
}

export async function createFood(payload) {
  try {
    const res = await httpClient.post(`${base}/api/foods`, payload)
    return res.data
  } catch (error) {
    if (error?.response) {
      throw error
    }

    const created = {
      id: mockFoods[mockFoods.length - 1].id + 1,
      ...payload,
    }
    mockFoods.push(created)
    return created
  }
}

export async function updateFood(id, payload) {
  try {
    const res = await httpClient.put(`${base}/api/foods/${id}`, payload)
    return res.data
  } catch (error) {
    if (error?.response) {
      throw error
    }

    const index = mockFoods.findIndex((food) => String(food.id) === String(id))
    if (index === -1) {
      throw new Error('Food not found')
    }

    const updated = { ...mockFoods[index], ...payload }
    mockFoods[index] = updated
    return updated
  }
}
