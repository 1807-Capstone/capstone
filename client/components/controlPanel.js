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

    return (
      <div>
        <img src="/img/key2.png" />
        <Button
          circular
          icon={heatMap ? 'circle' : 'circle outline'}
          color={heatMap ? 'orange' : null}
          onClick={toggleHeatMap}
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
