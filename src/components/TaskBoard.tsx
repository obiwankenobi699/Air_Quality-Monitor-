
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import TaskColumn, { Column } from './TaskColumn';
import { Task } from './TaskCard';

// Initial data for blue carbon credit listings
const initialColumns: Column[] = [
  {
    id: 'listed',
    title: 'Active Listings',
    color: 'muted',
    tasks: [
      {
        id: 'bc1',
        title: 'Mangrove Restoration - Thailand',
        description: '2,500 tCO2e from coastal mangrove reforestation project',
        tag: { color: 'blue', label: 'Mangroves' },
        dueDate: '$45/credit',
        assignees: 1,
        progress: { completed: 1500, total: 2500 }
      },
      {
        id: 'bc2',
        title: 'Seagrass Conservation - Australia',
        description: '1,800 tCO2e from seagrass meadow protection initiative',
        tag: { color: 'accent', label: 'Seagrass' },
        dueDate: '$52/credit',
        assignees: 2,
        progress: { completed: 800, total: 1800 }
      },
      {
        id: 'bc3',
        title: 'Salt Marsh Restoration - California',
        description: '3,200 tCO2e from wetland restoration and protection',
        tag: { color: 'purple', label: 'Salt Marsh' },
        dueDate: '$48/credit',
        assignees: 1,
        progress: { completed: 0, total: 3200 }
      },
      {
        id: 'bc4',
        title: 'Blue Carbon Research - Norway',
        description: '950 tCO2e from kelp forest conservation project',
        tag: { color: 'blue', label: 'Kelp Forest' },
        dueDate: '$55/credit',
        assignees: 3,
        progress: { completed: 150, total: 950 }
      }
    ]
  },
  {
    id: 'verification',
    title: 'Under Verification',
    color: 'blue',
    tasks: [
      {
        id: 'bc5',
        title: 'Mangrove Protection - Indonesia',
        description: '4,100 tCO2e awaiting third-party verification',
        tag: { color: 'blue', label: 'Mangroves' },
        dueDate: 'Pending',
        assignees: 2,
        progress: { completed: 3800, total: 4100 }
      },
      {
        id: 'bc6',
        title: 'Coastal Wetland - Bangladesh',
        description: '2,700 tCO2e undergoing satellite MRV validation',
        tag: { color: 'purple', label: 'Wetlands' },
        dueDate: 'Pending',
        assignees: 1,
        progress: { completed: 2200, total: 2700 }
      },
      {
        id: 'bc7',
        title: 'Seagrass Restoration - Philippines',
        description: '1,600 tCO2e in final verification stage',
        tag: { color: 'accent', label: 'Seagrass' },
        dueDate: 'Pending',
        assignees: 2,
        progress: { completed: 1600, total: 1600 }
      }
    ]
  },
  {
    id: 'trading',
    title: 'In Trading',
    color: 'amber',
    tasks: [
      {
        id: 'bc8',
        title: 'Premium Mangroves - Costa Rica',
        description: '1,200 tCO2e certified credits in active trading',
        tag: { color: 'blue', label: 'Mangroves' },
        dueDate: '$62/credit',
        assignees: 5,
        progress: { completed: 450, total: 1200 }
      },
      {
        id: 'bc9',
        title: 'Seagrass Premium - Mediterranean',
        description: '800 tCO2e high-quality verified credits',
        tag: { color: 'accent', label: 'Seagrass' },
        dueDate: '$58/credit',
        assignees: 3,
        progress: { completed: 320, total: 800 }
      },
      {
        id: 'bc10',
        title: 'Salt Marsh Elite - UK',
        description: '650 tCO2e premium verified with IoT monitoring',
        tag: { color: 'purple', label: 'Salt Marsh' },
        dueDate: '$68/credit',
        assignees: 4,
        progress: { completed: 500, total: 650 }
      }
    ]
  },
  {
    id: 'retired',
    title: 'Retired Credits',
    color: 'accent',
    tasks: [
      {
        id: 'bc11',
        title: 'Corporate Offset - Microsoft',
        description: '5,000 tCO2e retired for corporate carbon neutrality',
        tag: { color: 'blue', label: 'Mangroves' },
        dueDate: 'Retired',
        assignees: 1,
        progress: { completed: 5000, total: 5000 }
      },
      {
        id: 'bc12',
        title: 'Government Program - EU',
        description: '8,500 tCO2e retired for national climate targets',
        tag: { color: 'accent', label: 'Mixed' },
        dueDate: 'Retired',
        assignees: 1,
        progress: { completed: 8500, total: 8500 }
      },
      {
        id: 'bc13',
        title: 'Individual Offsets - Bundle',
        description: '1,750 tCO2e retired by individual purchasers',
        tag: { color: 'purple', label: 'Various' },
        dueDate: 'Retired',
        assignees: 127,
        progress: { completed: 1750, total: 1750 }
      }
    ]
  }
];

interface TaskBoardProps {
  className?: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ className }) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTaskDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('taskId', task.id);
    setDraggedTask(task);
    
    // Find source column
    const sourceColumn = columns.find(col => 
      col.tasks.some(t => t.id === task.id)
    );
    
    if (sourceColumn) {
      setDragSourceColumn(sourceColumn.id);
      e.dataTransfer.setData('sourceColumnId', sourceColumn.id);
    }
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    setDragSourceColumn(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Handle drag leave logic if needed
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) {
      return;
    }
    
    // Update columns state
    const newColumns = columns.map(column => {
      // Remove task from source column
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== taskId)
        };
      }
      
      // Add task to target column
      if (column.id === targetColumnId) {
        const taskToMove = columns.find(col => col.id === sourceColumnId)?.tasks.find(task => task.id === taskId);
        if (taskToMove) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
      }
      
      return column;
    });
    
    setColumns(newColumns);
    
    // Show a toast notification
    const targetColumn = columns.find(col => col.id === targetColumnId);
    if (targetColumn && draggedTask) {
      toast({
        title: "Task moved",
        description: `${draggedTask.title} moved to ${targetColumn.title}`,
      });
    }
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    // This function can be used for programmatic status changes (not used in this implementation)
  };

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
