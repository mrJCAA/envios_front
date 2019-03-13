import {get} from '../../utils/request';

class ServicioDepartamento{
    static getDepartamento(){
        return get('/envios/api/departamento');
    }
}

export default ServicioDepartamento;