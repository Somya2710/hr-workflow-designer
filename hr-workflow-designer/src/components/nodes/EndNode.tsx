import { Handle, Position } from '@xyflow/react';

export const EndNode = ({ data }: any) => {
  return (
    <div className="custom-node end-node">
      <Handle type="target" position={Position.Top} />
      
      <div className="node-header">
        <span>COMPLETION</span>
        <span>🏁</span>
      </div>
      
      <div className="node-body">
        <strong>{data.label || 'Workflow Finished'}</strong>
        {data.endMessage && (
          <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>
            {data.endMessage}
          </p>
        )}
      </div>
      
      {/* No source handle here as it's the end! */}
    </div>
  );
};