import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const primary = {
  green: {
    light: 'hsl(150, 25%, 90%)',
    medium: 'hsl(150, 25%, 80%)',
    dark: 'hsl(140, 35%, 60%), hsl(160, 15%, 40%)',
    border: 'hsl(150, 100%, 20%)',
  },
  blue: {
    light: 'hsl(210, 35%, 90%)',
    medium: 'hsl(210, 35%, 80%)',
    dark: 'hsl(200, 45%, 60%), hsl(220, 25%, 40%)',
    border: 'hsl(210, 100%, 20%)',
  },
  red: {
    light: 'hsl(0, 45%, 90%)',
    medium: 'hsl(0, 45%, 80%)',
    dark: 'hsl(350, 55%, 60%), hsl(10, 35%, 40%)',
    border: 'hsl(0, 100%, 20%)',
  },
  black: {
    light: 'hsl(0, 0%, 90%)',
    medium: 'hsl(0, 0%, 80%)',
    dark: 'hsl(340, 0%, 35%), hsl(10, 0%, 5%)',
    border: 'hsl(0, 0%, 0%)',
  },
  white: {
    light: 'hsl(40, 50%, 100%)',
    medium: 'hsl(40, 50%, 98%)',
    dark: 'hsl(30, 50%, 95%), hsl(50, 30%, 85%)',
    border: 'hsl(0, 0%, 0%)',
  },
  artifact: {
    light: 'hsl(30, 0%, 95%)',
    medium: 'hsl(30, 10%, 95%)',
    dark: 'hsl(200, 25%, 70%), hsl(200, 15%, 55%)',
    border: 'hsl(0, 0%, 0%)',
  },
  multi: {
    light: 'hsl(45, 47%, 90%)',
    medium: 'hsl(45, 47%, 80%)',
    dark: 'hsl(55, 45%, 65%), hsl(35, 40%, 50%)',
    border: 'hsl(45, 37%, 50%)',
  },
}

const multiColorArr = [
  'blue-black',
  'black-green',
  'blue-red',
  'white-black',
  'black-red',
  'green-white',
  'green-blue',
  'white-blue',
  'red-white',
  'red-green',
]

const cardColors = { ...primary }

const buildMultiColor = color => {
  const [first, second] = color.split('-')
  return {
    light: `linear-gradient(to right, ${primary[first].light}, ${primary[second].light})`,
    medium: `linear-gradient(to right, ${primary[first].medium}, ${primary[second].medium})`,
    dark: `to right, ${primary[first].dark}, ${primary[second].dark}`,
    border: `${primary[first].border} ${primary[second].border} ${primary[second].border} ${primary[first].border}`,
  }
}

multiColorArr.forEach(color => {
  cardColors[color] = buildMultiColor(color)
})

/**
 * small
 * width: 170px;
 * height: 240px;
 * medium
 * width: 255px;
 * height: 360px;
 * large
 * width: 340px;
 * height: 480px;
 */
const OuterBorder = styled.div`
  border: 5px solid black;
  background-color: black;
  width: 340px;
  height: 480px;
  border-radius: 5px;
`

const InnerBorder = styled.div(({ color }) => ({
  background: `linear-gradient(${cardColors[color].dark})`,
  height: '92%',
  width: '99.9%',
  borderRadius: '5px',
  display: 'grid',
  gridTemplateRows: '8% 45% 8% 43%',
  paddingTop: '2%',
}))

const CardTitle = styled.div(({ color }) => ({
  width: '98%',
  height: '100%',
  background: cardColors[color].medium,
  border: '2px solid',
  borderColor: cardColors[color].border,
  margin: '0 auto',
  borderRadius: '2rem/4rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  zIndex: 200,
}))

const CardImage = styled.div(({ color }) => ({
  backgroundImage: 'url("https://i.redd.it/w2p72p6ux5n31.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '92%',
  margin: '-2px auto',
  border: '2px solid',
  borderColor: cardColors[color].border,
}))

const CardDescription = styled.div(({ color }) => ({
  width: '94%',
  background: cardColors[color].light,
  margin: '-2px auto 0 auto',
  fontSize: '10px',
  padding: '0.3rem',
  border: '2px solid',
  borderColor: cardColors[color].border,
  position: 'relative',
}))

const CardPower = styled.div(({ color }) => ({
  position: 'absolute',
  bottom: '-6px',
  right: '-6px',
  zIndex: 300,
  fontSize: '16px',
  width: '25%',
  borderRadius: '2rem/4rem',
  background: cardColors[color].light,
  border: '2px solid',
  borderColor: cardColors[color].border,
  textAlign: 'center',
  letterSpacing: '2px',
}))

const CardExtra = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 90%;
  margin: 4px auto 0 auto;
  font-size: 5px;
  color: white;
`

const CardArtist = styled.div`
  display: flex;
  flex-direction: column;
`

export const MagicCard = ({ color }) => (
  <OuterBorder>
    <InnerBorder color={color}>
      <CardTitle color={color}>
        <div style={{ marginLeft: '4px' }}>Garenbrig Paladin</div>
        <div style={{ marginRight: '4px' }}>4G</div>
      </CardTitle>
      <CardImage color={color} />
      <CardTitle color={color}>
        <div style={{ marginLeft: '4px' }}>Creature - Giant Knight</div>
        <div style={{ marginRight: '4px' }}>:)</div>
      </CardTitle>
      <CardDescription color={color}>
        <div>
          <em>Adamant</em> - If at least three green mana was spent to cast this
          spell, Garenbrig Paladin enters the battlefiled with a +1/+1 coutner
          on it.
        </div>
        <div>
          Garenbrig Paladin can&apos;t be blocked by creatures with power 2 or
          less
        </div>
        <CardPower color={color}>
          <strong>4/4</strong>
        </CardPower>
      </CardDescription>
    </InnerBorder>
    <CardExtra>
      <CardArtist />
    </CardExtra>
  </OuterBorder>
)

MagicCard.propTypes = {
  color: PropTypes.string,
}
