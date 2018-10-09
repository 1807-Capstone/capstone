import React, {Component} from 'react';
import {fromJS} from 'immutable';

// const OdefaultMapStyle = fromJS(MAP_STYLE);

const categories = ['waittimes'];

// Layer id patterns by category
const layerSelector = {
  waittimes: /waittimes/
};

const defaultContainer = ({children}) => (
  <div className="control-panel">{children}</div>
);

export default class StyleControls extends Component {
  constructor(props) {
    super(props);

    this.dataLayers = this.props.dataLayers;

    this.state = {
      visibility: {
        waittimes: true
      }
    };
  }

  componentDidMount() {
    this.updateMapStyle(this.state);
  }

  onVisibilityChange(name, event) {
    const visibility = {...this.state.visibility, [name]: event.target.checked};
    this.setState({visibility});
    this.updateMapStyle({...this.state, visibility});
  }

  updateMapStyle({visibility}) {
    const dataLayers = this.props.dataLayers;
    const layers = this.dataLayers.filter(layer => {
      const id = layer.id;
      return categories.every(
        name => visibility[name] || !layerSelector[name].test(id)
      );
    });

    // this.props.onChange(dataLayers.set('layers', layers));
  }

  renderLayerControl(name) {
    const {visibility} = this.state;

    return (
      <div key={name} className="input">
        <img src="/img/key2.png" />
        <input
          type="checkbox"
          checked={visibility[name]}
          onChange={this.onVisibilityChange.bind(this, name)}
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
