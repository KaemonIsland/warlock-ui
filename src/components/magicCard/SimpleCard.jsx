import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  position: relative;
  width: 22rem;
  margin: 1rem;
`

const CardContainer = styled.div`
  padding: 0.8rem 1.5rem;
  width: 22rem;
  color: ${({ theme }) => theme.getTextContrast(theme.color.blue[9])};
  background-color: ${({ theme }) => theme.color.blue[9]};
  border-radius: 2rem;
  cursor: pointer;
  transition: all 300ms ease-out;
`

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.div`
  font-weight: bold;
`

const PowerToughnessBig = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.blue[9]};
  border-radius: 2rem / 4rem;
  padding: 0 0.8rem;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.boxShadow.outset(theme.color.blue[1])};
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

const CardText = styled.div`
  font-size: 0.8rem;
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
        {/* <PowerToughnessBig>2 / 1</PowerToughnessBig> */}
      </CardContainer>
    </OuterContainer>
  )
}
