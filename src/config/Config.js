App.Config.Game = {
    skills: [
        {
            id: 1,
            name: "Skill 1 name",
            descripion: "Skills 1 description",
            parents: [],
            bonus: 0.01,
            effects: [
                "draw-wind-turbine"
            ]
        },
        {
            id: 2,
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
    ]
}