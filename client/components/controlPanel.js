/* eslint-disable complexity */
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';


const categories = ['waittimes'];


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
      <div key={1} style={{textAlign: 'right'}}>
        <img
          src={nightMode ? '/img/waittimesnightmode.png' : '/img/waittimes.png'}
        />
        <Button
          circular
          icon={heatMap ? 'circle' : 'circle outline'}
          color={heatMap ? 'orange' : null}
          onClick={toggleHeatMap}
        />
        <br />
        <img
          src={
            nightMode ? '/img/usertrafficnightmode.png' : '/img/usertraffic.png'
          }
        />
        <Button
          circular
          icon={checkInMap ? 'circle' : 'circle outline'}
          color={checkInMap ? 'purple' : null}
          onClick={toggleCheckInMap}
        />
        <br />
        <Button
          circular
          icon={nightMode ? 'circle' : 'circle outline'}
          color={nightMode ? 'black' : null}
          onClick={toggleNightMode}
        />
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
