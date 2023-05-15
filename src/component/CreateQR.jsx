import { useState } from 'react'
import QRCode from 'react-qr-code'
import TextareaAutosize from 'react-textarea-autosize'
const CreateQR = () => {
  const [qrValue, setQrValue] = useState('')
  const [qrImage, setQrImage] = useState('')
  const clearAll = (e) => {
    e.preventDefault()
    setQrImage('')
    // console.log('cleared')
    setQrValue('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!qrValue) return alert('please enter your value')
    setQrImage(qrValue)
    // console.log(qrValue)
    setQrValue('')
  }
  //to download the generated img
  const downloadqr = (e) => {
    e.preventDefault()

    const svg = document.getElementById('QRCode')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')

      downloadLink.download = `${qrValue}`
      downloadLink.href = `${pngFile}`
      downloadLink.click()
    }
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
  }
  return (
    <div className="col-md-5 mx-auto">
      <h2 className="text-center mb-4 ">Create QR Code</h2>
      <div className="card border-0">
        <div className="card-body d-flex flex-column align-items-center ">
          <div className="d-flex  align-items-center justify-content-between">
            <TextareaAutosize
              className=" form-control  border bg-light "
              id="text"
              placeholder="Enter Text"
              value={qrValue}
              onChange={(e) => setQrValue(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-primary w-auto mx-2 "
              onClick={handleSubmit}
            >
              &#65291;
            </button>
            <button
              onClick={clearAll}
              type="button"
              className="btn btn-outline-danger my-4"
            >
              &#x2715;
            </button>
          </div>

          {qrImage && (
            <QRCode
              className="w-50 my-4 btn  "
              size={256}
              style={{ height: 'auto', maxWidth: '50%', width: '50%' }}
              value={qrImage}
              viewBox={`0 0 256 256`}
              id="QRCode"
              onClick={downloadqr}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default CreateQR
