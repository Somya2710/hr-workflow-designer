import React from 'react';
import { useWorkflowStore } from '../store/workflowStore';
import type { AppNode } from '../types/workflow';

export const EndForm: React.FC<{ node: AppNode }> = ({ node }) => {
  const updateNodeData = useWorkflowStore((state) => state.updateNodeData);

  return (
    <div className="form-container">
      <h4>End Configuration</h4>
      <div className="form-group">
        <label>End Message</label>
        <input
          value={node.data.endMessage || ''}
          onChange={(e) => updateNodeData(node.id, { endMessage: e.target.value })}
          placeholder="e.g., Onboarding Complete"
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={node.data.isSummary || false}
            onChange={(e) => updateNodeData(node.id, { isSummary: e.target.checked })}
          />
          Include Summary Flag
        </label>
      </div>
    </div>
  );
};