# Service Heros API
API du service de héros

## Version: 1.0.0

**Contact information:**  
louys370@gmail.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

---
## Heros
Operations sur les héros d'un utilisateur

### [GET] /heros
**recherche d'un héros d'un utilisateur**

En entrant les options appropriés, vous pouvez trouver
un héros d'un joueur.

#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| idUser | query | Identifiant de l'utilisateur | Yes | integer |
| idHero | query | Identifiant du héros | Yes | integer |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | search results matching criteria | **application/json**: [ [Heros](#heros) ]<br> |
| 400 | bad input parameter |  |

### [POST] /heros
**ajout d'un héros**

#### Request Body

| Required | Schema |
| -------- | ------ |
|  No | **application/json**: [Heros](#heros)<br> |

#### Responses

| Code | Description |
| ---- | ----------- |
| 201 | héros ajouté |
| 400 | invalid input, object invalid |
| 409 | an existing item already exists |

### [PUT] /heros
**mise à jour d'un héros**

#### Request Body

| Required | Schema |
| -------- | ------ |
|  No | **application/json**: [Heros](#heros)<br> |

#### Responses

| Code | Description |
| ---- | ----------- |
| 201 | héros mise à jour |
| 400 | invalid input, object invalid |

### [DELETE] /heros
**Supprime un héros**

supprime un héros de la base de données

#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id_user | query | id de l'utilisateur | Yes | number |
| id_heros | query | id du héros à supprimer | Yes | number |

#### Responses

| Code | Description |
| ---- | ----------- |
| 201 | héros supprimé |
| 400 | invalid parameter |
| 404 | le héros n'existe pas |

### [GET] /heros/{id_user}
**recherche des héros d'un utilisateur**

En entrant les options appropriés, vous pouvez trouver
les sauvegardes d'un héros d'un joueur.

#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id_user | path | id de l'utilisateur | Yes | integer |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | search results matching criteria | **application/json**: [ [Heros](#heros) ]<br> |
| 400 | bad input parameter |  |

---
### Schemas

#### Heros

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer | *Example:* `0` | Yes |
| id_user | integer | *Example:* `0` | Yes |
| name | string | *Example:* `"Lwiisport"` | No |
| class | string | *Example:* `"Chevalier"` | No |
| pv | integer | *Example:* `50` | No |
| atk | integer | *Example:* `10` | No |
| lvl | integer | *Example:* `8` | No |
| xp | integer | *Example:* `1100` | No |
| gold | integer | *Example:* `150` | No |
