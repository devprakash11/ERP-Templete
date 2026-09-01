import React from 'react'
import { Icon } from '@heroicons/react/24/outline'

export const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" viewBox="0 0 24 24">
            <path d="M17.657 14.447c-.438 1.071-1.03.997-1.633.553l-.876-.876a1.997 1.997 0 0 0 .11-2.819c-.272-.68-.897-.57-1.328.197L5.375 12.04a1.996 1.996 0 0 0 0 2.831l1.184.687a1.998 1.998 0 0 0 .698.027c.676.417 1.337.655 2.018.68l.876.876a1.998 1.998 0 0 0 2.443-.966c.976-.585.914-1.373-.11-2.818l-.876-.876c-.589.431-1.181.853-1.633.554z" />
          </Icon>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-text-primary line-clamp-1">{student.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-1">{student.email}</p>
        </div>
      </div>
    </div>
  )
}