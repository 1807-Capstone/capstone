import React from 'react'
import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'

const HomePage = () => {
  return (
    <Grid stackable centered>
      <Grid.Column width={5}>
        <img src="img/food.jpeg" />
      </Grid.Column>
      <Grid.Column width={5}>
        <img src="img/pasta.jpeg" />
      </Grid.Column>
      <Grid.Column width={5}>
        <img src="img/burger.jpeg" />
      </Grid.Column>
    </Grid>
  )
}

export default HomePage
