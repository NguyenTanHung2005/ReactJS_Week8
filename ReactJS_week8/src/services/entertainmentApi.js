async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

export async function getRandomJoke() {
  try {
    const data = await fetchJson('https://official-joke-api.appspot.com/random_joke')
    return {
      title: 'Joke of the moment',
      content: `${data.setup} ${data.punchline}`,
      source: 'official-joke-api.appspot.com',
    }
  } catch {
    return {
      title: 'Joke of the moment',
      content: 'Cooking is like love. It should be entered into with abandon or not at all.',
      source: 'Chefify fallback',
    }
  }
}

export async function getDailyAdvice() {
  try {
    const data = await fetchJson('https://api.adviceslip.com/advice')
    return {
      title: 'Today advice',
      content: data?.slip?.advice || 'Taste first, season second.',
      source: 'api.adviceslip.com',
    }
  } catch {
    return {
      title: 'Today advice',
      content: 'Use fresh ingredients and trust your taste buds.',
      source: 'Chefify fallback',
    }
  }
}
