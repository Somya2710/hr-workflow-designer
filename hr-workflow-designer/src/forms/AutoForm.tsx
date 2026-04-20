import React, { useEffect, useState } from 'react';
import { useWorkflowStore } from '../store/workflowStore';
import type { AppNode } from '../types/workflow';
import { fetchAutomations } from '../api/mockApi';

export const AutoForm: React.FC<{ node: AppNode }> = ({ node }) => {
  const updateNodeData = useWorkflowStore((state) => state.updateNodeData);
  const [availableActions, setAvailableActions] = useState<any[]>([]);

  useEffect(() => {
    fetchAutomations().then((data: any) => setAvailableActions(data));
  }, []);

  const handleActionChange = (actionId: string) => {
    const selectedAction = availableActions.find(a => a.id === actionId);
    updateNodeData(node.id, { 
      actionId, 
      actionParams: {}, // Reset params when action changes
      label: selectedAction?.label || 'Auto Step'
    });
  };

  const handleParamChange = (key: string, value: string) => {
    const currentParams = node.data.actionParams || {};
    updateNodeData(node.id, { 
      actionParams: { ...currentParams, [key]: value } 
    });
  };

  const selectedAction = availableActions.find(a => a.id === node.data.actionId);

  return (
    <div className="form-container">
      <h4>Automated Step</h4>
      
      <div className="form-group">
        <label>Select Action</label>
        <select 
          value={node.data.actionId || ''} 
          onChange={(e) => handleActionChange(e.target.value)}
        >
          <option value="">-- Choose an Action --</option>
          {availableActions.map(action => (
            <option key={action.id} value={action.id}>{action.label}</option>
          ))}
        </select>
      </div>

      {selectedAction && selectedAction.params.map((param: string) => (
        <div className="form-group" key={param}>
          <label style={{ textTransform: 'capitalize' }}>{param}</label>
          <input
            value={node.data.actionParams?.[param] || ''}
            onChange={(e) => handleParamChange(param, e.target.value)}
            placeholder={`Enter ${param}`}
          />
        </div>
      ))}
    </div>
  );
};