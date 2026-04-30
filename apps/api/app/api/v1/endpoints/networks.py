from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_networks():
    return {'networks': [{'id': 'hub-01', 'tier': 'HUB', 'cidr': '10.0.0.0/16', 'status': 'ACTIVE'}]}
@router.post('/create')
def create_network():
    return {'status': 'Provisioning started', 'job_id': 'PROV-112'}
