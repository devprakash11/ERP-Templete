import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '../../common'

export const InventoryDashboard = () => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const lowStockItems = [
    { item: 'Stationery', quantity: 15, minStock: 30, unit: 'pieces' },
    { item: 'Cleaning Supplies', quantity: 8, minStock: 20, unit: 'sets' },
  ]

  const stockInHistory = [
    { item: 'Books', quantity: 100, date: '2024-01-15', supplier: 'ABC Publishers' },
    { item: 'Stationery', quantity: 50, date: '2024-01-10', supplier: 'Office Depot' },
  ]

  const stockOutHistory = [
    { item: 'Notebooks', quantity: 20, date: '2024-01-12', reason: 'Student Issue' },
    { item: 'Pens', quantity: 30, date: '2024-01-14', reason: 'Distribution' },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Items</h3>
          <p className="text-xl font-bold text-primary">{items.length}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Categories</h3>
          <p className="text-xl font-bold text-primary">{categories.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Low Stock Alert</h3>
            <div className="space-y-3">
              {lowStockItems.map((item) => (
                <div key={item.item} className="p-3 rounded-md bg-red-50 border border-red-200">
                  <div className="flex items-between justify-between">
                    <span className="font-medium">{item.item}</span>
                    <span className="text-sm text-red-600">{item.quantity} {item.unit}</span>
                  </div>
                  <p className="text-xs text-red-600">Min Stock: {item.minStock} {item.unit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Stock In History</h3>
            <div className="space-y-3">
              {stockInHistory.map((stock) => (
                <div key={stock.item} className="p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="flex items-between justify-between">
                    <span className="font-medium">{stock.item}</span>
                    <span className="text-sm text-gray-500">{stock.date}</span>
                  </div>
                  <p className="text-sm text-primary">{stock.quantity} {stock.unit}</p>
                  <p className="text-xs text-gray-500">Supplier: {stock.supplier}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Stock Out History</h3>
            <div className="space-y-3">
              {stockOutHistory.map((stock) => (
                <div key={stock.item} className="p-3 rounded-md bg-gray-50 border border-gray-200">
                  <div className="flex items-between justify-between">
                    <span className="font-medium">{stock.item}</span>
                    <span className="text-sm text-gray-500">{stock.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stock.quantity} {stock.unit}</p>
                  <p className="text-xs text-gray-500">Reason: {stock.reason}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}