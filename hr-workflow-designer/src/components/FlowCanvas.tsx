import { useCallback, useState } from 'react'; // Added useState, removed redundant React
import '@xyflow/react/dist/style.css';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  useReactFlow, 
  BackgroundVariant 
} from '@xyflow/react';

import { useWorkflowStore } from '../store/workflowStore'; 
import type { AppNode, NodeType } from '../types/workflow';

import { StartNode } from './nodes/StartNode';
import { TaskNode } from './nodes/TaskNode';
import { ApprovalNode } from './nodes/ApprovalNode';
import { AutoNode } from './nodes/AutoNode';
import { EndNode } from './nodes/EndNode';

const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  auto: AutoNode,
  end: EndNode,
};

export default function FlowCanvas() {
  // 1. Defined the instance state to fix the "Cannot find name" error
const [_reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const { 
    nodes, 
    edges, 
    onNodesChange, 
    onEdgesChange, 
    onConnect, 
    setSelectedNode,
    addNode 
  } = useWorkflowStore();

  const { screenToFlowPosition } = useReactFlow();

  // 2. Added node selection handler to fix the "setSelectedNode is never read" warning
  const onNodeClick = useCallback((_: any, node: AppNode) => {
    setSelectedNode(node);
  }, [setSelectedNode]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    
    const type = event.dataTransfer.getData('application/reactflow') as NodeType;
    if (!type) return;

    const position = screenToFlowPosition({ 
      x: event.clientX, 
      y: event.clientY 
    });
    
    const newNode: AppNode = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: { label: `${type.toUpperCase()} Step` },
    };

    addNode(newNode);
  }, [screenToFlowPosition, addNode]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick} // Correctly wired up selection
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
              <Background
                  variant={BackgroundVariant.Dots}
                  gap={20}
                  size={1.5}          
                  color="#94a3b8"     
                  style={{ backgroundColor: '#f8fafc' }} 
              />
        <Controls position="top-right" /> 
      </ReactFlow>
    </div>
  );
}