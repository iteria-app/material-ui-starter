import React from 'react'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMapEvents,
  LayersControl,
  LayerGroup,
} from 'react-leaflet'
import {
  FilterProps, geoFieldsIntersectFilter,
  getAllGeoFields,
  getGeoFields,
} from '@iteria-app/component-templates'
import { useNavigate } from 'react-router-dom'
import { EntityFragment } from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'

export interface EntityListProps {
  data: EntityFragment[] | null
  filterProps: FilterProps
}

const EntityListLeaflet: React.FC<EntityListProps> = ({
  data,
  filterProps,
}) => {
  const navigate = useNavigate()
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields
  const geoFields = getGeoFields(data?.[0], entityIntrospection, true)
  const EventListeners = ({ filterProps }: { filterProps: FilterProps }) => {
    useMapEvents({
      load(event) {
        const bounds = event.target.getBounds()
        const filter = geoFieldsIntersectFilter(bounds, data, geoFields)
        filterProps.onFilter(filter ? { _or: filter } : {})
      },
      moveend(event) {
        localStorage.setItem("mapPosition", JSON.stringify(event.target.getCenter()))
        const bounds = event.target.getBounds()
        const filter = geoFieldsIntersectFilter(bounds, data, geoFields)
        filterProps.onFilter(filter ? { _or: filter } : {})
      },
      zoomend(event) {
        localStorage.setItem("mapZoom", event.target.getZoom())
        const bounds = event.target.getBounds()
        const filter = geoFieldsIntersectFilter(bounds, data, geoFields)
        filterProps.onFilter(filter ? { _or: filter } : {})
      }
    })
    return null
  }
  const allGeoFields = getAllGeoFields(data, entityIntrospection)

  return (
    <>
      <MapContainer
        center={JSON.parse(localStorage.getItem("mapPosition") ?? "[45.74739, -105]")}
        zoom={parseInt(localStorage.getItem("mapZoom") ?? "6")}
        scrollWheelZoom={true}
        style={{ height: '90vh' }}
      >
        <EventListeners filterProps={filterProps} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          {allGeoFields?.map((entity) => {
            console.log(allGeoFields.length)
            return (
              entity && (
                <LayersControl.Overlay
                  checked
                  name={entity?.name}
                  key={entity?.name}
                >
                  <LayerGroup>
                    {entity?.data?.map((e) => {
                      return (
                        e && (
                          <GeoJSON
                            key={e?.id}
                            data={e?.data}
                            onEachFeature={(_, layer) => {
                              layer.on({ click: () => navigate(e?.id) })
                            }}
                          />
                        )
                      )
                    })}
                  </LayerGroup>
                </LayersControl.Overlay>
              )
            )
          })}
        </LayersControl>
      </MapContainer>
      {/* TBD */}
      {/* <EntityMapItem data={entity} key={entity?.id}/> */}
    </>
  )
}

export default EntityListLeaflet
