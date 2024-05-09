import * as React from 'react';
import { createRoot } from 'react-dom/client';

export default function App(): JSX.Element {
  return <h1>New</h1>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
