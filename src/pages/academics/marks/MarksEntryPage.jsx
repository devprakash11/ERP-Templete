import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../components/common/Button'

export const MarksEntryPage = () => {
  const navigate = useNavigate()

  const schema = z.object({
    studentId: z.string().min(1, 'Student required'),
    subject: z.string().min(1, 'Subject required'),
    marksObtained: z.coerce.number().min(0).max(100, 'Must be 0-100'),
    totalMarks: z.coerce.number().min(1, 'Total marks required'),
    examType: z.string().min(1, 'Exam type required'),
    date: z.string().min(1, 'Date required'),
  })

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const validated = schema.safeParse(data)
    if (validated.success) {
      alert('Marks recorded successfully')
    } else {
      alert('Please fill all required fields correctly')
    }
  }

  return (
    <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-1 text-2xl font-bold text-text-primary">Marks Entry</h2>
      <p className="mb-6 text-sm text-gray-500">Enter and record student examination marks.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Student</label>
            <select {...register('studentId')} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select Student</option>
              <option value="1">John Doe - Grade 10</option>
              <option value="2">Jane Smith - Grade 10</option>
              <option value="3">Michael Brown - Grade 9</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Subject</label>
            <select {...register('subject')} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select Subject</option>
              <option value="Math">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Marks Obtained</label>
            <input {...register('marksObtained')} type="number" min={0} max={100} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Total Marks</label>
            <input {...register('totalMarks')} type="number" min={1} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Exam Type</label>
            <select {...register('examType')} className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select Exam Type</option>
              <option value="Midterm">Midterm Exam</option>
              <option value="Final">Final Exam</option>
              <option value="Quarterly">Quarterly Exam</option>
              <option value="Monthly">Monthly Test</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Date</label>
            <input {...register('date')} type="date" className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button type="submit">
            Submit Marks
          </Button>
        </div>
      </form>
    </div>
  )
}

export default MarksEntryPage
