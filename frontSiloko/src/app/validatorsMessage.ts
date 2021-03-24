export class ValidatorsMessage {



    public   getMessageRequired(nombreCampo:string):string{
        return "El campo "+nombreCampo+" es obligatorio";
    }

    public  getMessageEmailError():string{
        return "El correo electronico es invalido";
    }

    public  getMessageEmailRequired():string{
        return "El correo electronico es obligatorio";
    }

    public   getMessageRequiredNumber(nombreCampo:string):string{
        return "El campo "+nombreCampo+" debe ser numerico";
    }

}
