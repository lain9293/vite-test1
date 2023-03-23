import { render } from 'react-dom'
import AppProvider from './app/main/view/App';
import './index.css'

const rootElement = document.getElementById("root");
render(<AppProvider />, rootElement);
