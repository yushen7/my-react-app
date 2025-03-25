import logo from './logo.svg'
import './App.css'
import { useActivityPromotion } from './ActivityPromotion'

function App() {
  const { ActivityPromotion } = useActivityPromotion()
  return (
    <div className="App">
      <ActivityPromotion
        store={{
          yz: {
            windowProxy: window,
            request: () => Promise.resolve({}),
          },
          windowProxy: window,
        }}
      />
    </div>
  )
}

export default App
