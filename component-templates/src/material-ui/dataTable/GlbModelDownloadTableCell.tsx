import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { ModelView } from '../../../material-ui'
import { FileDownloadTableCell } from './FileDownloadTableCell'
type Maybe<T> = T | null
interface IGlbModelDownloadTableCellProps {
  tableCellStyle: any
  item: any
  fields: any
  signedUrls: Maybe<string>[]
}

export const GlbModelDownloadTableCell: React.FC<IGlbModelDownloadTableCellProps> =
  ({ tableCellStyle, item, fields, signedUrls }) => {
    if (fields) {
      const glbPaths = fields.filter((field: { name: string }) =>
        field.name.match(/.*glbPath$/i)
      )
      return (
        <>
          <Box display="flex" flexDirection="row">
            {glbPaths.map((glbPath: any) => {
              if (item[glbPath.name]) {
                const nameTag = glbPath.name.replace(/(Path$)/, '')
                return (
                  <>
                    <Box>
                      <Typography>{nameTag}</Typography>
                      <ModelView
                        glbSource={
                          signedUrls &&
                          signedUrls.find(
                            (url) => url && url.includes(item[glbPath.name])
                          )
                        }
                        thumbnailSource={
                          signedUrls &&
                          signedUrls.find(
                            (url) =>
                              url && url.includes(item.modelThumbnailPath)
                          )
                        }
                      />

                      {item[glbPath.name] && (
                        <FileDownloadTableCell
                          tableCellStyle={tableCellStyle}
                          filePath={
                            signedUrls &&
                            signedUrls.find(
                              (url) => url && url.includes(item[glbPath.name])
                            )
                          }
                          fileName={item.name.concat('_', nameTag, '.glb')}
                        />
                      )}
                    </Box>
                  </>
                )
              }
            })}
          </Box>
        </>
      )
    }
    return <></>
  }
