App.Config.Game = {
    skills: [
        {
            id: 1,
            price: 5,
            logo: "asset/gui/skill-blueprint.png",
            name: "Skill 1 name",
            descripion: "Skills 1 description",
            parents: [],
            bonus: 0.01,
            effects: [
                "draw-wind-turbine",
                "draw-unicorn"
            ]
        },
        {
            id: 2,
            price: 10,
            logo: "asset/gui/skill-leaf.png",
            name: "Skill 2 name",
            descripion: "Skills 2 description",
            parents: [],
            bonus: 0.01,
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 3,
            price: 15,
            logo: "asset/gui/skill-blueprint.png",
            name: "Skill 3 name",
            descripion: "Skills 3 description",
            parents: [],
            bonus: 0.01,
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 4,
            price: 20,
            logo: "asset/gui/skill-leaf.png",
            name: "Skill 4 name",
            descripion: "Skills 4 description",
            bonus: 0.01,
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
            descripion: "Skills 5 description",
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
            descripion: "Skills 5 description",
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
            descripion: "Skills 7 description",
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
            descripion: "Skills 8 description",
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