import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ResilienceDashboard from './pages/ResilienceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Multi-Region Application Patterns Platform is currently orchestrating institutional resilience and optimizing cross-region traffic steering. Automated failover orchestration and geo-replication synchronization will be fully operational once the global availability engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ResilienceDashboard />} />
          <Route path="/health" element={<Placeholder name="Regional Health & Status" />} />
          <Route path="/routing" element={<Placeholder name="Global Traffic Steering & DNS" />} />
          <Route path="/replication" element={<Placeholder name="Geo-Replication & Sync Analytics" />} />
          <Route path="/failover" element={<Placeholder name="Failover Orchestration & Control" />} />
          <Route path="/policies" element={<Placeholder name="Resilience & Recovery Policies" />} />
          <Route path="/gateway" element={<Placeholder name="Global API Gateway Analytics" />} />
          <Route path="/topology" element={<Placeholder name="Multi-Region Cluster Topology" />} />
          <Route path="/monitoring" element={<Placeholder name="Global Observability & Tracing" />} />
          <Route path="/sla" element={<Placeholder name="SLA/SLO Compliance Tracking" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Resilience Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
