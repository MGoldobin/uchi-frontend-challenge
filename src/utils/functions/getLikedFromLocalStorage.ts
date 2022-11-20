export const  getLikedFromLocalStorage = (): CatFuncResponse => {
  let liked = localStorage.getItem('liked')
  if (liked) {
    return JSON.parse(liked)
  }
  return []
}