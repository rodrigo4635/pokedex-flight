import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen, DetailsScreen } from "screens"
import { Provider } from 'react-redux'
import store from './utils/store'
import { Layout } from "components"

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <HomeScreen /> } />
            <Route path="/:name" element={ <DetailsScreen /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App