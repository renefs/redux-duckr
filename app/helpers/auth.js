export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Tyler McGinnis',
      avatar: '',
      uid: 'Rene test',
    }), 2000)
  })
}
