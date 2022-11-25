import { ModeloDatos } from "./datos.modelo";

export class ModeloIdentificar{
    datos?: ModeloDatos;
    tk?: String;
    rol?: String;
    estaIdentificado: boolean = false;
}