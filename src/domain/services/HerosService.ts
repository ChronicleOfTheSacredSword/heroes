import {HerosServicePort} from "../../application/ports/inbound/HerosServicePort";
import {HerosRepositoryPort} from "../../application/ports/outbound/HerosRepositoryPort";
import {Heros} from "../models/Heros";

export class HerosService implements HerosServicePort {
  constructor(private readonly repo: HerosRepositoryPort) {}

  getHerosByUserId(id_user: number): Promise<Heros[] | null>{
    return this.repo.findByUserId(id_user);
  }

  getHeroById(id_user: number, id_heros: number): Promise<Heros | null>{
    return this.repo.findByHeroId(id_user, id_heros);
  }

  putHeros(heros: Omit<Heros, "id">): Promise<Heros>{
    return this.repo.save(heros);
  }

  updateHeros(heros: Heros): Promise<Heros | null>{
    return this.repo.update(heros);
  }

  deleteHeros(id_user: number, id_heros: number): Promise<number | null>{
    return this.repo.delete(id_user, id_heros);
  }
}