import { useRef, useState } from 'react'
import QrScanner from 'qr-scanner'
const ReadQR = () => {
  const [file, setFile] = useState(null)
  const [data, setData] = useState(null)
  const fileRef = useRef()

  const handleChange = async (e) => {
    const file = e.target.files[0]
    setFile(file)
    const result = await QrScanner.scanImage(file)
    setData(result)
    // console.log(data)
  }
  const handleClick = () => {
    fileRef.current.click()

    // console.log(file)
  }
  const clearAll = (e) => {
    e.preventDefault()
    setData(null)
    // console.log('cleared')
    setFile(null)
  }

  return (
    <div className="col-md-6 mx-auto">
      <h2 className="text-center mb-4">Create QR Code</h2>
      <div className="card border-0 ">
        <div className="card-body d-flex flex-column align-items-center justify-content-center ">
          <div className="d-flex align-items-center justify-content-between">
            <button
              type="button"
              style={{ height: '50px' }}
              className="btn btn-success px-4 mx-2 "
              onClick={handleClick}
            >
              Scan QR Code
            </button>
            <button
              onClick={clearAll}
              type="button"
              className="btn btn-outline-danger my-4"
            >
              &#x2715;
            </button>
          </div>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="d-none"
            onChange={handleChange}
            ref={fileRef}
          />
          <div className="mt-5 pt-4 d-flex flex-column align-items-center justify-content-between ">
            {file && (
              <img
                className="w-75 "
                src={URL.createObjectURL(file)}
                alt="QR Code"
              />
            )}
            {data && (
              <p className="  mt-2">
                Data : <br /> {data}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ReadQR
