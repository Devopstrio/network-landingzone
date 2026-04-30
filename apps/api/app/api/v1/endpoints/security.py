from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_security():
    return {'status': 'ok', 'lz_component': 'security'}
