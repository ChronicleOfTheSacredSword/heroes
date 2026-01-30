import { HerosServicePort } from "../../application/ports/inbound/HerosServicePort";
import { Express, Response, Request } from "express";
// import {Tree} from "../../domain/models/Tree";

export class TreeController {
  constructor(private inventoryService: HerosServicePort) {}

  registerRoutes(app: Express) {
    app.post('/heros', this.getHeros.bind(this));
    app.post('/heros', this.insertHeros.bind(this));
    app.put('/heros', this.updateHeros.bind(this));
    app.delete('/heros', this.deleteHeros.bind(this));
    app.get('/heros/:id_user', this.getHerosById.bind(this));
  }
  // const { title } = req.query; // Accessing query parameters (delete)

  async getHeros(req: Request, res: Response) {
    const id_user: number = Number.parseInt(req.params.id);
    const inventory = await this.inventoryService.getHerosById(id_user);
    if (inventory) {
      res.status(200).send(inventory);
    } else {
      res.status(404).send({ message: `User ${id_user} inventory not found` });
    }
  }

  async getHerosById(req: Request, res: Response) {
    const id_user: number = Number.parseInt(req.params.id);
    const inventory = await this.inventoryService.getHerosById(id_user);
    if (inventory) {
      res.status(200).send(inventory);
    } else {
      res.status(404).send({ message: `User ${id_user} inventory not found` });
    }
  }

  insertHeros(req: Request, res: Response) {
    // const created: Tree = this.treeService.save(req.body);
    // if (created === null) {
    //   res.status(404).send({ message: "Tree could not be saved" });
    // } else {
    //   res.status(201).send(created);
    // }
  }

  updateHeros(req: Request, res: Response) {
    // const updated: Tree | null = this.treeService.update(req.body);
    // if (updated === null) {
    //   res.status(404).send({message: "Tree could not be updated"});
    // } else {
    //   res.status(200).send(updated);
    // }
  }

  deleteHeros(req: Request, res: Response) {
    // const id = req.params.uuid;
    // const deleted: Tree | null = this.treeService.delete(id);
    // if (deleted === null) {
    //   res.status(404).send({message: "Tree could not be deleted"});
    // } else {
    //   res.status(200).send(deleted);
    // }
  }
}