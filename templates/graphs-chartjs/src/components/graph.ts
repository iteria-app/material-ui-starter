import { colors } from '@mui/material'

const findNumberFields = (
  fields: object,
  dataPaths: string[],
  fieldPath: string = ''
) => {
  for (const field of Object.keys(fields)) {
    if (typeof fields[field] === 'object') {
      const actualFieldPath =
        fieldPath === '' ? `${field}` : (fieldPath += `.${field}`)
      findNumberFields(fields[field], dataPaths, actualFieldPath)
    }
    if (typeof fields[field] === 'number') {
      const actualFieldPath =
        fieldPath === '' ? `${field}` : (fieldPath += `.${field}`)
      dataPaths[dataPaths.length] = actualFieldPath
    }
  }
}

const createDataset = (data: { [key: string]: any }[], fieldPath: string) => {
  return data.map((row) => getObjectProperty(row, fieldPath))
}

const getObjectProperty = (
  data: { [key: string]: object | number },
  fieldPath: string
) => {
  const fieldPathArray = fieldPath.split('.')

  let actualProperty: object | number = data
  for (const field of fieldPathArray) {
    if (!actualProperty[field]) return
    actualProperty = actualProperty[field]
  }

  if (typeof actualProperty != 'object') return actualProperty
}

const getChartColor = (i: number, themeColors: any[]) =>
  (themeColors?.[i] as any) ?? colors.grey[100]

export const getChartData = (data: object[], themeColors: any[]) => {
  const dataPaths: string[] = []
  let datasets: {
    data: (number | undefined)[]
    label: string
    backgroundColor: string
  }[] = []
  let labels: string[] = []

  if (data?.length) {
    findNumberFields(data[0], dataPaths)

    if (!dataPaths.length) return undefined

    dataPaths.forEach((dataPath, i) => {
      datasets = [
        ...datasets,
        {
          data: createDataset(data, dataPath),
          label: dataPath,
          backgroundColor: getChartColor(i, themeColors).main ?? '#777',
        },
      ]
    })

    labels = data.map((row) => {
      const createdAt = Object.keys(row).find(
        (key) => key === 'createdAt' || key === 'created_at'
      )

      if (createdAt) return row[createdAt]

      const stringField = Object.keys(row).find(
        (key) => typeof row[key] === 'string' && key != 'id'
      )

      if (stringField) return row[stringField]

      return 'label'
    })
  }

  return {
    datasets,
    labels,
  }
}
