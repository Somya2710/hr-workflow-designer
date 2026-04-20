import { create } from 'zustand';
// Logic imports
import { 
  addEdge, 
  applyNodeChanges, 
  applyEdgeChanges 
} from '@xyflow/react';
// Type-only imports
import type { 
  Connection, 
  Edge, 
  NodeChange, 
  EdgeChange 
} from '@xyflow/react';
import type { AppNode } from '../types/workflow';

interface WorkflowState {
  nodes: AppNode[];
  edges: Edge[];
  selectedNode: AppNode | null;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  setSelectedNode: (node: AppNode | null) => void;
  updateNodeData: (nodeId: string, data: any) => void;
  addNode: (node: AppNode) => void;
}

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNode: null,
  
  onNodesChange: (changes) => set({ 
    nodes: applyNodeChanges(changes, get().nodes) as AppNode[] 
  }),

  onEdgesChange: (changes) => set({ 
    edges: applyEdgeChanges(changes, get().edges) 
  }),

  onConnect: (connection) => set({ 
    edges: addEdge(connection, get().edges) 
  }),

  setSelectedNode: (node) => set({ 
    selectedNode: node 
  }),

  updateNodeData: (nodeId, newData) => {
  set((state) => ({
    nodes: state.nodes.map((node) =>
      node.id === nodeId
        ? { 
            ...node, 
            data: { ...node.data, ...newData } // Merges old data with new data
          }
        : node
    ),
    // Also update selectedNode if it's the one being edited
    selectedNode: state.selectedNode?.id === nodeId 
      ? { ...state.selectedNode, data: { ...state.selectedNode.data, ...newData } }
      : state.selectedNode
  }));
},

  addNode: (node) => set({ 
    nodes: [...get().nodes, node] 
  }),
}));