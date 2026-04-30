from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_orders():
    return {'status': 'ok', 'regional_component': 'orders'}
