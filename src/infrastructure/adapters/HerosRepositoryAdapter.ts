import {HerosRepositoryPort} from "../../application/ports/outbound/HerosRepositoryPort";
import {Heros} from "../../domain/models/Heros";
import {sendLogMessage} from "../../domain/services/sendLogMessage"
import db from '../../../db';

class HerosRepo implements HerosRepositoryPort {

    async findByUserId(id_user: number): Promise<Heros[] | null> {
        const res = await db.query(
            `
			SELECT
				*
			FROM heroes
			WHERE id_user = $1
			`,
            [id_user]
        );

        return res.rows ?? null;
    }

    async findByHeroId(id_user: number, id_hero: number): Promise<Heros | null> {
        const res = await db.query(
            `
			SELECT
				*
			FROM heroes
			WHERE id_user = $1
			AND id = $2
			`,
            [id_user, id_hero]
        );

        return res.rows[0] ?? null;
    }

    async save(heros: Omit<Heros, 'id'>): Promise<Heros> {
        const res = await db.query(
            `
			INSERT INTO heroes (
			    id_user,
				name,
				class,
			    pv,
			    atk,
			    lvl,
			    xp,
			    gold
			)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
			RETURNING
				id,
				name
			`,
            [
                heros.id_user,
                heros.name,
                heros.class,
                heros.pv,
                heros.atk,
                heros.lvl,
                heros.xp,
                heros.gold
            ]
        );

        sendLogMessage({
            id_user: heros.id_user as number,
            content: `The user ${heros.id_user} created a new heros ${heros.name}.`
        }).catch(err => {
            console.error("RabbitMQ log failed:", err.message);
        });

        return res.rows[0];
    }

    async update(heros: Heros): Promise<Heros | null> {
        const res = await db.query(
            `
			UPDATE heroes
			SET name = $1,
			    class = $2,
			    pv = $3,
			    atk = $4,
			    lvl = $5,
			    xp = $6,
			    gold = $7
			WHERE id = $8
			AND id_user = $9
            RETURNING
				id,
				name
			`,
            [
                heros.name,
                heros.class,
                heros.pv,
                heros.atk,
                heros.lvl,
                heros.xp,
                heros.gold,
                heros.id,
                heros.id_user
            ]
        );

        sendLogMessage({
            id_user: heros.id_user as number,
            content: `The user ${heros.id_user} updated the hero ${heros.id}-${heros.name}.`
        }).catch(err => {
            console.error("RabbitMQ log failed:", err.message);
        });


        return res.rows[0] ?? null;
    }

    async delete(id_user: number, id_heros: number): Promise<number> {
        const res = await db.query(
            `
			DELETE FROM heroes
			WHERE id = $1
            AND id_user = $2
            RETURNING
				id,
				name
			`,
            [
                id_heros,
                id_user
            ]
        );

        sendLogMessage({
            id_user: id_user as number,
            content: `The user ${id_user} deleted the hero ${id_heros}.`
        }).catch(err => {
            console.error("RabbitMQ log failed:", err.message);
        });

        return res.rows[0];
    }

} export default HerosRepo