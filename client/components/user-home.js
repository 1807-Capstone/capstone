import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Grid, Image, Container, Item, Button, Divider} from 'semantic-ui-react'
import styled from 'styled-components'

/**
 * COMPONENT
 */

const Box = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 90vh;
`

export const UserHome = props => {
  const {email} = props

  return (
    <Container>
      <Divider hidden />
      <Grid centered stackable>
        <Grid.Column width={5} centered>
          <Item>
            <Item.Image src="img/profile.jpg" circular size="small" />
            <h1>Welcome, {email}</h1>
            <Divider hidden />
            <Item.Extra>
              <Button basic>restaurants visted</Button>
            </Item.Extra>
            <Item.Extra>
              <Button basic>account details</Button>
            </Item.Extra>
          </Item>
        </Grid.Column>
        <Grid.Column width={10}>
          <Box>
            <h1>Suggested Restaurants</h1>
            <Item.Group divided>
              {/* item will eventually be a link */}
              <Item>
                <Item.Image src="img/dim-sum.jpg" size="medium" />
                <Item.Content>
                  <Item.Header>Name</Item.Header>
                  <Item.Description>blah blah blah blah blah</Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Box>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
  // imgUrl: PropTypes.string
}
