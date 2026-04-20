import React from 'react';
import { useWorkflowStore } from '../store/workflowStore';
import type { AppNode } from '../types/workflow';

export const StartForm: React.FC<{ node: AppNode }> = ({ node }) => {
  const updateNodeData = useWorkflowStore((state) => state.updateNodeData);

  return (
    <div className="form-container">
      <h4>Start Configuration</h4>
      <div className="form-group">
        <label>Start Title</label>
        <input
          value={node.data.label || ''}
          onChange={(e) => updateNodeData(node.id, { label: e.target.value })}
          placeholder="e.g., Employee Onboarding"
        />
      </div>
      <p style={{ fontSize: '12px', color: '#666' }}>
        This is the entry point of your workflow[cite: 25].
      </p>
    </div>
  );
};