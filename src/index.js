import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from './provider/Provider'
import './styles/index.scss'
import './styles/themes.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <App />
  </Provider>
)
