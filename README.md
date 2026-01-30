# Heroes

Service héros.

# Endpoints

`GET http://localhost:5000/heros?user=X&hero=Y`

Permet de récupérer un héros d'un utilisateur

`POST http://localhost:5000/heros`

Permet d'ajouter à la base de données le héros entrer dans le body de la requête.
Exemple de body :

```json
  {
    "id_user": 1,
    "id": 1,
    "name": "Louis",
    "class": "Paladin",
    "pv": "120",
    "atk": "20",
    "lvl": "1",
    "xp": "0",
    "gold": "0"
  }
```

`PUT http://localhost:5000/heros`

Permet de mettre à jour un héros dans la base de données.
exemple de body :

```json
  {
    "id_user": 1,
    "id": 1,
    "name": "Louis",
    "class": "Warrior",
    "pv": "100",
    "atk": "30",
    "lvl": "1",
    "xp": "0",
    "gold": "0"
  }
```

