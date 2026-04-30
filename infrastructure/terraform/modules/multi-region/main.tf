module "region_primary" {
  source = "../kubernetes"
  region = var.primary_region
  vpc_cidr = "10.1.0.0/16"
}

module "region_secondary" {
  source = "../kubernetes"
  region = var.secondary_region
  vpc_cidr = "10.2.0.0/16"
}

resource "aws_route53_record" "global_api" {
  zone_id = var.dns_zone_id
  name    = "api.global.local"
  type    = "CNAME"
  ttl     = 60

  latency_routing_policy {
    region = var.primary_region
  }

  set_identifier = "primary"
  records        = [module.region_primary.ingress_dns]
}

resource "aws_route53_record" "global_api_secondary" {
  zone_id = var.dns_zone_id
  name    = "api.global.local"
  type    = "CNAME"
  ttl     = 60

  latency_routing_policy {
    region = var.secondary_region
  }

  set_identifier = "secondary"
  records        = [module.region_secondary.ingress_dns]
}
