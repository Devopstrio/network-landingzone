resource "aws_ec2_transit_gateway" "central_tgw" {
  description                     = "Central Transit Gateway for Landing Zone ${var.environment}"
  amazon_side_asn                 = var.tgw_asn
  auto_accept_shared_attachments  = "enable"
  default_route_table_association = "disable"
  default_route_table_propagation = "disable"
  dns_support                     = "enable"

  tags = {
    Name        = "lz-central-tgw-${var.environment}"
    Environment = var.environment
  }
}

resource "aws_ec2_transit_gateway_vpc_attachment" "hub_attachment" {
  subnet_ids         = var.hub_transit_subnet_ids
  transit_gateway_id = aws_ec2_transit_gateway.central_tgw.id
  vpc_id             = var.hub_vpc_id

  tags = {
    Name = "lz-tgw-hub-attach-${var.environment}"
  }
}

resource "aws_ec2_transit_gateway_route_table" "spoke_rt" {
  transit_gateway_id = aws_ec2_transit_gateway.central_tgw.id

  tags = {
    Name = "lz-tgw-spoke-rt-${var.environment}"
    Purpose = "Route traffic from spokes to inspection VPC"
  }
}
