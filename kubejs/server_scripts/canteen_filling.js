ServerEvents.recipes(event => {
  // canteen filling recipes
  let canteens = [
    { type: "leather", drinks: 5 },
    { type: "copper", drinks: 6 },
    { type: "iron", drinks: 7 },
    { type: "gold", drinks: 10 },
    { type: "diamond", drinks: 15 },
    { type: "netherite", drinks: 25 }
  ]

  let waters = [
    { namespace: "minecraft", fluid: "water" },
    { namespace: "tan_plus", fluid: "purified_water" },
    { namespace: "tan_plus", fluid: "dirty_water" }
  ]

  const bottles_per_bucket = 4

  canteens.forEach(canteen => {
    waters.forEach(water => {
      event.shapeless(
        `toughasnails:${canteen.type}_${water.fluid}_canteen`,
        [
          Item.of(
            `${water.namespace}:${water.fluid}_bucket`,
            Math.round(canteen.drinks / bottles_per_bucket)
          ),
          `toughasnails:empty_${canteen.type}_canteen`
        ]
      )
    })
  })
})
