import React from 'react';
import Route from './router/Router'
import { ReactComponents } from 'zzy-javascript-devtools'
function App() {
  return (
    <>
      <ReactComponents.ErrorBoundary>
        <Route />
      </ReactComponents.ErrorBoundary>
    </>
  );
}

export default App;
