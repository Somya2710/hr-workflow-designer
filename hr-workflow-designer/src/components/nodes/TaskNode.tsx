// 1. Add this missing import at the top
import { Handle, Position } from '@xyflow/react';

export const TaskNode = ({ data }: any) => {
  return (
    <div className="custom-node task-node">
      {/* 2. Target handle on top to receive connections */}
      <Handle type="target" position={Position.Top} />
      
      <div className="node-header">
        <span>TASK</span>
        <span>📋</span>
      </div>
      
      <div className="node-body">
        <strong>{data.label}</strong>
        {data.assignee && (
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
            Assignee: {data.assignee}
          </div>
        )}
      </div>

      {/* 3. Source handle on bottom to send connections */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};