import { useIntl } from "react-intl"


export const DateFormat = ({ value }) => {
  const intl = useIntl()
  return value.row.field ? intl.formatDate(value.row.field) : ''
}