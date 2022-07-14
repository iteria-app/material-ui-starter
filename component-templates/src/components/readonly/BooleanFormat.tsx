import Checkbox from "@mui/material/Checkbox"
import React from "react"

export const BooleanFormat = ({ value }) => {
  return value.row.FIELD ? <Checkbox defaultChecked /> : <Checkbox />
}