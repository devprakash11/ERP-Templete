import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../components/common/Button'

const studentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  class: z.string().min(1, 'Class is required'),
  section: z.string().min(1, 'Section is required'),
  admissionDate: z.string().optional(),
  contactNumber: z.string().optional(),
  address: z.string().optional(),
})

export const AddStudent = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const validated = studentSchema.safeParse(data)
    if (validated.success) {
      alert('Student added successfully')
      navigate('/students')
    } else {
      alert('Please fill all required fields correctly')
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-4 text-2xl font-bold text-text-primary">Add Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4 grid grid-cols-1 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Full Name</label>
            <input {...register('name')} className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-border'}`} required />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input {...register('email')} type="email" className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-border'}`} required />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Class</label>
            <input {...register('class')} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
            {errors.class && <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Section</label>
            <input {...register('section')} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
            {errors.section && <p className="mt-1 text-sm text-red-600">{errors.section.message}</p>}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Admission Date</label>
            <input {...register('admissionDate')} type="date" className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Contact Number</label>
            <input {...register('contactNumber')} type="tel" className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Address</label>
          <textarea {...register('address')} rows={3} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <div className="mt-6 flex flex-col-reverse justify-end gap-3 sm:flex-row">
          <Button type="button" variant="outline" onClick={() => navigate('/students')} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button type="submit" className="w-full sm:w-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddStudent
