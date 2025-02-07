"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Morning Exercise", completed: false },
    { id: 2, name: "Read for 30 minutes", completed: false },
    { id: 3, name: "Meditate", completed: false },
  ])
  const [currency, setCurrency] = useState(0)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completeTasks = () => {
    const completedCount = tasks.filter((task) => task.completed).length
    const earnedCurrency = completedCount * 10 // 10 coins per completed task
    setCurrency(currency + earnedCurrency)
    setTasks(tasks.map((task) => ({ ...task, completed: false })))
    alert(`You earned ${earnedCurrency} coins!`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Daily Tasks</h1>
      <p className="mb-4">Current Balance: {currency} coins</p>
      <Card>
        <CardHeader>
          <CardTitle>Your Tasks for Today</CardTitle>
        </CardHeader>
        <CardContent>
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-2 mb-2">
              <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
              <label
                htmlFor={`task-${task.id}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.name}
              </label>
            </div>
          ))}
          <Button className="mt-4" onClick={completeTasks}>
            Complete Tasks
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

