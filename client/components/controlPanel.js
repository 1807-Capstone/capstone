/* eslint-disable complexity */
import React, {Component} from 'react';
import {fromJS} from 'immutable';
import {Button} from 'semantic-ui-react';

// const OdefaultMapStyle = fromJS(MAP_STYLE);

const categories = ['waittimes'];

// Layer id patterns by category

const defaultContainer = ({children}) => (
  <div className="control-panel">{children}</div>
);

export default class StyleControls extends Component {
  renderLayerControl() {
    const toggleHeatMap = this.props.toggleHeatMap;
    const heatMap = this.props.heatMap;
    const toggleCheckInMap = this.props.toggleCheckInMap;
    const checkInMap = this.props.checkInMap;
    const nightMode = this.props.nightMode;
    const toggleNightMode = this.props.toggleNightMode;

    return (
      <div>
        <div key={name}>
          <img
            src={
              nightMode ? '/img/waittimesnightmode.png' : '/img/waittimes.png'
            }
          />
          <Button
            circular
            icon={heatMap ? 'circle' : 'circle outline'}
            color={heatMap ? 'orange' : null}
            onClick={toggleHeatMap}
          />
        </div>
        <img
          src={
            nightMode ? '/img/usertrafficnightmode.png' : '/img/usertraffic.png'
          }
        />
        <div key={name + '1'}>
          <Button
            circular
            icon={checkInMap ? 'circle' : 'circle outline'}
            color={checkInMap ? 'purple' : null}
            onClick={toggleCheckInMap}
          />
        </div>
        <div key={name + '2'}>
          <Button
            circular
            icon={nightMode ? 'circle' : 'circle outline'}
            color={nightMode ? 'black' : null}
            onClick={toggleNightMode}
          />
        </div>
      </div>
    );
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        {categories.map(name => this.renderLayerControl(name))}
      </Container>
    );
  }
}
