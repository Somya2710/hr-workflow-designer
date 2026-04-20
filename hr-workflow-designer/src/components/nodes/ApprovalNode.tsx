import { Handle, Position } from '@xyflow/react';

export const ApprovalNode = ({ data }: any) => {
  return (
    <div className="custom-node approval-node">
      {/* Input handle from previous steps */}
      <Handle type="target" position={Position.Top} />
      
      <div className="node-header">
        <span>APPROVAL</span>
        <span>⚖️</span>
      </div>
      
      <div className="node-body">
        <strong>{data.label}</strong>
        {data.approverRole && (
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
            Role: {data.approverRole}
          </div>
        )}
      </div>

      {/* Output handle to next steps */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};