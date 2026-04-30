from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_metrics():
    return {'status': 'ok', 'regional_component': 'metrics'}
