// src/api/mockApi.ts

// Mock data for GET /automations [cite: 67-71]
export const mockAutomations = [
  { id: "send_email", label: "Send Email", params: ["to", "subject"] },
  { id: "generate_doc", label: "Generate Document", params: ["template", "recipient"] },
  { id: "slack_notify", label: "Slack Notification", params: ["channel", "message"] }
];

// Mock function for GET /automations [cite: 65]
export const fetchAutomations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAutomations), 500); // Simulate network delay
  });
};

// Mock function for POST /simulate [cite: 72-73, 77-78]
export const simulateWorkflowAPI = async (_workflowData: any) => {
      return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { step: 1, message: "Workflow initiated successfully.", status: "success" },
        { step: 2, message: "Checking connections...", status: "success" },
        { step: 3, message: "Simulating node execution path...", status: "pending" },
        { step: 4, message: "Simulation complete.", status: "success" }
      ]);
    }, 1000);
  });
};