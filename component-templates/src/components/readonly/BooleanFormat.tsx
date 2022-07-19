import Checkbox from "@mui/material/Checkbox"
import React from "react"

export const BooleanFormat = ({ value }) => {
  return value.row.field ? <Checkbox defaultChecked /> : <Checkbox />
}