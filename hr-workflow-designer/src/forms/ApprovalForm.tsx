import React from 'react';
import { useWorkflowStore } from '../store/workflowStore';
import type { AppNode } from '../types/workflow';

interface ApprovalFormProps {
  node: AppNode;
}

export const ApprovalForm: React.FC<ApprovalFormProps> = ({ node }) => {
  // Extract the update function
  const updateNodeData = useWorkflowStore((state) => state.updateNodeData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // 1. Determine the correct value type
    const finalValue = name === 'threshold' ? (Number(value) || 0) : value;
    
    // 2. LOG TO CONSOLE: Press F12 in your browser to see if this triggers!
    console.log(`Updating ${name} to:`, finalValue);

    // 3. Update the store
    // We pass the partial data object to be merged
    updateNodeData(node.id, { [name]: finalValue });
  };

  return (
    <div className="specific-node-form">
      <div style={{ 
        padding: '10px 1.5rem', 
        background: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
        marginLeft: '-1.5rem',
        marginRight: '-1.5rem'
      }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b' }}>
          APPROVAL CONFIGURATION
        </span>
      </div>

      {/* Label Field */}
      <div className="form-group">
        <label>Step Name</label>
        <input
          type="text"
          name="label" // Ensure this matches your store's expectations
          value={node.data.label || ''}
          onChange={handleChange}
          placeholder="e.g., Manager Approval"
          autoComplete="off"
        />
      </div>

      {/* Role Selection */}
      <div className="form-group">
        <label>Approver Role</label>
        <select 
          name="approverRole" 
          value={node.data.approverRole || ''} 
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Manager">Manager</option>
          <option value="HRBP">HRBP</option>
          <option value="Director">Director</option>
        </select>
      </div>

      {/* Threshold Number */}
      <div className="form-group">
        <label>Auto-approve Threshold (Score)</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="number"
            name="threshold"
            value={node.data.threshold ?? 0}
            onChange={handleChange}
            min="0"
            max="100"
            style={{ width: '80px' }}
          />
          <span style={{ fontSize: '12px', color: '#64748b' }}>% or points</span>
        </div>
        <p style={{ marginTop: '8px', fontSize: '11px', color: '#94a3b8', lineHeight: '1.4' }}>
          If the system score exceeds this value, the manual approval step is skipped.
        </p>
      </div>
    </div>
  );
};