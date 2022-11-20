import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../utils/hooks'

interface CardProps {
	cat: CatResponse
}

interface StyleProps {
	liked: boolean
}

const StyledCard = styled.div<StyleProps>`
	height: 225px;
	width: 225px;
	position: relative;

	&:hover {
		transform: scale(1.15);
		box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
	}

	&:hover button {
		background-image: url(${props => props.liked ? './images/likeButton_clicked.svg' : './images/likeButton.svg'}) !important;
	}
`

const Image = styled.img`
	height: 100%;
	width: 100%;
`

const Button = styled.button<StyleProps>`
	cursor: pointer;
	position: absolute;
	height: 40px;
	width: 37px;
	bottom: 24px;
	right: 24px;
	border: none;
	background-color: rgba(0 ,0 ,0 , 0);
	background-repeat: no-repeat;
	background-size: contain;

	&:hover {
		background-image: url('./images/likeButton_hover.svg') !important;
	}
`

export const Card = ({cat}: CardProps) => {
	const { liked, addToLiked, deletoFromLiked } = useGlobalContext()
	const [isLiked, setIsLiked] = useState<boolean>(!!liked.find(el => el.id === cat.id))

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()

		if(isLiked) {
			deletoFromLiked(cat)
		} else {
			addToLiked(cat)
		}

		setIsLiked(prev => !prev)
	}

	return (
		<StyledCard liked={isLiked}>
			<Image src={cat.url} alt={"Кот " + cat.id} className='card__image'/>
			<Button liked={isLiked} onClick={(e) => handleClick(e)} />
		</StyledCard>
	)
}