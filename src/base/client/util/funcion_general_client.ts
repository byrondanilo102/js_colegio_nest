//import {constantes} from './constantes';

class FuncionGeneralClient {
    
	static GetLabelBoolean(value:any){
        let label="NO";

        if(value==true || value=="true") {
            label="SI";
        }

        return label;
    }

    static GetLabelDate(value:Date){
        let label="";
        let date=new Date(value);

        let month=date.getMonth().toString();
        let day=date.getDay().toString();

        if(date.getMonth()<10) {
            month = "0"+date.getMonth();
        }

        if(date.getDay()<10) {
            day = "0"+date.getDay();
        }

        label=date.getFullYear() + "-"+ month + "-"+day;

        return label;
    }

    static GetLabelTime(value:Date){
        let label="";
        let date=new Date(value);

        let hour=date.getHours().toString();
        let minute=date.getMinutes().toString();
        let second=date.getSeconds().toString();

        if(date.getHours()<10) {
            hour = "0"+date.getHours();
        }

        if(date.getMinutes()<10) {
            minute = "0"+date.getMinutes();
        }

        if(date.getSeconds()<10) {
            second = "0"+date.getSeconds();
        }

        label=hour + ":"+ minute + ":"+second;

        return label;
    }
}

var funcion_general_client1 = new FuncionGeneralClient();

export {FuncionGeneralClient,funcion_general_client1};