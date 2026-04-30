export enum NetworkTier {
  HUB = "HUB",
  SPOKE_PROD = "SPOKE_PROD",
  SPOKE_NONPROD = "SPOKE_NONPROD",
  DMZ = "DMZ",
  MANAGEMENT = "MANAGEMENT"
}

export enum CloudProvider {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  ONPREM = "ONPREM"
}

export interface NetworkComponent {
  id: string;
  name: string;
  provider: CloudProvider;
  tier: NetworkTier;
  region: string;
  cidrBlock: string;
  status: "PROVISIONING" | "ACTIVE" | "DEGRADED" | "ERROR";
  createdAt: string;
}

export interface ConnectivityLink {
  id: string;
  sourceNetworkId: string;
  targetNetworkId: string;
  type: "VPC_PEERING" | "TRANSIT_GATEWAY" | "VPN_IPSEC" | "EXPRESS_ROUTE" | "DIRECT_CONNECT";
  bandwidthMbps: number;
  status: "UP" | "DOWN" | "PENDING";
}

export interface SecurityPolicy {
  id: string;
  name: string;
  description: string;
  targetTier: NetworkTier;
  action: "ALLOW" | "DENY";
  protocol: "TCP" | "UDP" | "ICMP" | "ALL";
  sourcePorts: string;
  destinationPorts: string;
  enforcementLevel: "STRICT" | "AUDIT_ONLY";
}

export interface LandingZoneKPIs {
  totalNetworksManaged: number;
  activeConnectivityLinks: number;
  securityPolicyComplianceScore: number;
  averageProvisioningTimeSeconds: number;
  networkDriftCount: number;
}
