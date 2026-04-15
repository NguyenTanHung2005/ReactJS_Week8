import httpClient from './httpClient'

const base = import.meta.env.VITE_ORDER_SERVICE_URL || 'http://localhost:8083'

const mockOrders = [
  { id: 101, userId: 1, status: 'CREATED', total: 120000 },
  { id: 102, userId: 1, status: 'PAID', total: 210000 },
  { id: 103, userId: 2, status: 'SHIPPED', total: 175000 },
]

function normalizeOrderPayload(data) {
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.items)) return data.items
  return []
}

function filterOrdersByRole(orders, user) {
  if (user?.role === 'ADMIN') return orders
  return orders.filter((order) => String(order.userId) === String(user?.id))
}

export async function getOrders(user) {
  try {
    const res = await httpClient.get(`${base}/api/orders`)
    return filterOrdersByRole(normalizeOrderPayload(res.data), user)
  } catch (error) {
    if (error?.response) {
      throw error
    }
    return filterOrdersByRole(mockOrders, user)
  }
}

export async function getOrderById(id) {
  try {
    const res = await httpClient.get(`${base}/api/orders/${id}`)
    return res.data
  } catch (error) {
    if (error?.response) {
      throw error
    }

    const found = mockOrders.find((order) => String(order.id) === String(id))
    if (!found) {
      throw new Error('Order not found')
    }
    return found
  }
}
