import React, { useState, useEffect, createContext } from 'react'

import { getLikedFromLocalStorage, setLikedToLocalStorage } from '../functions'

interface AppProviderProps  { 
	children: React.ReactNode
}

type AppContextType = {
  cats: CatFuncResponse,
	loading: boolean, 
	liked: CatFuncResponse, 
	getCats: () => void, 
	addToLiked: (cat: CatResponse) => void, 
	deletoFromLiked: (cat: CatResponse) => void
};

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
	const [cats, setCats] = useState<CatFuncResponse>([])
	const [loading, setLoading] = useState(false)
	const [liked, setLiked] = useState<CatFuncResponse>(getLikedFromLocalStorage())
  const [page, setPage] = useState(0)


	const getCats = async () => {
		setLoading(true)
		try {
      const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`, {
				method: "GET",
				headers: {
					'x-api-key': 'live_9O7FhP0JZdBGPCf8qS9phktDFQsAELasXEdOlnVZCpDLP1V1Ttba14Y1Rc0FEbRr'
				}
			})
			.then(res => res.json())

			if (data.length) {
			  setCats(prev => [...prev, ...data])
			} else {
			  setCats([])
			}
    } catch (e) {
      console.log(e)
    }
		setTimeout(() => {
			setPage(prev => prev + 1)
			setLoading(false)
		}, 0)
  }

	const addToLiked = (cat: CatResponse) => {
		const updatedLiked = [...liked, cat]
		setLiked(updatedLiked)
		setLikedToLocalStorage(updatedLiked)
	}

	const deletoFromLiked = (cat: CatResponse) => {
		const updatedLiked = liked.filter(el => el.id !== cat.id)
		setLiked(updatedLiked)
		setLikedToLocalStorage(updatedLiked)
	}

	useEffect(() => {
		getCats()
	}, [])

	return (
		<AppContext.Provider value={{cats, loading, liked, getCats, addToLiked, deletoFromLiked}}>
			{children}
		</AppContext.Provider>
	)
}