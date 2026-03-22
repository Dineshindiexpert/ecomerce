import { Provider } from 'react-redux'
import AppRoutes from './routes/Approutes'
import { store } from './store/Store'

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  )
}

export default App
