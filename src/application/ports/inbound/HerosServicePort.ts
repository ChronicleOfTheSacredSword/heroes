import {Heros} from "../../../domain/models/Heros";

export interface HerosServicePort {
    getHerosByUserId(id_user: number): Promise<Heros[] | null>;
    getHeroById(id_user: number, id_heros: number): Promise<Heros | null>;
    putHeros(heros: Omit<Heros, "id">): Promise<Heros>;
    updateHeros(heros: Heros): Promise<Heros | null>;
    deleteHeros(id_user: number, id_heros: number): Promise<number | null>;
}
