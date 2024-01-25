import { useState } from 'react'
import { toast } from 'sonner'
import { validateEmailFormat } from '@/utils/utils'

export function useForm(initialValue = {}) {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    //  TODO: implementar validación con un borde rojo
    //* TODO: implementar validación con un borde rojo
    //! TODO: implementar validación con un borde rojo

    if (!validateEmailFormat(formData.email)) {
      return toast.error('Invalid email!')
    }

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
