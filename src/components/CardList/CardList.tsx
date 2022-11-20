import React from 'react'
import styled from 'styled-components'

import { Card } from '../index'

interface CardListProps {
	cards: CatResponse[]
}

const StyledCardList = styled.div`
	padding: 48px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 45px;
	max-width: 1440px;
`

export const CardList: React.FC<CardListProps> = ({cards}) => {
	return (
		<StyledCardList>
			{
				cards.map(card => (<Card key={card.id} cat={card}/>))
			}
		</StyledCardList>
	)
}