from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, users, orders, region, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(orders.router, prefix="/orders", tags=["orders"])
api_router.include_router(region.router, prefix="/region", tags=["region"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
