import {get} from '../../utils/request';

class Servicio{
    static getServicio(nro_documento){
        return get('/envios/api/segip/' + nro_documento);
    }
}

export default Servicio;