export class ValidatorsMessage {



    public   getMessageRequired(nombreCampo:string):string{
        return "El campo "+nombreCampo+" es obligatorio";
    }

    public  getMessageEmailError():string{
        return "El correo electrónico es inválido";
    }

    public  getMessageEmailRequired():string{
        return "El correo electrónico es obligatorio";
    }

    public   getMessageRequiredNumber(nombreCampo:string):string{
        return "El campo "+nombreCampo+" debe ser numérico";
    }

}
