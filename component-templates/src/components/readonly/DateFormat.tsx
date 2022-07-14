import { useIntl } from "react-intl"


export const DateFormat = ({ value }) => {
  const intl = useIntl()
  return value.row.FIELD ? intl.formatDate(value.row.FIELD) : ''
}