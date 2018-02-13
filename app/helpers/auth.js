export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Tyler McGinnis',
      avatar: '',
      uid: 'Rene test',
    }), 2000)
  })
}

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout () {
  console.log('Logout')
}
