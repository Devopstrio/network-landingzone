from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_routing():
    return {'status': 'ok', 'lz_component': 'routing'}
