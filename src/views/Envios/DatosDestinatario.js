import React from 'react';
import PropTypes from 'prop-types';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Person from '@material-ui/icons/Person';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import styles from '../utils/styles';
import SelectValidator from 'react-material-ui-form-validator/lib/SelectValidator';

class DatosDestinatario extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}><Person/>DATOS DEL DESTINATARIO (A)</h4>
                    <p className={classes.cardCategoryWhite}>Complete los datos requeridos</p>
                </CardHeader>
                <CardBody md={12}>
                    <ValidatorForm
                        refs={'formEnvio'}
                        onSubmit={this.props.onSubmitEnvio}
                    >
                        <Grid container md={12}>
                            <Grid item md={12}>
                                <TextValidator
                                    id='nombre_destinatario'
                                    name='nombre_destinatario'
                                    label={'Nombre Completo'}
                                    value={this.props.nombreDestinatario}
                                    onChange={this.props.onChangeNombreDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='empresa_destinatario'
                                    name='empresa_destinatario'
                                    label={'Empresa'}
                                    value={this.props.empresaDestinatario}
                                    onChange={this.props.onChangeEmpresaDestinatario}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item md={12}>
                                        <SelectValidator
                                            id='paisDestinatario'
                                            name= 'paisDestinatario'
                                            label='Pais Dest.'
                                            open={this.props.openPaisDestinatario}
                                            onClose={this.props.handleClosePaisDestinatario}
                                            onOpen={this.props.handleOpenPaisDestinatario}
                                            value={this.props.paisDestinatario}
                                            onChange={this.props.handleChangePaisDestinatario}
                                        >
                                        {
                                            this.props.paisArray.map((item,position) => {
                                                return [
                                                    <MenuItem value={item.id} key={position +1 }>{item.nombre}</MenuItem>        
                                                ];
                                                }

                                            )
                                        }
                                        </SelectValidator>
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='email_destinatario'
                                    name='email_destinatario'
                                    label={'Direccion de correo electronico'}
                                    value={this.props.emailDestinatario}
                                    onChange={this.props.onChangeEmailDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='direccion_destinatario'
                                    name='direccion_destinatario'
                                    label={'Direccion'}
                                    value={this.props.direccionDestinatario}
                                    onChange={this.props.onChangeDireccionDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='direccion2_destinatario'
                                    name='direccion2_destinatario'
                                    label={'Direccion 2'}
                                    value={this.props.direccion2Destinatario}
                                    onChange={this.props.onChangeDireccion2Destinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextValidator
                                    id='cpostal_destinatario'
                                    name='cpostal_destinatario'
                                    label={'Codigo Postal'}
                                    value={this.props.cpostalDestinatario}
                                    onChange={this.props.onChangeCpostalDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={1}>
                                
                            </Grid>
                            <Grid item md={8}>
                                <TextValidator
                                    id='ciudad_destinatario'
                                    name='ciudad_destinatario'
                                    label={'Ciudad'}
                                    value={this.props.ciudadDestinatario}
                                    onChange={this.props.onChangeCiudadDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                
                                <TextValidator
                                    id='suburbio_destinatario'
                                    name='suburbio_destinatario'
                                    label={'Suburbio'}
                                    value={this.props.suburbioDestinatario}
                                    onChange={this.props.onChangeSuburbioDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={1}>
                                
                            </Grid>
                            <Grid item md={8}>
                            <TextValidator
                                    id='estado_destinatario'
                                    name='estado_destinatario'
                                    label={'Estado'}
                                    value={this.props.estadoDestinatario}
                                    onChange={this.props.onChangeEstadoDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={5}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="ttelefonoDestinatario">Tipo de Telefono</InputLabel>
                                        <Select
                                            open={this.props.openTtelefonoDestinatario}
                                            onClose={this.props.handleCloseTtelefonoDestinatario}
                                            onOpen={this.props.handleOpenTtelefonoDestinatario}
                                            value={this.props.ttelefonoDestinatario}
                                            onChange={this.props.handleChangeTtelefonoDestinatario}
                                            inputProps={{
                                                name: 'ttelefonoDestinatario',
                                                id: 'ttelefonoDestinatario',
                                            }}
                                        >
                                        {
                                            this.props.paisArray.map((item,position) => {
                                                return [
                                                    <MenuItem value={item.id} key={position +1 }>{item.nombre}</MenuItem>        
                                                ];
                                                }

                                            )
                                        }
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item md={2}>
                                <TextValidator
                                    id='cpais_destinatario'
                                    name='cpais_destinatario'
                                    label={'Codigo de Pais'}
                                    value={this.props.cpaisDestinatario}
                                    onChange={this.props.onChangePaisDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={1}>
                                
                            </Grid>
                            <Grid item md={4}>
                                <TextValidator
                                    id='telefono_destinatario'
                                    name='telefono_destinatario'
                                    label={'Telefono'}
                                    value={this.props.telefonoDestinatario}
                                    onChange={this.props.onChangeTelefonoDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='ivaimp_destinatario'
                                    name='ivaimp_destinatario'
                                    label={'Identificacion IVA/Impuesto'}
                                    value={this.props.ivaimpDestinatario}
                                    onChange={this.props.onChangeIvaimpDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <div className={!this.props.visibleIDFiscal?classes.classHidden:''} id='divOcultar'>
                            <Grid item md={12}>
                                <FormControl>
                                    <RadioGroup
                                        arial-label='identificacion'
                                        name='identificacion'
                                        value={this.props.identificacionFiscal}//??? cual o que 
                                        onChange={this.props.onChangeIdentificacionFiscal}
                                        style={{ display: 'flex', width: 'auto', flexDirection: 'row' }}>
                                    >
                                        <FormControlLabel
                                            value={'cnpj'}
                                            control={<Radio/>}
                                            label='CNPJ'
                                        />
                                        <FormControlLabel
                                            value={'cpf'}
                                            control={<Radio/>}
                                            label='CPJ'
                                        />
                                        
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='idfiscal_destinatario'
                                    name='idfiscal_destinatario'
                                    label={'CNPJ/CPF de Identificacion Fiscal'}
                                    value={this.props.idfiscalDestinatario}
                                    onChange={this.props.onChangeIdfiscalDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextValidator
                                    id='ierg_destinatario'
                                    name='ierg_destinatario'
                                    label={'IE / RG'}
                                    value={this.props.iergDestinatario}
                                    onChange={this.props.onChangeIergDestinatario}
                                    fullWidth
                                />
                            </Grid>
                            </div>
                        </Grid>
                    </ValidatorForm>
                </CardBody>
            </Card>

        );
    }
}

DatosDestinatario.propTypes = {
    classes: PropTypes.object,
    onSubmitEnvio:PropTypes.func.isRequired,

    nombreDestinatario:PropTypes.string,
    onChangeNombreDestinatario: PropTypes.func,

    empresaDestinatario:PropTypes.string,
    onChangeEmpresaDestinatario: PropTypes.func,

    openPaisDestinatario:PropTypes.bool,
    handleClosePaisDestinatario: PropTypes.func,
    handleOpenPaisDestinatario: PropTypes.func,
    paisDestinatario: PropTypes.string,
    handleChangePaisDestinatario: PropTypes.func,
    paisArray:PropTypes.array,

    emailDestinatario:PropTypes.string,
    onChangeEmailDestinatario:PropTypes.func,

    direccionDestinatario:PropTypes.string,
    onChangeDireccionDestinatario:PropTypes.func,

    direccion2Destinatario:PropTypes.string,
    onChangeDireccion2Destinatario:PropTypes.func,

    cpostalDestinatario:PropTypes.string,
    onChangeCpostalDestinatario:PropTypes.func,

    ciudadDestinatario:PropTypes.string,
    onChangeCiudadDestinatario:PropTypes.func,

    estadoDestinatario:PropTypes.string,
    onChangeEstadoDestinatario:PropTypes.func,

    suburbioDestinatario:PropTypes.string,
    onChangeSuburbioDestinatario:PropTypes.func,

    openTtelefonoDestinatario:PropTypes.bool,
    handleCloseTtelefonoDestinatario: PropTypes.func,
    handleOpenTtelefonoDestinatario: PropTypes.func,
    ttelefonoDestinatario: PropTypes.string,
    handleChangeTtelefonoDestinatario: PropTypes.func,
    ttelefonoArray:PropTypes.array,

    cpaisDestinatario:PropTypes.string,
    onChangeCpaisDestinatario:PropTypes.func,

    telefonoDestinatario:PropTypes.string,
    onChangeTelefono:PropTypes.func,

    ivaimpDestinatario:PropTypes.string,
    onChangeIvaimpDestinatario:PropTypes.func,

    idfiscalDestinatario:PropTypes.string,
    onChangeIdfiscalDestinatario:PropTypes.func,

    iergDestinatario:PropTypes.string,
    onChangeIergDestinatario:PropTypes.func,
    
    identificacionFiscal:PropTypes.string,
    onChangeIdentificacionFiscal:PropTypes.func,

    visibleIDFiscal:PropTypes.boolean,
    
}
export default withStyles(styles)(DatosDestinatario);