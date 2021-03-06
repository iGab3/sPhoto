import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../store/Layout'
import HeaderMenu from './HeaderMenu';
import SideMenu from './SideMenu';
const Layout = props => (
  <Grid>
    <Grid.Row >
    <Grid.Column>
      <HeaderMenu activeItem={props.activeItem} clickHandler={props.clickHandler} />
    </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='top'>
      <Grid.Column width={2}>
        <SideMenu activeItem={props.activeItem} clickHandler={props.clickHandler} />
      </Grid.Column>
      <Grid.Column stretched width={14}>
        {props.children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
export default connect(
  state => state.layout,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Layout)
