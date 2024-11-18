'use client';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggleStar, onToggleCompleted, onDelete }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
    className={`flex items-center space-x-2 p-2 rounded-md mb-2 ${
      task.completed ? 'bg-gray-100' : 'bg-white'
    } shadow-sm`}>
    <Checkbox
      checked={task.completed}
      onCheckedChange={() => onToggleCompleted(task.id)} />
    <div
      className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}>
      <div className="font-medium">{task.title}</div>
      <div className="text-sm text-gray-500">{task.project}</div>
    </div>
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-1">
        {task.assignees.map((assignee, index) => (
          <Avatar key={index} className="h-6 w-6 border-2 border-background">
            <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${assignee}`} />
            <AvatarFallback>{assignee[0]}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={`${task.starred ? 'text-yellow-400' : 'text-gray-400'} transition-colors duration-200`}
        onClick={() => onToggleStar(task.id)}>
        <Star className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
        onClick={() => onDelete(task.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  </motion.div>
)

const TaskList = ({ title, tasks, onToggleStar, onToggleCompleted, onDelete }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between py-2">
      <CardTitle className="text-md font-medium">{title}</CardTitle>
      <Badge variant="outline" className="text-xs">
        {tasks.length} tasks
      </Badge>
    </CardHeader>
    <CardContent className="pt-0">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleStar={onToggleStar}
            onToggleCompleted={onToggleCompleted}
            onDelete={onDelete} />
        ))}
      </AnimatePresence>
    </CardContent>
  </Card>
)

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Design new landing page', project: 'Taskiro', assignees: ['TG', 'WR'], completed: false, starred: true },
    { id: '2', title: 'Implement user authentication', project: 'Project 24', assignees: ['TG'], completed: false, starred: true },
    { id: '3', title: 'Optimize database queries', project: 'Wheelbarrow', assignees: ['TG', 'WR', 'JD'], completed: true, starred: false },
    { id: '4', title: 'Create mobile app wireframes', project: 'Taskiro', assignees: ['TG', 'WR', 'JD'], completed: false, starred: true },
    { id: '5', title: 'Write API documentation', project: 'Omega', assignees: ['TG', 'WR'], completed: true, starred: false },
    { id: '6', title: 'Set up CI/CD pipeline', project: 'Taskiro', assignees: ['TG', 'WR'], completed: false, starred: true },
    { id: '7', title: 'Conduct user testing', project: 'Personal', assignees: ['TG'], completed: false, starred: true },
    { id: '8', title: 'Refactor legacy code', project: 'Taskiro', assignees: ['TG'], completed: true, starred: false },
    { id: '9', title: 'Implement dark mode', project: 'Taskiro', assignees: ['TG'], completed: true, starred: false },
    { id: '10', title: 'Optimize image loading', project: 'Taskiro', assignees: ['JD'], completed: false, starred: true },
    { id: '11', title: 'Add multi-language support', project: 'Taskiro', assignees: ['WR'], completed: false, starred: true },
    { id: '12', title: 'Create data visualization dashboard', project: 'Project', assignees: ['TG', 'WR', 'JD'], completed: false, starred: true },
  ])

  const handleToggleStar = (id) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, starred: !task.starred } : task))
  }

  const handleToggleCompleted = (id) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const handleDelete = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    inProgress: tasks.filter(t => !t.completed).length,
    late: 4 // This is hardcoded for now
  }

  return (
    (<div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#e6ae9e]">Tasks</h1>
          {/* <div className="flex items-center space-x-2">
            <h2 className="text-lg text-muted-foreground">All tasks</h2> */}
            {/* <Badge variant="outline" className="text-xs">
              Taskiro project quests
            </Badge> */}
          {/* </div> */}
        </div>
      </div>
      <Card className="mb-6">
        <CardContent className="flex justify-between items-center p-4">
          <div>
            <div className="text-sm font-medium">Total:</div>
            <div className="text-2xl font-bold">{stats.total}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Completed:</div>
            <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
          </div>
          <div>
            <div className="text-sm font-medium">In progress:</div>
            <div className="text-2xl font-bold text-orange-500">{stats.inProgress}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Late:</div>
            <div className="text-2xl font-bold text-red-500">{stats.late}</div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TaskList
          title="To do"
          tasks={tasks.filter(t => !t.completed)}
          onToggleStar={handleToggleStar}
          onToggleCompleted={handleToggleCompleted}
          onDelete={handleDelete} />
        <TaskList
          title="Completed"
          tasks={tasks.filter(t => t.completed)}
          onToggleStar={handleToggleStar}
          onToggleCompleted={handleToggleCompleted}
          onDelete={handleDelete} />
      </div>
    </div>)
  );
}

export default TaskManagement