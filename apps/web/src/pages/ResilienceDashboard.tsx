import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Globe, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Signal,
  Layers,
  ShieldCheck,
  RotateCcw,
  Server,
  Cloud
} from 'lucide-react';

const regionalLatencyData = [
  { time: '00:00', us_east: 45, eu_west: 85, ap_south: 120 },
  { time: '04:00', us_east: 42, eu_west: 82, ap_south: 115 },
  { time: '08:00', us_east: 58, eu_west: 95, ap_south: 135 },
  { time: '12:00', us_east: 65, eu_west: 105, ap_south: 155 },
  { time: '16:00', us_east: 52, eu_west: 88, ap_south: 140 },
  { time: '20:00', us_east: 48, eu_west: 84, ap_south: 125 },
];

const trafficDistribution = [
  { name: 'US-East (Primary)', value: 60, color: '#10b981' },
  { name: 'EU-West (Active)', value: 30, color: '#059669' },
  { name: 'AP-South (Standby)', value: 10, color: '#34d399' },
];

const KPI_CARDS = [
  { title: 'Global Availability', value: '99.999%', trend: 'Resilient Tier', color: 'emerald', icon: ShieldCheck },
  { title: 'Avg. P99 Latency', value: '82ms', trend: 'Latency-Routed', color: 'emerald', icon: Zap },
  { title: 'Replication Lag', value: '450ms', trend: 'Cross-Region', color: 'emerald', icon: RotateCcw },
  { title: 'Healthy Regions', value: '3 / 3', trend: 'Multi-Cloud', color: 'emerald', icon: Cloud },
];

const ResilienceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Multi-Region Resilience Control</h1>
          <p className="text-slate-400">Institutional highly available application patterns, global traffic steering, and automated failover orchestration.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Simulate Regional Failure
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Initiate Failover
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-emerald-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-emerald-400`} />
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
        {/* Regional Latency */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Cross-Region P99 Latency (ms)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={regionalLatencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="us_east" stroke="#10b981" strokeWidth={3} dot={false} name="US-East-1" />
                <Line type="monotone" dataKey="eu_west" stroke="#34d399" strokeWidth={2} dot={false} name="EU-West-1" />
                <Line type="monotone" dataKey="ap_south" stroke="#64748b" strokeWidth={2} dot={false} name="AP-South-1" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Global Traffic Steering</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficDistribution.map((entry, index) => (
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
            {trafficDistribution.map((item) => (
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

      {/* Regional Status Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Multi-Region Service Topology</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">Re-balance Traffic</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Region Name</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Availability Zone</th>
                <th className="px-6 py-4 font-semibold">Deployment Status</th>
                <th className="px-6 py-4 font-semibold">Health Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'us-east-1 (N. Virginia)', role: 'Primary Hub', az: 'us-east-1a, 1b, 1c', status: 'In-Sync', score: '99/100' },
                { name: 'eu-west-1 (Ireland)', role: 'Active Standby', az: 'eu-west-1a, 1b', status: 'In-Sync', score: '98/100' },
                { name: 'ap-southeast-1 (Singapore)', role: 'Passive Standby', az: 'ap-southeast-1a', status: 'Syncing...', score: '92/100' },
                { name: 'us-west-2 (Oregon)', role: 'Isolated Canary', az: 'us-west-2a', status: 'Degraded', score: '45/100' },
              ].map((region, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Cloud className="w-5 h-5 text-emerald-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{region.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: GEO-REG-0{i+1}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-300 font-medium">{region.role}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{region.az}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      region.status === 'In-Sync' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {region.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{region.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResilienceDashboard;
