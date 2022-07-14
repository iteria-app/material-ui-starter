import { useIntl } from "react-intl"


export const DateTimeFormat = ({ value }) => {
  const intl = useIntl()
  return `${intl.formatDate(value.row.FIELD)} ${intl.formatTime(value.row.FIELD)}`
}