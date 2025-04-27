export type Incident = {
  id: number;
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
  reported_at: string;
};

export const mockData: Incident[] = [
  {
    id: 1,
    title: "Unauthorized Access in User Account",
    description: "A user account was accessed without proper authentication, potentially exposing sensitive data.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Critical Data Loss in Cloud Storage",
    description: "A cloud storage malfunction resulted in the loss of critical files, affecting the system's availability.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Incorrect Financial Calculations",
    description: "The financial algorithm produced inaccurate results, leading to incorrect report generation.",
    severity: "Low",
    reported_at: "2025-03-21T09:15:00Z",
  },
  {
    id: 4,
    title: "Delayed System Response in Customer Portal",
    description: "The customer portal experienced significant delays, impacting the user experience and service efficiency.",
    severity: "Medium",
    reported_at: "2025-03-22T09:15:00Z",
  },
  {
    id: 5,
    title: "Failure in Secure Data Transmission",
    description: "An encryption error occurred during the transmission of sensitive data, posing a potential security threat.",
    severity: "High",
    reported_at: "2025-03-23T09:15:00Z",
  },
  {
    id: 6,
    title: "Service Downtime During Peak Hours",
    description: "The service faced unexpected downtime during high usage hours, disrupting business operations.",
    severity: "Low",
    reported_at: "2025-03-24T09:15:00Z",
  },
];
