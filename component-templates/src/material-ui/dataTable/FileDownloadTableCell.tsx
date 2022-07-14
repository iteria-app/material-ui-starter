import React from 'react'
import { FileDownloadRounded } from '@mui/icons-material'
import { IconButton, TableCell, Typography } from '@mui/material'
import { downloadAs } from '@iteria-app/s3-graphql-client/src/components/uppy/uppy'

interface IFileDownloadTableCellProps {
  tableCellStyle: any
  filePath?: string | null
  fileName: string
}

export const FileDownloadTableCell: React.FC<IFileDownloadTableCellProps> = ({
  tableCellStyle,
  filePath,
  fileName,
}) => {
  let url: string | undefined | null
  if (filePath) {
    filePath.match(/^HTTPS:\/\//i) ? (url = filePath) : ''
    filePath.match(/^HTTP:\/\//i) ? (url = filePath) : ''
  }

  return (
    <TableCell padding="none" style={{ ...tableCellStyle, width: 50 }}>
      <IconButton
        color="primary"
        onClick={() => {
          url ? downloadAs(url, fileName) : ''
        }}
      >
        <div>
          {<FileDownloadRounded />}
          <Typography variant="h5">
            {fileName.match(/\.[0-9a-z]{1,4}$/i)}
          </Typography>
        </div>
      </IconButton>
    </TableCell>
  )
}
