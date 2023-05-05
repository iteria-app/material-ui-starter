import React from 'react'
import InfoSection, {
  Direction,
  LandingButton,
} from '../../components/InfoSection'

const HomePage: React.FC = () => {
  const generatePage = () => {
    window.dispatchEvent(new CustomEvent('iteria-open-generate-page-wizzard'))
  }
  return (
    <div style={{ marginTop: '24px' }}>
      <InfoSection
        childrenDirection={Direction.Right}
        heading="lowcode.pageGenerator"
        text="lowcode.pageGenrator.text"
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/thumbnail.png"
          />
        }
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            dataTestId={'generate-page-landing-page-button'}
            text={'lowcode.pageGenerator.button'}
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.template'}
        text={'lowcode.template.text'}
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/templates.png"
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Right}
        heading={'lowcode.addField'}
        text={'lowcode.addField.text'}
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/addfield.png"
          />
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
            dataTestId={'hasuraPostgresPostGIS-landing-page-button'}
          />
        }
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/gql.png"
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.ERD'}
        text={'lowcode.ERD.text'}
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/erd.png"
          />
        }
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            text={'lowcode.ERD.button'}
            dataTestId={'ERD-landing-page-button'}
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Right}
        heading={'lowcode.translate'}
        text={'lowcode.translate.text'}
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/translate.png"
          />
        }
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            text={'lowcode.translate.button'}
            dataTestId={'translate-landing-page-button'}
          />
        }
      />
      <InfoSection
        childrenDirection={Direction.Left}
        heading={'lowcode.theme'}
        text={'lowcode.theme.text'}
        mediaSlot={
          <img
            style={{ width: '300px', borderRadius: '5px' }}
            src="/static/theme.png"
          />
        }
        buttonSlot={
          <LandingButton
            onClick={generatePage}
            text={'lowcode.theme.button'}
            dataTestId={'theme-landing-page-button'}
          />
        }
      />
    </div>
  )
}
export default HomePage
