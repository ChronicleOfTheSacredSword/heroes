import { HerosServicePort } from "../../application/ports/inbound/HerosServicePort";
import { Express, Response, Request } from "express";
import { Heros } from "../../domain/models/Heros";

export class HerosController {
  constructor(private herosServicePort: HerosServicePort) {}

  registerRoutes(app: Express) {
    app.get('/heros', this.getHeros.bind(this));
    app.post('/heros', this.insertHeros.bind(this));
    app.put('/heros', this.updateHeros.bind(this));
    app.delete('/heros', this.deleteHeros.bind(this));
    app.get('/heros/:id_user', this.getHerosById.bind(this));
  }
  // const { title } = req.query; // Accessing query parameters (delete)

  async getHeros(req: Request, res: Response) {
    const id_user: number = Number.parseInt(req.query.user as string);
    const id_hero: number = Number.parseInt(req.query.hero as string);

    if (isNaN(id_user) || isNaN(id_hero)){
      res.status(422).send({ message: `Unprocessable Content` });
    }
    else {
      const hero = await this.herosServicePort.getHeroById(id_user, id_hero);
      if (hero) {
        res.status(200).send(hero);
      } else {
        res.status(404).send({ message: `Hero ${id_hero} from User ${id_user} not found` });
      }
    }
  }

  async getHerosById(req: Request, res: Response) {
    const id_user: number = Number.parseInt(req.params.id_user);
    const heroes = await this.herosServicePort.getHerosByUserId(id_user);
    if (heroes) {
      res.status(200).send(heroes);
    } else {
      res.status(404).send({ message: `User ${id_user} heroes not found` });
    }
  }

  async insertHeros(req: Request, res: Response) {
    const created: Heros = await this.herosServicePort.putHeros(req.body);
    if (created === null) {
      res.status(404).send({ message: "Hero could not be saved" });
    } else {
      res.status(201).send(created);
    }
  }

  async updateHeros(req: Request, res: Response) {
    const updated: Heros | null = await this.herosServicePort.updateHeros(req.body);
    if (updated === null) {
      res.status(404).send({ message: "Hero could not be updated" });
    } else {
      res.status(201).send(updated);
    }
  }

  async deleteHeros(req: Request, res: Response) {
    const id_user: number = Number.parseInt(req.query.user as string);
    const id_hero: number = Number.parseInt(req.query.hero as string);

    if (isNaN(id_user) || isNaN(id_hero)){
      res.status(422).send({ message: `Unprocessable Content` });
    }
    else {
      const deleted: number | null = await this.herosServicePort.deleteHeros(id_user, id_hero);
      if (deleted === null) {
        res.status(404).send({ message: "Hero could not be deleted" });
      } else {
        res.status(201).send(deleted);
      }
    }
  }
}
