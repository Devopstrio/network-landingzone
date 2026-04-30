import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LandingZoneDashboard from './pages/LandingZoneDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Network Landing Zone Platform is currently orchestrating hub-and-spoke infrastructure and zero-trust segmentation. Automated transit routing and multi-cloud peering synchronization will be fully operational once the global provisioning engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<LandingZoneDashboard />} />
          <Route path="/topology" element={<Placeholder name="Hub-and-Spoke Topology Map" />} />
          <Route path="/networks" element={<Placeholder name="Managed Networks (VPC/VNet) Inventory" />} />
          <Route path="/connectivity" element={<Placeholder name="Inter-Cloud Connectivity & VPN" />} />
          <Route path="/segmentation" element={<Placeholder name="Zero Trust Network Segmentation" />} />
          <Route path="/firewall" element={<Placeholder name="Firewall & Security Rules" />} />
          <Route path="/routing" element={<Placeholder name="Transit & Routing Tables Management" />} />
          <Route path="/dns" element={<Placeholder name="Private DNS & Service Discovery" />} />
          <Route path="/compliance" element={<Placeholder name="Network Policy & Compliance State" />} />
          <Route path="/settings" element={<Placeholder name="Landing Zone Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
