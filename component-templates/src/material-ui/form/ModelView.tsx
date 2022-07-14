import React, { useState } from 'react'
import Modal from '@mui/material/Modal'

const css = `.progress-bar {
  display: block;
  width: 33%;
  height: 10%;
  max-height: 2%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 25px;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.5), 0px 0px 5px 1px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.5);
}

.progress-bar.hide {
  visibility: hidden;
  transition: visibility 0.3s;
}

.update-bar {
  background-color: rgba(255, 255, 255, 0.9);
  width: 0%;
  height: 100%;
  border-radius: 25px;
  float: left;
  transition: width 0.3s;
}`

interface ModelViewProps {
  thumbnailSource: string
  glbSource?: string
}

export const ModelView: React.FC<ModelViewProps> = ({
  thumbnailSource,
  glbSource,
}: ModelViewProps): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    if (glbSource) setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const onProgress = (event: any) => {
    const progressBar = event.target.querySelector('.progress-bar')
    const updatingBar = event.target.querySelector('.update-bar')
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide')
    } else {
      progressBar.classList.remove('hide')
      if (event.detail.totalProgress === 0) {
        event.target.querySelector('.center-pre-prompt').classList.add('hide')
      }
    }
  }
  return (
    //@ts-ignore
    <>
      <style>{css}</style>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <model-viewer
            id="modelviewer2"
            autoplay={true}
            src={glbSource}
            camera-controls={true}
            style={{ width: '100%', height: '100%' }}
            ref={(ref) => {
              if (ref) ref.addEventListener('progress', onProgress)
            }}
          >
            <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
            </div>
          </model-viewer>
        </>
      </Modal>
      {thumbnailSource === '' ? (
        <></>
      ) : (
        <img
          alt="thumbnail"
          src={thumbnailSource}
          style={{ maxWidth: '200px', maxHeight: '200px' }}
          width="50%"
          height="50%"
          onClick={handleOpen}
        />
      )}
    </>
  )
}
