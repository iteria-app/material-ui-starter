type paginateOptions = {
  data: any
  countRows: number
  hideNextButton: boolean
  setCountToRows: (state: number) => void
  setHideNextButton: (state: boolean) => void
  page: number
  pageSize: number
}

export const controlNextButton = (options: paginateOptions) => {
  if (options.data.length <= options.pageSize) {
    hideNextButtonPagination(
      options.hideNextButton,
      options.setCountToRows,
      options.setHideNextButton,
      options.page
    )
  } else {
    showNextButtonPagination(
      options.countRows,
      options.setCountToRows,
      options.setHideNextButton,
      options.pageSize
    )
  }
}

const hideNextButtonPagination = (
  hideNextButton: boolean,
  setCountToRows: (state: number) => void,
  setHideNextButton: (state: boolean) => void,
  page: number
) => {
  if (hideNextButton === false) {
    setCountToRows(page)
  }
  setHideNextButton(true)
}

const showNextButtonPagination = (
  countRows: number,
  setCountToRows: (state: number) => void,
  setHideNextButton: (state: boolean) => void,
  pageSize: number
) => {
  if (!setCountToRows) return
  setCountToRows(countRows + pageSize)
  setHideNextButton(false)
}

export const controlSiblings = (
  data: any,
  pageSize: number,
  page: number,
  setSiblingCount: (state: number) => void
) => {
  if (data.length < pageSize * 2 && page === 1) {
    return setSiblingCount(0)
  }
  return setSiblingCount(1)
}
