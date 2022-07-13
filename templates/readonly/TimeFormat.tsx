import { useIntl } from "react-intl"


export const TimeFormat = ({ value }) => {
  const intl = useIntl()
  return value.row.field ? intl.formatTime(value.row.field) : ''
}