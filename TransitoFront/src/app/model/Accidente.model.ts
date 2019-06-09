import { Serializable } from './Serializable';
export class Accidente extends Serializable {
    public idaccidente: number;
    public latitud: number;
    public longitud: number;
    public nivelLluvia: number;
    public estadoCarretera: number;
    public fechaHora: Date

    get fechaHoraFormat(): string {
        if (this.fechaHora != null) {
            return this.fechaHora.toLocaleString();
        }
        return null;
    }
}