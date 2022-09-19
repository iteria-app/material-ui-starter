import React, { Suspense } from 'react'
import { Tools, Vector3 } from '@babylonjs/core'
import { Model } from 'react-babylonjs'
import '@babylonjs/loaders'

interface XrModelFiles {
  id: string
  name: string
  signedGlbPath?: { url: string } | null
}

type Props = {
  position: Vector3
  xrModelFiles: [XrModelFiles]
}

const EntityBabylonModelDownload = ({
  position,
  xrModelFiles,
}: Props): JSX.Element => {
  return (
    <Suspense
      fallback={
        <box name={'loading'} size={2} position={new Vector3(0, 0, 0)}></box>
      }
    >
      {xrModelFiles?.map((xrModelFile: XrModelFiles) => {
        if (!xrModelFile?.signedGlbPath?.url) {
          console.error('missing signedGlbPath')
          return <></>
        }
        const rootUrl = Tools.GetFolderPath(xrModelFile?.signedGlbPath?.url)
        const sceneFileName = Tools.GetFilename(xrModelFile?.signedGlbPath?.url)

        return (
          <Model
            name={xrModelFile.name}
            key={xrModelFile.id}
            rootUrl={rootUrl}
            position={position}
            sceneFilename={sceneFileName}
          />
        )
      })}
    </Suspense>
  )
}

export default EntityBabylonModelDownload
