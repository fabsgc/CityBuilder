App.Config.Game = {
    skills: [
        {
            id: 1,
            price: 10,
            logo: "asset/gui/skill-blueprint.png",
            name: "Eolien",
            description: "Avec sa grande hélice, cette éolienne va pouvoir produire de l'énergie électrique grâce à la force du vent.",
            parents: [],
            bonus: 0.01,
            effects: [
                "draw-wind-turbine",
                "draw-unicorn"
            ]
        },
        {
            id: 2,
            price: 999,
            logo: "asset/gui/skill-blueprint.png",
            name: "Solaire",
            description: "Grâce à sa surface orientée vers le soleil, cet appareil converti le rayonnement en énergie électrique.",
            parents: [],
            bonus: 0.01,
            effects: [
            ]
        },
        {
            id: 3,
            price: 999,
            logo: "asset/gui/skill-leaf.png",
            name: "Poubelle de tri",
            description: "Grâce à un système de couleur, il devient plus facile pour le citoyen de savoir trier ses déchets.",
            parents: [],
            bonus: 0.01,
            effects: [
            ]
        },
        {
            id: 4,
            price: 999,
            logo: "asset/gui/skill-blueprint.png",
            name: "Plus adaptée aux bâtiments, cette éolienne capte des vents plus faibles ce qui lui permet d'être plus fréquemment exploitée.",
            description: "Skills 4 description",
            bonus: 0.03,
            parents: [
                1
            ],
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 5,
            price: 25,
            logo: "asset/gui/skill-blueprint.png",
            name: "Skill 5 name",
            description: "Skills 5 description",
            bonus: 0.01,
            parents: [
                1
            ],
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 6,
            price: 30,
            logo: "asset/gui/skill-leaf.png",
            name: "Skill 6 name",
            description: "Skills 5 description",
            bonus: 0.01,
            parents: [
                1, 2
            ],
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 7,
            price: 35,
            logo: "asset/gui/skill-blueprint.png",
            name: "Skill 7 name",
            description: "Skills 7 description",
            bonus: 0.01,
            parents: [
                2, 3
            ],
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 8,
            price: 40,
            logo: "asset/gui/skill-leaf.png",
            name: "Skill 8 name",
            description: "Skills 8 description",
            bonus: 0.01,
            parents: [
                3
            ],
            effects: [
                "draw-wind-turbine"
            ]
        },
    ],
    stuff: {
        Windturbine: {
            "width": 5,
            "height": 5,
            "model": "WindTurbine",
            "modelDirectory": "asset/model/stuff/"
        },
        Unicorn: {
            "width": 2,
            "height": 1,
            "model": "Unicorn",
            "modelDirectory": "asset/model/stuff/"
        }
    }
}
