import { useState } from 'react'
import { toast } from 'sonner'
import { validateEmailFormat } from '@/utils/utils'

const formDataInitialState = {
  name: '',
  email: '',
  companyName: '',
  services: [
    {
      id: '1',
      name: 'Landing page',
      value: 'landing-page',
      checked: false,
    },
    {
      id: '2',
      name: 'Website development',
      value: 'website-development',
      checked: false,
    },
    {
      id: '3',
      name: 'E-commerce',
      value: 'e-commerce',
      checked: false,
    },
    {
      id: '4',
      name: 'Consulting',
      value: 'consulting',
      checked: false,
    },
  ],
  message: '',
}

export function useForm() {
  const [formData, setFormData] = useState(formDataInitialState)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleServiceChange = id => {
    setFormData(prev => {
      const updatedServices = prev.services.map(service => {
        if (service.id === id) {
          return { ...service, checked: !service.checked }
        }
        return service
      })
      return { ...prev, services: updatedServices }
    })
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
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        const checkedItems = formData[key]
          .filter(item => item.checked)
          .map(item => item.name)
        const checkedItemsAsString = checkedItems.join(', ')
        formDataObj.append(key, checkedItemsAsString)
      } else {
        formDataObj.append(key, formData[key])
      }
    }

    await fetch('/api/send', {
      method: 'POST',
      body: formDataObj,
    })

    toast.success('Email sent successfully!')

    setFormData(formDataInitialState)
  }

  return {
    formData,
    handleChange,
    handleServiceChange,
    handleSubmit,
  }
}
