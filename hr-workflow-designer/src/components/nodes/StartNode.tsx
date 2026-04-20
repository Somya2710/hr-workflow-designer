import { Handle, Position } from '@xyflow/react';

// Use a named export to match your FlowCanvas import
export const StartNode = ({ data }: any) => (
  <div className="custom-node start-node">
    <div className="node-header">
      <span>Start</span>
      <span className="icon">🚀</span>
    </div>
    <div className="node-body">
      <strong>{data.label || 'Workflow Entry'}</strong>
    </div>
    {/* Start Node only has an output handle [cite: 25] */}
    <Handle type="source" position={Position.Bottom} />
  </div>
);