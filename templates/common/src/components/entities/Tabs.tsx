import React, { useMemo } from 'react'
import { Tabs as MuiTabs, Tab, Typography } from '@mui/material'
import {
  stringPrettyCapitalize,
  TabData,
  Translate,
} from '@iteria-app/component-templates'
import { useLocation } from 'react-router-dom'

type Props = {
  tabs?: TabData[]
  selectedTab: string
  handleTabChange: (_: any, value: any) => void
}

const Tabs = ({ tabs, selectedTab, handleTabChange }: Props): JSX.Element => {
  const location = useLocation()
  const isCreate = useMemo(
    () => location.pathname.split('/').includes('create'),
    [location]
  )
  return (
    <>
      {tabs && tabs?.length > 1 && selectedTab && !isCreate ? (
        <>
          <MuiTabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Entity views"
          >
            {tabs?.map((tab) => {
              return (
                <Tab
                  value={tab.tabValue}
                  key={stringPrettyCapitalize(tab.name)}
                  icon={tab?.icon ? <tab.icon /> : <></>}
                  iconPosition={'start'}
                  data-test-id={`list-tab-${tab.name}`}
                  label={
                    <Typography>
                      <Translate
                        entityName={tab?.name}
                        defaultMessage={tab?.name}
                      />
                    </Typography>
                  }
                />
              )
            })}
          </MuiTabs>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Tabs
