import React from 'react'
import InfoSection, {Direction, LandingButton,} from '../../components/InfoSection'

const HomePage: React.FC = () => {
  const generatePage = () => {
    window.postMessage("GENERATE_PAGE", '*')
  }
  return (
    <div style={{ marginTop: '24px' }}>
      <InfoSection
        childrenDirection={Direction.Right}
        heading="lowcode.pageGenerator"
        text="lowcode.pageGenrator.text"
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            text={'lowcode.pageGenerator.button'}
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.template'}
        text={'lowcode.template.text'}
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
      />
      <InfoSection
        childrenDirection={Direction.Right}
        heading={'lowcode.addField'}
        text={'lowcode.addField.text'}
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.WYSIWYG'}
        text={'lowcode.WYSIWYG.text'}
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
      />
      <InfoSection
        childrenDirection={Direction.Right}
        heading={'lowcode.hasuraPostgresPostGIS'}
        text={'lowcode.hasuraPostgresPostGIS.text'}
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            text={'lowcode.setGraphQlEndpoint.button'}
          />
        }
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.ERD'}
        text={'lowcode.ERD.text'}
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
        buttonSlot={
          <LandingButton onClick={generatePage} text={'lowcode.ERD.button'} />
        }
      />
      <InfoSection
        childrenDirection={Direction.Right}
        heading={'lowcode.translate'}
        text={'lowcode.translate.text'}
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            text={'lowcode.translate.button'}
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.theme'}
        text={'lowcode.theme.text'}
        mediaSlot={
          <img style={{ width: '300px' }} src="/static/placeholder.png" />
        }
        buttonSlot={
          <LandingButton onClick={generatePage} text={'lowcode.theme.button'} />
        }
      />
    </div>
  )
}
export default HomePage
