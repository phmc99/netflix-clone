const api_key = 'b7c67ddfcbf8f973f50541be483a0ba5'

const movieItemTemplate = (item) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  const figure = document.createElement('figure')
  const figcaption = document.createElement('figcaption')
  const img = document.createElement('img')

  figcaption.classList.add('hidden')
  figcaption.innerText = item.title
  img.src = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
  img.alt = item.title
  a.href = '#'

  li.classList.add('flex-column')
  figure.appendChild(img)
  figure.appendChild(figcaption)
  a.appendChild(figure)
  li.appendChild(a)
  return li
}

const movieItemWithPosterTemplate = (item) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  const picture = document.createElement('picture')
  const backdrop = document.createElement('source')
  const poster = document.createElement('source')
  const img = document.createElement('img')

  backdrop.media = '(max-width: 799px)'
  backdrop.srcset = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
  poster.media = '(min-width: 800px)'
  poster.srcset = `https://image.tmdb.org/t/p/original${item.poster_path}`
  img.src = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
  img.alt = item.title
  a.href = '#'

  li.classList.add('flex-column')
  picture.appendChild(backdrop)
  picture.appendChild(poster)
  picture.appendChild(img)
  a.appendChild(picture)
  li.appendChild(a)
  return li
}

export const getPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  const emAltaList = document.getElementById('em-alta-list')
  const response = await fetch(url)
  const data = await response.json()
  
  data.results.map((item) => {
    const listItem = movieItemTemplate(item)
    emAltaList.appendChild(listItem)
  })
}

export const getNowPlayingMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
  const nowPlayingList = document.getElementById('now-playing-list')
  const response = await fetch(url)
  const data = await response.json()
  
  data.results.map((item) => {
    const listItem = movieItemTemplate(item)
    nowPlayingList.appendChild(listItem)
  })
}

export const getOriginalsMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
  const originalsList = document.getElementById('originals-list')
  const response = await fetch(url)
  const data = await response.json()
  
  data.results.map((item) => {
    const listItem = movieItemWithPosterTemplate(item)
    originalsList.appendChild(listItem)
  })
}

export const getPopularTv = async () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`
  const tvShowList = document.getElementById('tv-show-list')
  const response = await fetch(url)
  const data = await response.json()
  
  data.results.map((item) => {
    const listItem = movieItemTemplate(item)
    tvShowList.appendChild(listItem)
  })
}
