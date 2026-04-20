import React from 'react';
import { useWorkflowStore } from '../store/workflowStore';
import type { AppNode } from '../types/workflow';

interface TaskFormProps {
  node: AppNode;
}

export const TaskForm: React.FC<TaskFormProps> = ({ node }) => {
  const updateNodeData = useWorkflowStore((state) => state.updateNodeData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateNodeData(node.id, { [name]: value });
  };

  return (
    <div className="form-container">
      <h4>Edit Task Node</h4>
      
      <div className="form-group">
        <label>Title (Required)</label>
        <input
          name="label"
          value={node.data.label || ''}
          onChange={handleChange}
          placeholder="e.g., Collect Documents"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={node.data.description || ''}
          onChange={handleChange}
          placeholder="Enter task details..."
        />
      </div>

      <div className="form-group">
        <label>Assignee</label>
        <input
          name="assignee"
          value={node.data.assignee || ''}
          onChange={handleChange}
          placeholder="Enter name or email"
        />
      </div>

      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={node.data.dueDate || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};