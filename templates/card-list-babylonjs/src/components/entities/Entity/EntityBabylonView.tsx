import React from 'react'
import { FormikValues } from 'formik'

import { Engine, Scene } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core'
import EntityBabylonModelDownload from './EntityBabylonModelDownload'

interface Props {
  data?: any
  onSubmit: (values: FormikValues) => void
  onCopy?: (values: any) => void
  saveButtonDisabled?: boolean
}

const EntityBabylonView: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="camera1"
            alpha={Math.PI / 2}
            beta={Math.PI / 2}
            radius={9.0}
            target={Vector3.Zero()}
            minZ={0.001}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />
          <EntityBabylonModelDownload
            position={new Vector3(0, 0, 0)}
            xrModelFiles={data?.xrModel?.xrModelFiles}
          />
        </Scene>
      </Engine>
    </div>
  )
}

export default EntityBabylonView
