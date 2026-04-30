resource "aws_vpc" "hub_vpc" {
  cidr_block           = var.hub_vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "lz-hub-vpc-${var.environment}"
    Environment = var.environment
    Tier        = "HUB"
  }
}

resource "aws_subnet" "hub_transit_subnet" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.hub_vpc.id
  cidr_block        = cidrsubnet(var.hub_vpc_cidr, 4, count.index)
  availability_zone = element(var.availability_zones, count.index)

  tags = {
    Name = "lz-hub-transit-sn-${var.environment}-${element(var.availability_zones, count.index)}"
    Tier = "TRANSIT"
  }
}

resource "aws_subnet" "hub_inspection_subnet" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.hub_vpc.id
  cidr_block        = cidrsubnet(var.hub_vpc_cidr, 4, count.index + length(var.availability_zones))
  availability_zone = element(var.availability_zones, count.index)

  tags = {
    Name = "lz-hub-inspection-sn-${var.environment}-${element(var.availability_zones, count.index)}"
    Tier = "INSPECTION"
  }
}
