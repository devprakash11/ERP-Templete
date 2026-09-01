import React from 'react'

export const StudentFilters = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <h4 className="text-sm font-medium text-text-secondary mb-3">Filters</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          <option>All Classes</option>
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
          <option>Grade 4</option>
          <option>Grade 5</option>
        </select>
        <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          <option>All Sections</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
  )
}