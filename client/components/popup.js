import React from 'react';
import Popup from 'reactjs-popup';

const PopUp = () => (
  <Popup
    trigger={<button type="button">Trigger</button>}
    position="right center"
  >
    <div>Popup content</div>
  </Popup>
);

export default PopUp;
