import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { CardList } from '../../components'
import { useGlobalContext, useIntersectionViewport } from '../../utils/hooks'

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
	const bottomTextRef = useRef<HTMLParagraphElement  | null>(null)
	const isVisible = useIntersectionViewport(bottomTextRef, {})

	useEffect(() => {
		if(isVisible && !loading) {
			getCats()
		}
	}, [isVisible, loading])

	return (
		<StyledPage>
			<CardList cards={cats}/>
			<InfoText ref={bottomTextRef}>
				{
					loading && "... загружаем еще котиков ..."
				}
			</InfoText>
		</StyledPage>
	)
}