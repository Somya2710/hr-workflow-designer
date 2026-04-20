import type { Node } from '@xyflow/react';

export type NodeType = 'start' | 'task' | 'approval' | 'auto' | 'end';

export interface WorkflowNodeData {
  label: string;
  // Index signature to satisfy React Flow's Record<string, unknown> constraint
  [key: string]: any; 
  
  // Task fields [cite: 44-47]
  assignee?: string;
  dueDate?: string;
  description?: string;
  
  // Approval fields [cite: 51-52]
  approverRole?: string;
  threshold?: number;
  
  // Auto Step fields [cite: 55-56]
  actionId?: string;
  actionParams?: Record<string, string>;
  
  // End fields [cite: 58, 60]
  endMessage?: string;
  isSummary?: boolean;
}

export type AppNode = Node<WorkflowNodeData>;