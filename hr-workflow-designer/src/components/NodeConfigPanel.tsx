import { useWorkflowStore } from '../store/workflowStore';
import { StartForm } from '../forms/StartForm';
import { TaskForm } from '../forms/TaskForm';
import { ApprovalForm } from '../forms/ApprovalForm';
import { AutoForm } from '../forms/AutoForm';
import { EndForm } from '../forms/EndForm';

export const NodeConfigPanel = () => {
  // Use a selector to get exactly what we need
  const selectedNode = useWorkflowStore((state) => state.selectedNode);
  const setSelectedNode = useWorkflowStore((state) => state.setSelectedNode);
  const updateNodeData = useWorkflowStore((state) => state.updateNodeData);

  if (!selectedNode) {
    return (
      <div className="config-panel empty">
        <p>Select a node on the canvas to edit its properties.</p>
      </div>
    );
  }

  // Logic to determine which form to show based on node type
  const renderForm = () => {
    switch (selectedNode.type) {
      case 'start': return <StartForm key={`start-${selectedNode.id}`} node={selectedNode} />;
      case 'task': return <TaskForm key={`task-${selectedNode.id}`} node={selectedNode} />;
      case 'approval': return <ApprovalForm key={`appr-${selectedNode.id}`} node={selectedNode} />;
      case 'auto': return <AutoForm key={`auto-${selectedNode.id}`} node={selectedNode} />;
      case 'end': return <EndForm key={`end-${selectedNode.id}`} node={selectedNode} />;
      default: return null;
    }
  };

  return (
    /* Adding a key to the div ensures that when you switch nodes, the whole form resets */
    <div className="config-panel" key={selectedNode.id}>
      <div className="panel-header">
        <h3>Edit {selectedNode.type?.toUpperCase()} Step</h3>
        <button className="close-btn" onClick={() => setSelectedNode(null)}>×</button>
      </div>
      
      <div className="panel-content">
        <div className="form-group">
          <label>TITLE</label>
          <input
            type="text"
            // Use logical OR to prevent "uncontrolled component" warnings
            value={selectedNode.data.label || ''}
            onChange={(e) => {
                // Ensure we are passing an object that matches the store's 'newData' expectation
                updateNodeData(selectedNode.id, { label: e.target.value });
            }}
            placeholder="Step Title"
            autoComplete="off"
          />
        </div>

        <div className="form-divider" style={{ margin: '20px 0', borderTop: '1px solid #f1f5f9' }} />

        {/* This renders the specific fields for each node type */}
        {renderForm()}
        
        <div className="node-id-footer">
          Node ID: <span>{selectedNode.id}</span>
        </div>
      </div>
    </div>
  );
};