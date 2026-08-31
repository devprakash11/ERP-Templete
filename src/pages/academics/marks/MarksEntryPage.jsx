import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../common'

export const MarksEntryPage = () => {
  const navigate = useNavigate()

  const schema = z.object({
    studentId: z.string().min(1, 'Student required'),
    subject: z.string().min(1, 'Subject required'),
    marksObtained: z.number().min(0).max(100, 'Must be 0-100'),
    totalMarks: z.number().min(1, 'Total marks required'),
    examType: z.string().min(1, 'Exam type required'),
    date: z.string().min(1, 'Date required'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const validated = schema.safeParse(data)
    if (validated.success) {
      alert('Marks recorded successfully')
    } else {
      alert('Please fill all required fields correctly')
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Marks Entry</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Student</label>
            <select
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Select Student</option>
              <option value="1">John Doe - Grade 10</option>
              <option value="2">Jane Smith - Grade 10</option>
              <option value="3">Michael Brown - Grade 9</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <select
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Select Subject</option>
              <option value="Math">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Marks Obtained</label>
            <input
              {...register('marksObtained')}
              type="number"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              min={0}
              max={100}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Total Marks</label>
            <input
              {...register('totalMarks')}
              type="number"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              min={1}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Exam Type</label>
            <select
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Select Exam Type</option>
              <option value="Midterm">Midterm Exam</option>
              <option value="Final">Final Exam</option>
              <option value="Quarterly">Quarterly Exam</option>
              <option value="Monthly">Monthly Test</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              {...register('date')}
              type="date"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" onClick={() => navigate('/')} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Cancel
          </Button>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Submit Marks
          </button>
        </div>
      </form>
    </div>
  )
}