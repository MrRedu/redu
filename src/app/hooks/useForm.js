import { useEffect, useState } from 'react'

const validateEmailFormat = email => {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const urlValidation = EMAIL_REGEX.test(email)
  return urlValidation
}

export function useForm(initialValue = {}) {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // TODO: implementar validación con un borde rojo
    if (!validateEmailFormat(formData.email)) alert('Email inválido!')

    console.table(formData)
  }

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}
