import {Heros} from "../../../domain/models/Heros";

export interface HerosRepositoryPort {
    findByUserId(id_user: number): Promise<Heros[] | null>;
    findByHeroId(id_user: number, id_heros: number): Promise<Heros | null>;
    save(heros: Omit<Heros, "id">): Promise<Heros>;
    update(heros: Heros): Promise<Heros | null>;
    delete(id_user: number, id_heros: number): Promise<number | null>;
}