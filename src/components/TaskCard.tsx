import React, { useState, useRef, useEffect } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  tag: {
    color: string;
    label: string;
  };
  dueDate: string;
  assignees: number;
  progress: {
    completed: number;
    total: number;
  };
}

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDragStart,
  onDragEnd,
  onStatusChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [city, setCity] = useState("India");
  const [aqi, setAqi] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [autoDetected, setAutoDetected] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const API_TOKEN = "457c57365cc767b2c8e18899c9c3d1172bb3ae96";

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const ghostImage = cardRef.current.cloneNode(true) as HTMLDivElement;
      ghostImage.style.position = "absolute";
      ghostImage.style.top = "-1000px";
      ghostImage.style.opacity = "0.8";
      document.body.appendChild(ghostImage);
      e.dataTransfer.setDragImage(ghostImage, rect.width / 2, rect.height / 2);
      setTimeout(() => document.body.removeChild(ghostImage), 0);
    }

    onDragStart(e, task);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };

  // Fetch AQI based on current city or location
  const fetchAQI = async (manualCity?: string) => {
    try {
      setLoading(true);
      const endpoint = manualCity
        ? `https://api.waqi.info/feed/${encodeURIComponent(manualCity)}/?token=${API_TOKEN}`
        : `https://api.waqi.info/feed/here/?token=${API_TOKEN}`;

      const res = await fetch(endpoint);
      const data = await res.json();

      if (data.status === "ok") {
        setAqi(data.data.aqi);
        setCity(data.data.city.name);
      } else {
        setAqi(null);
      }
    } catch (error) {
      console.error("Error fetching AQI:", error);
      setAqi(null);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch once using IP location
  useEffect(() => {
    if (!autoDetected) {
      fetchAQI();
      setAutoDetected(true);
    }
  }, []);

  const getTagClass = () => "bg-muted/50 text-muted-foreground border border-border";

  return (
    <div
      ref={cardRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`task-card p-4 bg-card rounded-md border border-border shadow-sm hover:shadow-md transition-all duration-200 h-52 flex flex-col ${
        isDragging ? "dragging" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3 flex-shrink-0">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${getTagClass()}`}
        >
          {task.tag.label}
        </span>
        <span className="text-muted-foreground text-xs">{task.dueDate}</span>
      </div>

      {/* AQI Search */}
      <div className="flex items-center gap-2 mb-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="border border-border rounded px-2 py-1 text-xs bg-transparent text-foreground w-24"
        />
        <button
          onClick={() => fetchAQI(city)}
          className="bg-muted text-xs px-2 py-1 rounded hover:bg-muted/70"
        >
          {loading ? "Loading..." : "Check AQI"}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 mb-3">
        <h5 className="font-medium mb-2 text-foreground text-sm leading-tight line-clamp-2">
          {task.title}
        </h5>
        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {aqi !== null
            ? `Current AQI in ${city}: ${aqi}`
            : task.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto">
        <div className="flex -space-x-1">
          {[...Array(task.assignees)].map((_, i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full bg-muted border-2 border-card"
              style={{
                backgroundColor: `hsl(var(--muted) / ${0.8 - i * 0.1})`,
              }}
            ></div>
          ))}
        </div>

        <span className="flex items-center gap-1 text-muted-foreground text-xs">
          {task.progress.completed}/{task.progress.total}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
