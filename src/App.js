import React from 'react';
import ImageViewer from './components/ImageViewer';

function App() {
  const imageUrl = '/images/nordstadt.jpg';

  return (
    <div className="App">
      <h1>GeoGuessr</h1>
      <ImageViewer imageUrl={imageUrl} />
    </div>
  );
}

export default App;
