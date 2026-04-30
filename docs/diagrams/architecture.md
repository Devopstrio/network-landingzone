# Hub-and-Spoke Architecture Diagrams

## 11. Global Transit Architecture (Detailed)
*The core network routing flow between on-prem, hub, and spokes.*

```mermaid
graph TD
    subgraph "External Connectivity"
        Internet[Internet Gateway]
        OnPrem[Corporate Datacenter]
    end
    subgraph "Hub VPC (Centralized Routing)"
        NAT[NAT Gateway]
        FW[Next-Gen Firewall]
        TGW[Transit Gateway]
    end
    subgraph "Workload Spokes"
        Spoke1[Production VPC]
        Spoke2[Non-Production VPC]
        Shared[Shared Services VPC]
    end

    Internet -->|Ingress| FW
    FW -->|Clean Traffic| TGW
    OnPrem <-->|DX/VPN| TGW
    
    Spoke1 -->|VPC Attach| TGW
    Spoke2 -->|VPC Attach| TGW
    Shared -->|VPC Attach| TGW

    TGW -->|Egress| FW
    FW -->|Outbound| NAT
    NAT --> Internet
```

## 15. Cross-VPC Peering vs Transit Gateway
```mermaid
graph LR
    P[Peer] --> V[VPC]
    V --> T[TGW]
```

## 20. Centralized Egress Flow
```mermaid
graph TD
    Spoke[Spoke Private Subnet] --> TGW[Transit Gateway]
    TGW --> FW[Hub Firewall]
    FW --> NAT[Hub NAT Gateway]
    NAT --> IGW[Hub Internet Gateway]
    IGW --> Web[Public Internet]
```

## 25. Shared Services DNS Resolution
```mermaid
graph LR
    S[Spok] --> D[DNS]
    D --> R[Reso]
```
