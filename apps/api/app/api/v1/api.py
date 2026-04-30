from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, networks, connectivity, security, routing, dashboard, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(networks.router, prefix="/networks", tags=["networks"])
api_router.include_router(connectivity.router, prefix="/connectivity", tags=["connectivity"])
api_router.include_router(security.router, prefix="/security", tags=["security"])
api_router.include_router(routing.router, prefix="/routing", tags=["routing"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
