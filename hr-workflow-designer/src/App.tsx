import { ReactFlowProvider } from '@xyflow/react';
import FlowCanvas from './components/FlowCanvas';
import { Sidebar } from './components/Sidebar';
import { NodeConfigPanel } from './components/NodeConfigPanel';
import { SandboxPanel } from './components/SandboxPanel';

// Main Application Component [cite: 83, 87]
function App() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh' }}>
      
      {/* Upper Area: Workspace */}
      <div className="workspace-container" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* ReactFlowProvider is required for useReactFlow hook inside children [cite: 103] */}
        <ReactFlowProvider>
          
          {/* Left: Drag-and-drop node palette [cite: 32] */}
          <Sidebar />
          
          {/* Center: The actual workflow canvas [cite: 22, 23] */}
          <div style={{ flex: 1, position: 'relative' }}>
            <FlowCanvas />
          </div>
          
          {/* Right: Property editing form for selected nodes [cite: 37, 38] */}
          <NodeConfigPanel />
          
        </ReactFlowProvider>
      </div>

      {/* Bottom Area: Simulation Log & Testing [cite: 18, 74, 75] */}
      <SandboxPanel />
      
    </div>
  );
}

export default App;