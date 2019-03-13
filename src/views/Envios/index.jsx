import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import SegipService from './servicio';
import ServicioDepartamento from '../Departamento/ServicioDepartamento';
import ServicioPais from '../Pais/ServicioPais';
import Person from '@material-ui/icons/Person';
import Remitente from './DatosRemitente';
import Destinatario from './DatosDestinatario';
import styles from '../utils/styles';

class Envios extends Component {
    constructor(props){
        super(props);
        this.state = {
            documentoIdentidad: '',
            nombreRemitente: '',
            apellidosremitente: '',
            departamentoRemitente: '',
            openDepartamentoRemitente: false,
            departamentoArray:[],
            paisRemitente:'',
            openPaisRemitente: false,
            paisArray:[],
            ciudadRemitente:'',
            openCiudadRemitente: false,
            ciudadArray:[],
            TipoTelefonoRemitente:'',
            openTipoTelefonoRemitente:'',
            TipoTelefonoRArray:[],

            nombreDestinatario: '',
            empresaDestinatario:'',
            paisDestinatario:'',
            openPaisDestinatario:false,
            emailDestinatario:'',
            direccionDestinatario:'',
            direcccion2Destinatario:'',
            cpostalDestinatario:'',
            ciudadDestino:'',
            estadoDestinatario:'',
            suburbioDestinatario:'',
            ttelefonoDestinatario:'',
            openTtelefonoDestinatario:false,
            telefonoDestinatario:'',
            openTelefonoDestinatario:'',
            ivaimpDestinatario:'',
            idfiscalDestinatario:'',
            iergDestinatario:'',
            identificacionFiscal:'',
            visibleIDFiscal: false,
            

        }

        this.onChangeIdentidad = this.onChangeIdentidad.bind(this);
        
    }

    componentDidMount = () => {
        ServicioDepartamento.getDepartamento().then((response) => {
            this.setState({departamentoArray:response});
        });
        ServicioPais.getPais().then((response) => {
            this.setState({paisArray:response});
        });
    }

    onChangeIdentidad = (evento) => {
        this.setState({documentoIdentidad: evento.target.value});
    }

    onBlurIdentidad = () => {
        SegipService.getServicio(this.state.documentoIdentidad).then((response) => {
            this.setState({
                nombreRemitente: response.Nombres,
                apellidosremitente: response.PrimerApellido + ' ' + response.SegundoApellido,
            });
        });
    }

    handleChangeDepartamentoRemitente = event => {
        this.setState({ departamentoRemitente: event.target.value });
      };
    
      handleCloseDepartamentoRemitente = () => {
        this.setState({ openDepartamentoRemitente: false });
      };
    
      handleOpenDepartamentoRemitente = () => {
        this.setState({ openDepartamentoRemitente: true });
      };

    handleChangePaisRemitente = event => {
        this.setState({paisRemitente: event.target.value});
    };
    handleClosePaisRemitente = () =>{
        this.setState({openPaisRemitente: false});
    };
    handleOpenPaisRemitente = () => {
        this.setState({openPaisRemitente: true});
    };

    handleChangeTipoTelefonoRemitente = event => {
        this.setState({tipoTelefonoRemitente: event.target.value});
    };

    handleCloseTipoTelefonoRemitente = () => {
        this.setState({openTipoTelefonoRemitente: false});
    };

    handleOpenTipoTelefonoRemitente = () => {
        this.setState({openTipoTelefonoRemitente:true});
    };

    handleChangeCiudadRemitente = event => {
        this.setState({ciudadRemitente: event.target.value});
    };

    handleCloseCiudadRemitente = () => {
        this.setState({openCiudadRemitente: false});
    };

    handleOpenCiudadRemitente = () => {
        this.setState({openCiudadRemitente: true});
    };

    onChangeNombreRemitente = (target) => {
        this.setState({nombreRemitente: target.value});
    }

    onChangeApellidosRemitente=(target) => {
        this.setState({apellidosremitente: target.value});
    }

    onChangePaisRemitente=(target) => {
        this.setState({paisRemitente: target.value});
    }

    onChangeDireccionRemitente=(target) => {
        this.setState({direccionRemitente: target.value});
    }

    onChangeDireccion2Remitente=(target) => {
        this.setState({direcccion2Remitente: target});
    }

    onChangeDepartamentoRemitente = (target) => {
        this.setState({
            departamentoRemitente: target.value
        });
    }

    onChangeCodigoPaisRemitente = (target) => {
        this.setState({
            codigoPaisRemitente: target.value
        });
    }

    onchangeCiudadRemitente = (target) =>{
        this.setState({
            ciudadRemitente: target.value
        });
    }

    onChangeEmailRemitente = (target) => {
        this.setState({
            emailRemitente: target.value
        });
    }

    onChangeTipoTelefonoRemitente = (target) => {
        this.setState({tipoTelefonoRemitente:target.value})
    }

    onChangeTelefonoRemitente = (target) => {
        this.setState({TelefonoRemitente:target.value})
    }

    onSubmitEnvio = (evento) => {
        evento.preventDefault();
        
    }

    /*Datos Destinatario*/

    onChangeNombreDestinatario = (target) => {
        this.setState({nombreDestinatario: target.value});
    }

    onChangeEmpresaDestinatario = (target) => {
        this.setState({empresaDestinatario:target.value});
    }

    onChangeEmailDestinatario = (target) => {
        this.setState({emailDestinatario:target.value});
    }
    onChangeDireccionDestinatario = (target) => {
        this.setState({direccionDestinatario:target.value});
    }

    onChangeDireccion2Destinatario = (target) => {
        this.setState({direcccion2Destinatario:target.value});
    }

    onChangeCpostal = (target) => {
        this.setState({cpostalDestinatario:target.value});
    }

    onChangeCiudadDestinatario = (target) => {
        this.setState({ciudadDestino:target.value});
    }

    onChangeEstadoDestinatario = (target) => {
        this.setState({estadoDestinatario:target.value});
    }

    oncChangeCpaisDestinatario = event => {
        this.setState({cpaisDestinatario: event.target.value});//tampoco hay esta variable en el state
    }

    handleChangePaisDestinatario = event => {
        this.setState({paisDestinatario: event.target.value});
        if(event.target.value == 3){ //id brazil = 3
            this.setState({visibleIDFiscal: true});
        }else{
            this.setState({visibleIDFiscal: false});
        }
    }

    onChangeTelefono = (target) => {
        this.setState({telefonoDestinatario:target.value});
    }

    onChangeSuburbioDestinatario =(target) => {
        this.setState({suburbioDestinatario:target.value});
    }

    onChangeIvaimpDestinatario = (target) => {
        this.setState({ivaimpDestinatario:target.value});
    }

    onChangeIdfiscalDestinatario = (target) =>{
        this.setState({idfiscalDestinatario:target.value});
    }

    onChangeIergDestinatario = (target) => {
        this.setState({iergDestinatario:target.value});
    }

    onChangeIdentificacionFiscal = (event) => {
        this.setState({identificacionFiscal: event.target.value});//por q esta msl si es lo mismo q los demad
    }
//chocooo, y alo tienes?sii, ya esta
    render(){
        const {classes} = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Remitente
                            onSubmitEnvio={this.onSubmitEnvio.bind(this)}
                            documentoIdentidad={this.state.documentoIdentidad}
                            onChangeIdentidad={this.onChangeIdentidad}
                            onBlurIdentidad={this.onBlurIdentidad}
                            
                            nombreRemitente={this.state.nombreRemitente}
                            onChangeNombreRemitente={this.onChangeNombreRemitente}
                            
                            apellidosremitente={this.state.apellidosremitente}
                            onChangeApellidosRemitente={this.onChangeApellidosRemitente}
                            
                            openPaisRemitente={this.state.openPaisRemitente}
                            handleClosePaisRemitente={this.handleClosePaisRemitente}
                            handleOpenPaisRemitente={this.handleOpenPaisRemitente}
                            paisRemitente={this.state.paisRemitente}
                            handleChangePaisRemitente={this.handleChangePaisRemitente}
                            paisArray={this.state.paisArray}
                            
                            direccionRemitente={this.state.direccionRemitente}
                            onChangeDireccionRemitente={this.onChangeDireccionRemitente}
                            
                            direcccion2Remitente={this.state.direcccion2Remitente}
                            onChangeDireccion2Remitente={this.onChangeDireccion2Remitente}
                            
                            openDepartamentoRemitente={this.state.openDepartamentoRemitente}
                            handleCloseDepartamentoRemitente={this.handleCloseDepartamentoRemitente}
                            handleOpenDepartamentoRemitente={this.handleOpenDepartamentoRemitente}
                            departamentoRemitente={this.state.departamentoRemitente}
                            handleChangeDepartamentoRemitente={this.handleChangePaisRemitente}
                            departamentoArray={this.state.departamentoArray}
                            
                            openCiudadRemitente={this.state.openCiudadRemitente}
                            handleCloseCiudadRemitente={this.handleCloseCiudadRemitente}
                            handleOpenCiudadRemitente={this.handleOpenCiudadRemitente}
                            ciudadRemitente={this.state.ciudadRemitente}
                            handleChangeCiudadRemitente={this.handleChangeCiudadRemitente}
                            ciudadArray={this.state.ciudadArray}

                            openTipoTelefonoRemitente={this.state.openTipoTelefonoRemitente}
                            handleCloseTipoTelefonoRemitente={this.handleCloseTipoTelefonoRemitente}
                            handleOpenTipoTelefonoRemitente={this.handleOpenTipoTelefonoRemitente}
                            tipoTelefonoRemitente={this.state.tipoTelefonoRemitente}
                            handleChangeTipoTelefonoRemitente={this.handleChangeTipoTelefonoRemitente}
                            tipoTelefonoRArray={this.state.TipoTelefonoRArray}

                            codigoPaisRemitente={this.state.codigoPaisRemitente}
                            onChangeCodigoPaisRemitente={this.onChangeCodigoPaisRemitente}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Destinatario
                            visibleIDFiscal = {this.state.visibleIDFiscal}
                            nombreDestinatario={this.state.nombreDestinatario}
                            onChangeNombreDestinatario={this.onChangeNombreDestinatario}

                            empresaDestinatario={this.state.empresaDestinatario}
                            onChangeEmpresaDestinatario={this.onChangeEmpresaDestinatario}

                            openPaisDestinatario={this.state.openPaisDestinatario}
                            handleClosePaisDestinatario={this.handleClosePaisDestinatario}
                            handleOpenPaisDestinatario={this.handleOpenPaisDestinatario}
                            paisDestinatario={this.state.paisDestinatario}
                            handleChangePaisDestinatario={this.handleChangePaisDestinatario}
                            paisArray={this.state.paisArray}

                            emailDestinatario={this.state.emailDestinatario}
                            onChangeEmailDestinatario={this.onChangeEmailDestinatario}

                            direccionDestinatario={this.state.direccionDestinatario}
                            onChangeDireccionDestinatario={this.onChangeDireccionDestinatario}

                            direcccion2Destinatario={this.state.direcccion2Destinatario}
                            onChangeDireccion2Destinatario={this.onChangeDireccion2Destinatario}

                            cpostalDestinatario={this.state.cpostalDestinatario}
                            onChangeCpostal={this.onChangeCpostal}

                            ciudadDestinatario={this.state.ciudadDestino}
                            onChangeCiudadDestinatario={this.onChangeCiudadDestinatario}

                            estadoDestinatario={this.state.estadoDestinatario}
                            onChangeEstadoDestinatario={this.onChangeEstadoDestinatario}

                            suburbioDestinatario={this.state.suburbioDestinatario}
                            onChangeSuburbioDestinatario={this.onChangeSuburbioDestinatario}

                            openTtelefonoDestinatario={this.state.openTtelefonoDestinatario}
                            handleCloseTtelefonoDestinatario={this.handleCloseTtelefonoDestinatario}
                            handleOpenTtelefonoDestinatario={this.handleOpenTtelefonoDestinatario}
                            ttelefonoDestinatario={this.state.ttelefonoDestinatario}
                            handleChangeTtelefonoDestinatario={this.handleChangeTtelefonoDestinatario}
                            ttelefonoArray={this.state.ttelefonoArray}

                            cpaisDestinatario={this.state.cpaisDestinatario}
                            oncChangeCpaisDestinatario={this.oncChangeCpaisDestinatario}

                            telefonoDestinatario={this.state.telefonoDestinatario}
                            onChangeTelefonoDestinatario={this.onChangeTipoTelefonoRemitente}

                            ivaimpDestinatario={this.state.ivaimpDestinatario}
                            onChangeIvaimpDestinatario={this.onChangeIvaimpDestinatario}

                            idfiscalDestinatario={this.state.idfiscalDestinatario}
                            onChangeIdfiscalDestinatario={this.onChangeIdfiscalDestinatario}

                            iergDestinatario={this.state.iergDestinatario}
                            onChangeIergDestinatario={this.onChangeIergDestinatario}

                            identificacionFiscal={this.state.identificacionFiscal}
                            onChangeIdentificacionFiscal={this.onChangeIdentificacionFiscal}

                            //ya esta haber
                        />
                        
                    </GridItem>
                </GridContainer>

            </div>
        );
    }
}

Envios.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Envios);