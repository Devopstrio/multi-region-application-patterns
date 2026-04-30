resource "aws_vpc_peering_connection" "cross_region" {
  peer_vpc_id   = var.peer_vpc_id
  vpc_id        = var.vpc_id
  peer_region   = var.peer_region
  auto_accept   = false

  tags = {
    Name = "multi-region-vpc-peering"
  }
}

resource "aws_route" "cross_region_route" {
  route_table_id            = var.route_table_id
  destination_cidr_block    = var.peer_cidr_block
  vpc_peering_connection_id = aws_vpc_peering_connection.cross_region.id
}
