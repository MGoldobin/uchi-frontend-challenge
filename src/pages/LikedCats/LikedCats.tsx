import React from 'react'
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

export const LikedCats: React.FC = () => {
	const { liked, loading } = useGlobalContext()

	return (
		<StyledPage>
			<CardList cards={liked}/>
			<InfoText>
				{
					!liked.length && !loading && "... У вас еще нет любимых котиков ..."
				}
				{
					loading && "... загрузка ..."
				}
			</InfoText>
		</StyledPage>
	)
}