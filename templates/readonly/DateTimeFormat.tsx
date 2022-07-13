import { useIntl } from "react-intl"


export const DateTimeFormat = ({ value }) => {
  const intl = useIntl()
  return `${intl.formatDate(value.row.field)}, ${intl.formatTime(value.row.field)}`
}