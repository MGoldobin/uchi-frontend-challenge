export const setLikedToLocalStorage = (data: CatResponse[]) => {
	localStorage.setItem("liked", JSON.stringify(data))
}