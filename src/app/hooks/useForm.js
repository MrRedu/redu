import { useState } from 'react'
import { toast } from 'sonner'

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

    const formDataObj = new FormData()
    for (const [key, value] of Object.entries(formData)) {
      formDataObj.append(key, value)
    }

    await fetch('/api/send', {
      method: 'POST',
      body: formDataObj,
    })

    toast.success('Email sent successfully!')

    setFormData(initialValue)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}
