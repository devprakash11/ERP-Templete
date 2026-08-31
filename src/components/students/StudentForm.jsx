import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'

const studentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  class: z.string().min(1, 'Class is required'),
  section: z.string().min(1, 'Section is required'),
  admissionDate: z.string().optional(),
  contactNumber: z.string().optional(),
  address: z.string().optional(),
})

export const StudentForm = ({ onSubmit, isEdit = false, studentData = null }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmitHandler = (data) => {
    const validated = studentSchema.safeParse(data)
    if (validated.success) {
      onSubmit(validated.data)
      if (isEdit) {
        alert('Student updated successfully')
        navigate('/students')
      } else {
        alert('Student added successfully')
        navigate('/students')
      }
    } else {
      alert('Please fill all required fields correctly')
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl">
      <h2 className="text-2xl font-bold text-text-primary mb-4">
        {isEdit ? 'Edit Student' : 'Add Student'}
      </h2>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              {...register('name')}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary {${
                errors.name && 'border-red-500'
              }}"
              required
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary {${
                errors.email && 'border-red-500'
              }}"
              required
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <input
              {...register('class')}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Section</label>
            <input
              {...register('section')}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Admission Date</label>
            <input
              {...register('admissionDate')}
              type="date"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              {...register('contactNumber')}
              type="tel"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            {...register('address')}
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            rowsMax={10}
          ></textarea>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" onClick={() => navigate('/students')} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Cancel
          </Button>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
            {isEdit ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}