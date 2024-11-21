import React from 'react';
import ImageViewer from './ImageViewer';
import MiniMap from './MiniMap';
import learningVillage from '../assets/images/learningVillage.png';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <ImageViewer imageUrl={learningVillage} />
      <MiniMap />
    </div>
  );
}

export default App;
