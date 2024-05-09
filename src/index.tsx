import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './stories/Pages/Main/Main';
import PhotoGrid from './stories/Components/PhotoGrid/PhotoGrid';
import SinglePhoto from './stories/Components/SinglePhoto/SinglePhoto';

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<PhotoGrid />} />
          <Route path='view/:postId' element={<SinglePhoto />} />
        </Route>
      </Routes>
    </Router>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
