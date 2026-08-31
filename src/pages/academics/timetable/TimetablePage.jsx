import React from 'react'

export const TimetablePage = () => {
  const timetable = [
    ['Monday', 'Math', 'Physics', 'Chemistry', 'English', 'Physical Ed'],
    ['Tuesday', 'English', 'Math', 'Physics', 'Chemistry', 'Biology'],
    ['Wednesday', 'Chemistry', 'English', 'Math', 'Physics', 'Computer Sci'],
    ['Thursday', 'Physical Ed', 'Biology', 'English', 'Math', 'Physics'],
    ['Friday', 'Math', 'Chemistry', 'Biology', 'English', 'Physical Ed'],
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Timetable Management</h2>
        <p className="mt-1 text-sm text-gray-500">View the weekly class timetable and scheduled periods.</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] bg-white">
          <thead>
            <tr className="border-b border-border bg-gray-50">
              {['Day', 'Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5'].map((heading) => (
                <th key={heading} className="p-3 text-left text-xs font-medium text-text-secondary">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.map((row) => (
              <tr key={row[0]} className="border-b border-border last:border-b-0 hover:bg-gray-50">
                {row.map((value, index) => (
                  <td key={`${row[0]}-${index}`} className={`p-3 text-sm ${index === 0 ? 'font-medium text-text-primary' : 'text-text-secondary'}`}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TimetablePage
