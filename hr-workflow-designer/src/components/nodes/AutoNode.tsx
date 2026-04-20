import { Handle, Position } from '@xyflow/react';

export const AutoNode = ({ data }: any) => {
  return (
    <div className="custom-node auto-node">
      <Handle type="target" position={Position.Top} />
      
      <div className="node-header">
        <span>AUTOMATED STEP</span>
        <span>🤖</span>
      </div>
      
      <div className="node-body">
        <strong>{data.label}</strong>
        {data.actionId && (
          <div style={{ fontSize: '11px', color: '#8b5cf6', fontWeight: 'bold', marginTop: '4px' }}>
            Action: {data.actionId.replace('_', ' ')}
          </div>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};