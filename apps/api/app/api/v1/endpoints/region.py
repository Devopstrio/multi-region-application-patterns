from fastapi import APIRouter
from app.core.config import settings
router = APIRouter()
@router.get('/status')
def get_region_status():
    return {'current_region': settings.CURRENT_REGION, 'primary_region': settings.PRIMARY_REGION, 'health': 'HEALTHY', 'latency_to_primary': 85.2}
