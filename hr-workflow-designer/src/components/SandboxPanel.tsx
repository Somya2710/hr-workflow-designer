import { useState } from 'react';
import { useWorkflowStore } from '../store/workflowStore';
import { simulateWorkflowAPI } from '../api/mockApi';

interface LogEntry {
  step: number;
  message: string;
  status: 'success' | 'pending' | 'error' | 'info';
  timestamp: string; // This fixes the TypeScript error
}

export const SandboxPanel = () => {
  const { nodes, edges } = useWorkflowStore();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Helper to create a log object with a current timestamp
  const createLog = (step: number, message: string, status: LogEntry['status']): LogEntry => ({
    step,
    message,
    status,
    timestamp: new Date().toLocaleTimeString(),
  });

  const runSimulation = async () => {
    // 1. Basic Validation
    const hasStartNode = nodes.some(n => n.type === 'start');
    if (!hasStartNode) {
      setLogs([createLog(0, "Validation Error: Missing Start Node", 'error')]);
      return;
    }

    // Use isSimulating to fix the 'never read' warning
    setIsSimulating(true);
    setLogs([createLog(0, "Starting Simulation...", 'pending')]);

    // Serialization: Convert graph to JSON
    const workflowPayload = {
      nodes,
      edges,
      metadata: { exportedAt: new Date().toISOString() }
    };

    try {
      // 3. API Call
      // We cast the response and ensure it includes timestamps
      const results = await simulateWorkflowAPI(workflowPayload) as any[];
      
      const formattedResults = results.map((res, index) => ({
        ...res,
        step: index + 1,
        timestamp: res.timestamp || new Date().toLocaleTimeString()
      }));

      setLogs(formattedResults);
    } catch (error) {
      setLogs(prev => [...prev, createLog(99, "Simulation Failed", 'error')]);
    } finally {
      setIsSimulating(false); // Reset state when complete
    }
  };

  return (
    <div className="workflow-sandbox">
      <div className="sandbox-header">
        <h4 style={{ margin: 0 }}>Workflow Simulation</h4>
        {/* Button reflects the simulation state */}
        <button 
          className="test-btn" 
          onClick={runSimulation} 
          disabled={isSimulating}
        >
          {isSimulating ? 'Running...' : 'Test Workflow'}
        </button>
      </div>
      
      <div className="sandbox-log-container">
        {logs.length === 0 ? (
          <span style={{ color: '#64748b' }}>
            Ready to simulate. Click "Test Workflow" to begin...
          </span>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={`log-entry ${log.status}`}>
              <span style={{ opacity: 0.5 }}>[{log.timestamp}]</span>
              <span>{log.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};