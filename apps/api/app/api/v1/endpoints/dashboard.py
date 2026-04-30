from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_dashboard():
    return {'status': 'ok', 'lz_component': 'dashboard'}
