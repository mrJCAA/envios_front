import React from 'react';
import PropTypes from 'prop-types';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Person from '@material-ui/icons/Person';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from '../utils/styles';

class DatosRemitente extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}><Person/>DATOS DEL REMITENTE (DE)</h4>
                    <p className={classes.cardCategoryWhite}>Complete los datos requeridos</p>
                </CardHeader>
                <CardBody md={12}>
                    <ValidatorForm
                        refs={'formEnvio'}
                        onSubmit={this.props.onSubmitEnvio}
                    >
                        <Grid container md={12}>
                            <Grid item md={6}>
                                <TextValidator
                                    id='documento_identidad'
                                    name='documento_identidad'
                                    label={'Documento de Identidad'}
                                    value={this.props.documentoIdentidad}
                                    onChange={this.props.onChangeIdentidad}
                                    onBlur={this.props.onBlurIdentidad}
                                    validators={['isNumber']}
                                    errorMessages={['CI no valido']}   
                                    fullWidth       
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextValidator
                                    id='fecha_nacimiento'
                                    name='fecha_nacimiento'
                                    label={'Fecha de Nacimiento'}
                                    value={this.props.fechaNacimiento}
                                    onChange={this.props.onChangeNacimiento}
                                    onBlur={this.props.onBlurNacimiento}
                                    validators={['isNumber']}
                                    errorMessages={['Fecha Incorrecta']}   
                                    fullWidth       
                                />

                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='nombre_remitente'
                                    name='nombre_remitente'
                                    label={'Nombre'}
                                    value={this.props.nombreRemitente}
                                    onChange={this.props.onChangeNombreRemitente}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='apellidos_remitente'
                                    name='apellidos_remitente'
                                    label={'Apellidos'}
                                    value={this.props.apellidosremitente}
                                    onChange={this.props.onChangeApellidosRemitente}
                                    fullWidth
                                />
                            </Grid><br/>
                            <Grid item md={8}>
                                <SelectValidator
                                    id='paisRemitente'
                                    name='paisRemitente'
                                    label={'Pais Remitente'}
                                    open={this.props.openPaisRemitente}
                                    onClose={this.props.handleClosePaisRemitente}
                                    onOpen={this.props.handleOpenPaisRemitente}
                                    value={this.props.paisRemitente}
                                    onChange={this.props.handleChangePaisRemitente}
                                    fullWidth
                                >
                                {
                                    this.props.paisArray.map((item,position) => {
                                        return [
                                            <MenuItem value={item.id} key={position +1 }>{item.nombre}</MenuItem>        
                                        ];
                                    })
                                }
                                </SelectValidator>
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='direccion_remitente'
                                    name='direccion_remitente'
                                    label={'Direccion'}
                                    value={this.props.direccionRemitente}
                                    onChange={this.props.onChangeDireccionRemitente}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='direccion2_remitente'
                                    name='direccion2_remitente'
                                    label={'Direccion 2'}
                                    value={this.props.direcccion2Remitente}
                                    onChange={this.props.onChangeDireccion2Remitente}
                                    fullWidth
                                />
                            </Grid><br/>
                            <Grid container>
                                <Grid item md={5}>
                                    <SelectValidator
                                        id='departamentoRemitente'
                                        name='departamentoRemitente'
                                        open={this.props.openDepartamentoRemitente}
                                        onClose={this.props.handleCloseDepartamentoRemitente}
                                        onOpen={this.props.handleOpenDepartamentoRemitente}
                                        value={this.props.departamentoRemitente}
                                        onChange={this.props.handleChangeDepartamentoRemitente}
                                        fullWidth
                                    >
                                    {
                                        this.props.departamentoArray.map((item,position) => {
                                            return [
                                                <MenuItem value={item.id} key={position +1 }>{item.nombre}</MenuItem>        
                                            ];
                                            }

                                        ,this)
                                    }
                                    </SelectValidator>
                                </Grid>
                                <Grid item md={2}></Grid>
                                <Grid item md={5}>
                                    <SelectValidator
                                        name='ciudad_remitente'
                                        id='ciudad_remitente'
                                        open={this.props.openCiudadRemitente}
                                        onClose={this.props.handleCloseCiudadRemitente}
                                        onOpen={this.props.handleOpenCiudadRemitente}
                                        value={this.props.ciudadRemitente}
                                        onChange={this.props.handleChangeCiudadRemitente}
                                        fullWidth
                                    >
                                    {
                                        this.props.ciudadArray.map((item,position) => {
                                            return [
                                                <MenuItem value={item.id} key={position +1}>{item.nombre}</MenuItem>
                                            ];
                                            }
                                        ,this)  
                                    }
                                    </SelectValidator>
                                </Grid>
                            </Grid><br/>
                            <Grid item md={12}>
                                    <TextValidator
                                        id='email_remitente'
                                        name='email_remitente'
                                        label={'Correo Electronico'}
                                        value={this.props.emailRemitente}
                                        onChange={this.props.onChangeEmailRemitente}
                                        fullWidth
                                    />
                            </Grid><br/>
                            <Grid container md={12}>
                                <Grid item md={5}>
                                    <SelectValidator
                                        name='tipo_telefono_remitente'
                                        id='tipo_telefono_remitente'
                                        label={'Tipo de Telefono'}
                                        open={this.props.openTipoTelefonoRemitente}
                                        onClose={this.props.handleCloseTipoTelefonoRemitente}
                                        onOpen={this.props.handleOpenTipoTelefonoRemitente}
                                        value={this.props.TipoTelefonoRemitente}
                                        onChange={this.props.handleChangeTipoTelefonoRemitente}
                                    >
                                    {
                                        this.props.tipoTelefonoRArray.map((item,position) => {
                                            return [
                                                <MenuItem value={item.id} key={position +1}>{item.nombre}</MenuItem>
                                            ];
                                            }
                                        ,this)  
                                    }
                                    </SelectValidator>
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={2}>
                                    <TextValidator
                                        id='codigo_pais_remitente'
                                        name='codigo_pais_remitente'
                                        label={'Codigo Pais'}
                                        value={this.props.codigoPaisRemitente}
                                        onChange={this.props.onChangeCodigoPaisRemitente}
                                    />
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={3}>    
                                    <TextValidator
                                        id='telefono_remitente'
                                        name='telefono_remitente'
                                        label={'Telefono'}
                                        value={this.props.telefonoRemitente}
                                        onChange={this.props.onChangeTelefonoRemitente}
                                    />   
                                </Grid> 
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </CardBody>
            </Card> 
        );                            
    }
}

DatosRemitente.propTypes = {
    classes: PropTypes.object,
    onSubmitEnvio: PropTypes.func.isRequired,
    documentoIdentidad: PropTypes.string,
    onChangeIdentidad: PropTypes.func,
    onBlurIdentidad: PropTypes.func,
    
    nombreRemitente:PropTypes.string,
    onChangeNombreRemitente: PropTypes.func,
    
    apellidosremitente: PropTypes.string,
    onChangeApellidosRemitente: PropTypes.func,
    
    openPaisRemitente:PropTypes.bool,
    handleClosePaisRemitente: PropTypes.func,
    handleOpenPaisRemitente: PropTypes.func,
    paisRemitente: PropTypes.string,
    handleChangePaisRemitente: PropTypes.func,
    paisArray:PropTypes.array,
    
    direccionRemitente: PropTypes.string,
    onChangeDireccionRemitente: PropTypes.func,
    
    direcccion2Remitente: PropTypes.string,
    onChangeDireccion2Remitente: PropTypes.func,
    
    openDepartamentoRemitente: PropTypes.bool,
    handleCloseDepartamentoRemitente: PropTypes.func,
    handleOpenDepartamentoRemitente: PropTypes.func,
    departamentoRemitente: PropTypes.string,
    handleChangeDepartamentoRemitente: PropTypes.func,
    
    openTipoTelefonoRemitente:PropTypes.string,
    handleCloseTipoTelefonoRemitente:PropTypes.func,
    handleOpenTipoTelefonoRemitente:PropTypes.func,
    tipoTelefonoRemitente:PropTypes.string,
    handleChangeTipoTelefonoRemitente:PropTypes.func,
    tipoTelefonoRArray:PropTypes.array,
    
    codigoPaisRemitente: PropTypes.string,
    onChangeCodigoPaisRemitente: PropTypes.func,

    telefonoRemitente: PropTypes.string,
    onChangeTelefonoRemitente: PropTypes.func,
}

export default withStyles(styles)(DatosRemitente);
