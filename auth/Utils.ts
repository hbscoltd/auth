export const inputChangeService = ({
  evt,
  formData,
  setFormData,
  getString,
}: {
  evt: any
  formData: any
  setFormData: any
  getString?: boolean
}) => {
  const target = evt.target
  const name = target.id
  let value

  if (target.type === 'checkbox') {
    value = target.checked
  } else if (target.type === 'number' || target.type === 'select-one') {
    if (target.value === '') {
      value = ''
    } else {
      value = target.value
      if (getString) {
        value = target.value
      } else {
        value = parseFloat(target.value)
      }
    }
  } else {
    value = target.type === 'text' ? target.value : target.value
  }

  setFormData({
    ...formData,
    [name]: value,
  })
}

export const handleEnterAction = (event: any, handleSubmit: any) => {
  if (event.keyCode === 13) {
    handleSubmit()
  }
}
