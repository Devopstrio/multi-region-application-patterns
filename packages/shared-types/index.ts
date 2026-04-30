export enum Region {
  US_EAST_1 = "us-east-1",
  EU_WEST_1 = "eu-west-1",
  AP_SOUTHEAST_1 = "ap-southeast-1"
}

export enum DeploymentStrategy {
  ACTIVE_ACTIVE = "ACTIVE_ACTIVE",
  ACTIVE_PASSIVE = "ACTIVE_PASSIVE",
  WARM_STANDBY = "WARM_STANDBY",
  PILOT_LIGHT = "PILOT_LIGHT"
}

export enum ConsistencyMode {
  STRONG = "STRONG",
  EVENTUAL = "EVENTUAL",
  CAUSAL = "CAUSAL"
}

export interface RegionalHealth {
  region: Region;
  status: "HEALTHY" | "DEGRADED" | "DOWN";
  latency: number; // ms
  errorRate: number; // %
  lastHeartbeat: string;
}

export interface GeoReplicationEvent {
  id: string;
  sourceRegion: Region;
  payload: any;
  timestamp: string;
  sequenceId: number;
}

export interface ResilienceKPIs {
  globalAvailability: number; // %
  avgLatencies: Record<Region, number>;
  failoverTimeSeconds: number;
  replicationLagMs: number;
  regionalIsolationEfficiency: number; // %
}
