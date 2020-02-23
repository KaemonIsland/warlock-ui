import React from 'react'
import styled from 'styled-components'
import { FlipCard, CardSide } from '../FlipCard/FlipCard'

// green: {
//     light: 'hsl(150, 25%, 90%)',
//     medium: 'hsl(150, 25%, 80%)',
//     dark: 'hsl(140, 35%, 60%), hsl(160, 15%, 40%)',
//     border: 'hsl(150, 100%, 20%)',
//   },

const OuterContainer = styled.div`
  position: relative;
  width: 22rem;
  margin: 1rem;
`

const CardContainer = styled.div`
  padding: 0.8rem 1.5rem;
  width: 22rem;
  background-color: hsl(150, 25%, 90%);
  border: 2px solid hsl(140, 35%, 60%);
  border-radius: 2rem / 4rem;
  box-shadow: 0 4px 8px black;
  cursor: pointer;
  transition: all 300ms ease-out;
`
// &:hover {
//   box-shadow: 0 8px 12px black;
//   transform: translateY(-4px);
// }

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.div`
  font-weight: bold;
`

const PowerToughness = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsl(150, 25%, 90%);
  border: 2px solid hsl(140, 35%, 60%);
  border-radius: 2rem / 4rem;
  padding: 0 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 8px black;
`

const PowerToughnessBig = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsl(150, 25%, 90%);
  border: 2px solid hsl(140, 35%, 60%);
  border-radius: 2rem / 4rem;
  padding: 0 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 8px black;
`

const CardSet = styled.div`
  background-color: gold;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  box-shadow: 0 2px 4px black;
`

const CardType = styled.div`
  font-size: 0.8rem;
  font-style: italic;
`

const FlipContainer = styled.div`
  margin: 2rem;
  width: 20rem;
  height: 15rem;
`

const CardText = styled.div`
  font-size: 0.8rem;
`

const CardBackInfo = styled.div`
  overflow: hidden;
`

export const SimpleCard = () => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <OuterContainer>
      <CardContainer showMore={showMore} onClick={() => setShowMore(!showMore)}>
        <CardInfo>
          <CardTitle>Aphemia, the Cacophony</CardTitle>
          <div>1B</div>
        </CardInfo>
        <CardInfo>
          <CardType>Legendary Enchantment Creature</CardType>
          <CardSet />
        </CardInfo>
        <hr />
        <CardText>
          <div>Flying</div>
          <br />
          <div>
            At the beginning of your end step, you may exile an enchantment card
            from your graveyarrd. If you do, creat a 2/2 black Zombie creature
            token.
          </div>
        </CardText>
        {/* if creature */}
        <PowerToughnessBig>2 / 1</PowerToughnessBig>
      </CardContainer>
    </OuterContainer>
  )
}
