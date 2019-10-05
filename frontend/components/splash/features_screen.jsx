import React from 'react';

const SelectedFeature = (props) => {
  let {selectedFeat} = props;
  switch (selectedFeat) {
    case '1':
      return <img className="feat" src={window.screenshot1} />
    case '2':
      return <img className="feat" src={window.screenshot2} />
    default:
      return <h3>nope</h3>
  }
}

export default SelectedFeature;