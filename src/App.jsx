import './App.css'
import CreateQR from './component/CreateQR'
import ReadQR from './component/ReadQR'
function App() {
  return (
    <>
      <div className="container " style={{ marginTop: '8rem' }}>
        <h1 className="my-4 text-center display-2">
          Qr Code Generator & Scanner
        </h1>

        <div className="row pt-4 mt-4">
          <CreateQR />
          <ReadQR />
        </div>
      </div>
    </>
  )
}

export default App
