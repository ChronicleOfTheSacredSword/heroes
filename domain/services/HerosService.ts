import {HerosServicePort} from "../../application/ports/inbound/HerosServicePort";
import {HerosRepositoryPort} from "../../application/ports/outbound/HerosRepositoryPort";

export class HerosService implements HerosServicePort {
  constructor(private readonly repo: HerosRepositoryPort) {}

}