import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Network, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Server,
  Cloud,
  ShieldCheck,
  RotateCcw,
  Signal,
  Share2,
  Lock
} from 'lucide-react';

const provisioningTrendData = [
  { time: 'Mon', provisioned: 12, drift_corrected: 2 },
  { time: 'Tue', provisioned: 15, drift_corrected: 1 },
  { time: 'Wed', provisioned: 8, drift_corrected: 0 },
  { time: 'Thu', provisioned: 22, drift_corrected: 5 },
  { time: 'Fri', provisioned: 18, drift_corrected: 2 },
  { time: 'Sat', provisioned: 4, drift_corrected: 0 },
  { time: 'Sun', provisioned: 2, drift_corrected: 0 },
];

const cloudNetworkDistribution = [
  { name: 'AWS VPCs', value: 45, color: '#14b8a6' },
  { name: 'Azure VNets', value: 35, color: '#0d9488' },
  { name: 'GCP VPCs', value: 15, color: '#0f766e' },
  { name: 'On-Prem/Edge', value: 5, color: '#115e59' },
];

const KPI_CARDS = [
  { title: 'Managed Networks (Spokes)', value: '184', trend: 'Global Topology', color: 'teal', icon: Cloud },
  { title: 'Transit Links Active', value: '42', trend: 'Cross-Cloud Peering', color: 'teal', icon: Share2 },
  { title: 'Security Policies Enforced', value: '2,450', trend: 'Zero Trust Baseline', color: 'teal', icon: Lock },
  { title: 'Network Config Drift', value: '0', trend: '100% IaC Synced', color: 'teal', icon: CheckCircle2 },
];

const LandingZoneDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Network Landing Zone Command Center</h1>
          <p className="text-slate-400">Institutional hub-and-spoke orchestration, multi-cloud transit networking, and zero-trust perimeter enforcement.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Validate Topology
          </button>
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Provision New Spoke
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-teal-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-teal-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Provisioning Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Network Lifecycle Operations (Last 7 Days)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={provisioningTrendData}>
                <defs>
                  <linearGradient id="colorProv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="provisioned" stroke="#14b8a6" strokeWidth={3} fillOpacity={1} fill="url(#colorProv)" name="Networks Provisioned" />
                <Area type="monotone" dataKey="drift_corrected" stroke="#f59e0b" strokeWidth={2} fill="transparent" name="Drifts Auto-Corrected" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cloud Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Multi-Cloud Network Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cloudNetworkDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cloudNetworkDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {cloudNetworkDistribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Landing Zone Inventory Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Core Hub-and-Spoke Architecture Inventory</h3>
          <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">Manage Networks</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Network Name</th>
                <th className="px-6 py-4 font-semibold">Tier / Role</th>
                <th className="px-6 py-4 font-semibold">Cloud Provider</th>
                <th className="px-6 py-4 font-semibold">CIDR Block</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Policy Enforcement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'global-transit-hub-useast', tier: 'Hub', provider: 'AWS', cidr: '10.0.0.0/16', status: 'Active', policy: 'Strict (Baseline)' },
                { name: 'prod-payment-spoke-01', tier: 'Spoke (Prod)', provider: 'AWS', cidr: '10.1.0.0/24', status: 'Active', policy: 'Strict (PCI-DSS)' },
                { name: 'azure-transit-hub-we', tier: 'Hub', provider: 'Azure', cidr: '10.10.0.0/16', status: 'Active', policy: 'Strict (Baseline)' },
                { name: 'dev-analytics-spoke-01', tier: 'Spoke (Non-Prod)', provider: 'GCP', cidr: '10.20.1.0/24', status: 'Provisioning', policy: 'Standard' },
              ].map((net, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Network className="w-5 h-5 text-teal-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">{net.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: LZ-NET-0{i+1}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                      net.tier === 'Hub' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {net.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{net.provider}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{net.cidr}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-bold ${
                      net.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${net.status === 'Active' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`}></span>
                      {net.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-500" />
                    {net.policy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandingZoneDashboard;
