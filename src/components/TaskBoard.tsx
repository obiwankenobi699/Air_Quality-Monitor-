import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import TaskColumn, { Column } from './TaskColumn';
import { Task } from './TaskCard';

// Air Quality Monitoring Board Data
const initialColumns: Column[] = [
  {
    id: 'active',
    title: 'Active Monitoring Stations',
    color: 'muted',
    tasks: [
      {
        id: 'aqi1',
        title: 'Delhi Central Monitoring Unit',
        description: 'Real-time AQI monitoring for Central Delhi region',
        tag: { color: 'blue', label: 'PM2.5' },
        dueDate: 'Live',
        assignees: 3,
        progress: { completed: 76, total: 100 }
      },
      {
        id: 'aqi2',
        title: 'Mumbai Coastal AQI Station',
        description: 'Measures PM10 and NO₂ levels from sea breeze impact',
        tag: { color: 'accent', label: 'PM10' },
        dueDate: 'Live',
        assignees: 2,
        progress: { completed: 64, total: 100 }
      },
      {
        id: 'aqi3',
        title: 'Bangalore Urban Air Sensor',
        description: 'IoT-based AQI tracking in urban tech corridors',
        tag: { color: 'purple', label: 'O₃' },
        dueDate: 'Live',
        assignees: 4,
        progress: { completed: 89, total: 100 }
      },
      {
        id: 'aqi4',
        title: 'Chennai Port Sensor Network',
        description: 'Monitors coastal pollution and sulfur dioxide (SO₂)',
        tag: { color: 'blue', label: 'SO₂' },
        dueDate: 'Live',
        assignees: 1,
        progress: { completed: 72, total: 100 }
      }
    ]
  },
  {
    id: 'verification',
    title: 'Under Calibration',
    color: 'blue',
    tasks: [
      {
        id: 'aqi5',
        title: 'Ahmedabad Calibration Unit',
        description: 'Calibration under process for PM2.5 and CO sensors',
        tag: { color: 'blue', label: 'PM2.5' },
        dueDate: 'Pending',
        assignees: 2,
        progress: { completed: 60, total: 100 }
      },
      {
        id: 'aqi6',
        title: 'Kolkata AQI Verification Node',
        description: 'Sensor readings cross-verified with satellite MRV',
        tag: { color: 'purple', label: 'CO' },
        dueDate: 'Pending',
        assignees: 1,
        progress: { completed: 40, total: 100 }
      },
      {
        id: 'aqi7',
        title: 'Pune Urban AQI System',
        description: 'IoT nodes synced with central data hub',
        tag: { color: 'accent', label: 'NO₂' },
        dueDate: 'Pending',
        assignees: 3,
        progress: { completed: 85, total: 100 }
      }
    ]
  },
  {
    id: 'analysise',
    title: 'Data Analysis',
    color: 'amber',
    tasks: [
      {
        id: 'aqi8',
        title: 'Delhi AQI Trend Analysis',
        description: 'Analyzing monthly AQI patterns and pollutants correlation',
        tag: { color: 'blue', label: 'Analytics' },
        dueDate: 'Ongoing',
        assignees: 5,
        progress: { completed: 65, total: 100 }
      },
      {
        id: 'aqi9',
        title: 'Pan India AQI Heatmap Generation',
        description: 'Generating AQI heatmaps using live sensor data',
        tag: { color: 'accent', label: 'Visualization' },
        dueDate: 'Ongoing',
        assignees: 3,
        progress: { completed: 45, total: 100 }
      },
      {
        id: 'aqi10',
        title: 'Predictive AQI Modelling',
        description: 'Training model on AQI trends for next 7-day prediction',
        tag: { color: 'purple', label: 'AI Model' },
        dueDate: 'Ongoing',
        assignees: 4,
        progress: { completed: 30, total: 100 }
      }
    ]
  },
  {
    id: 'archived',
    title: 'Archived Reports',
    color: 'accent',
    tasks: [
      {
        id: 'aqi11',
        title: 'AQI Annual Report 2024',
        description: 'Consolidated data of AQI readings across Indian metros',
        tag: { color: 'blue', label: 'Report' },
        dueDate: 'Published',
        assignees: 1,
        progress: { completed: 100, total: 100 }
      },
      {
        id: 'aqi12',
        title: 'State Pollution Index Summary',
        description: 'Compiled air pollution summary by CPCB',
        tag: { color: 'accent', label: 'CPCB' },
        dueDate: 'Published',
        assignees: 2,
        progress: { completed: 100, total: 100 }
      },
      {
        id: 'aqi13',
        title: 'Satellite Data Validation Logs',
        description: 'Historical dataset verification from ISRO satellite feeds',
        tag: { color: 'purple', label: 'Satellite' },
        dueDate: 'Archived',
        assignees: 1,
        progress: { completed: 100, total: 100 }
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

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) return;

    const newColumns = columns.map(column => {
      if (column.id === sourceColumnId) {
        return { ...column, tasks: column.tasks.filter(t => t.id !== taskId) };
      }
      if (column.id === targetColumnId) {
        const taskToMove = columns
          .find(col => col.id === sourceColumnId)
          ?.tasks.find(t => t.id === taskId);
        return taskToMove
          ? { ...column, tasks: [...column.tasks, taskToMove] }
          : column;
      }
      return column;
    });

    setColumns(newColumns);
    const targetColumn = columns.find(col => col.id === targetColumnId);
    if (targetColumn && draggedTask) {
      toast({
        title: "Task moved",
        description: `${draggedTask.title} moved to ${targetColumn.title}`,
      });
    }
  };

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={() => {}}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={() => {}}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
