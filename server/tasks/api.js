const rp = require('request-promise-native')

async function fetchMovie (item) {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

  const res = await rp(url)
  return res
}

;(async () => {
  let movie =  [{
    doubanId: 33446498,
    title: '不完美的她',
    rate: 6.6,
    poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2572849938.jpg'
  },
  {
    doubanId: 34984510,
    title: '爱吃拉面的小泉同学 二代目',
    rate: 6,
    poster: 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2593187355.jpg'
  }]

  movie.map(async movie => {
    let movieData = await fetchMovie(movie)

    console.log(movieData);
  })
})()