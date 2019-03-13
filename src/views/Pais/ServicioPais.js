import {get} from '../../utils/request';

class ServicioPais{
    static getPais(){
        return get('/envios/api/pais');
    }
}

export default ServicioPais;