import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

import { CardList } from '../../components'
import { useGlobalContext } from '../../utils/hooks'

const StyledPage = styled.div`
	width: 100%;
	padding: 0 62px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`

const InfoText = styled.p`
	margin: 0 auto 30px;
`

export const AllCats: React.FC = () => {
	const { cats, loading, getCats } = useGlobalContext()
	
	const scrollHandler = useCallback(() => {
		if (document.documentElement.scrollHeight - document.documentElement.scrollTop - window.innerHeight < 50 && !loading) {
			getCats()
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [loading])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [scrollHandler])

	return (
		<StyledPage>
			<CardList cards={cats}/>
			<InfoText>
				{
					loading && "... загружаем еще котиков ..."
				}
			</InfoText>
		</StyledPage>
	)
}