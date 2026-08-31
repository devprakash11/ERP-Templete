import React from 'react'
import { Card } from '../../components/common/Card'

export const InventoryDashboard = () => {
  const lowStockItems = [
    { item: 'Stationery', quantity: 15, minStock: 30, unit: 'pieces' },
    { item: 'Cleaning Supplies', quantity: 8, minStock: 20, unit: 'sets' },
  ]

  const stockInHistory = [
    { item: 'Books', quantity: 100, date: '2024-01-15', supplier: 'ABC Publishers', unit: 'pieces' },
    { item: 'Stationery', quantity: 50, date: '2024-01-10', supplier: 'Office Depot', unit: 'pieces' },
  ]

  const stockOutHistory = [
    { item: 'Notebooks', quantity: 20, date: '2024-01-12', reason: 'Student Issue', unit: 'pieces' },
    { item: 'Pens', quantity: 30, date: '2024-01-14', reason: 'Distribution', unit: 'pieces' },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-gray-50 p-4">
          <h3 className="text-sm font-medium text-text-secondary">Items</h3>
          <p className="mt-1 text-2xl font-bold text-primary">0</p>
        </div>
        <div className="rounded-lg border border-border bg-gray-50 p-4">
          <h3 className="text-sm font-medium text-text-secondary">Categories</h3>
          <p className="mt-1 text-2xl font-bold text-primary">0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Low Stock Alert</h3>
          <div className="space-y-3">
            {lowStockItems.map((item) => (
              <div key={item.item} className="rounded-md border border-red-200 bg-red-50 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-text-primary">{item.item}</span>
                  <span className="text-right text-sm text-red-600">{item.quantity} {item.unit}</span>
                </div>
                <p className="mt-1 text-xs text-red-600">Min Stock: {item.minStock} {item.unit}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Stock In History</h3>
          <div className="space-y-3">
            {stockInHistory.map((stock) => (
              <div key={`${stock.item}-${stock.date}`} className="rounded-md border border-primary/10 bg-primary/5 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-text-primary">{stock.item}</span>
                  <span className="text-sm text-gray-500">{stock.date}</span>
                </div>
                <p className="mt-1 text-sm text-primary">{stock.quantity} {stock.unit}</p>
                <p className="text-xs text-gray-500">Supplier: {stock.supplier}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Stock Out History</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {stockOutHistory.map((stock) => (
              <div key={`${stock.item}-${stock.date}`} className="rounded-md border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-text-primary">{stock.item}</span>
                  <span className="text-sm text-gray-500">{stock.date}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{stock.quantity} {stock.unit}</p>
                <p className="text-xs text-gray-500">Reason: {stock.reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default InventoryDashboard
