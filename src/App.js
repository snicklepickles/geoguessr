import React from 'react';
import ImageViewer from './components/ImageViewer';
import MiniMap from './components/MiniMap';

function App() {
  const imageUrl = '/images/learningVillage.png';

  return (
    <div className="App" style={{ position: 'relative' }}>
      <ImageViewer imageUrl={imageUrl} />
      <MiniMap />
    </div>
  );
}

export default App;
