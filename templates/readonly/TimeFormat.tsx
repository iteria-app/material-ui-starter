import { useIntl } from "react-intl"


export const TimeFormat = ({ value }) => {
  const intl = useIntl()
  return value.row.FIELD ? intl.formatTime(value.row.FIELD) : ''
}