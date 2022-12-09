import { toggleMobileMenu } from "./header.js";
import { getNowPlayingMovies, getOriginalsMovies, getPopularMovies, getPopularTv } from "./main.js";

const mobileMenuButton = document.getElementById("menu-mobile")
mobileMenuButton.addEventListener('click', toggleMobileMenu)

const lists = document.getElementsByClassName('content-list')
Array.from(lists).forEach(item => {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
})
});

const loading = document.getElementById('loading')

const getContent = async () => {
  await getPopularMovies()
  await getNowPlayingMovies()
  await getOriginalsMovies()
  await getPopularTv()
  loading.classList.add('hidden')
}

getContent()