import { useState } from 'react'

const validateEmailFormat = email => {
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

  const urlValidation = EMAIL_REGEX.test(email)
  return urlValidation
}

export function useForm(initialValue = {}) {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // TODO: implementar validación con un borde rojo
    if (!validateEmailFormat(formData.email)) return alert('Email inválido!')

    const result = await fetch('/api/send', {
      method: 'POST',
    })
    const data = await result.json()
    console.log(data)

    setFormData(initialValue)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}
