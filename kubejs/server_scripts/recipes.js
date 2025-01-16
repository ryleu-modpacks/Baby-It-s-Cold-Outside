ServerEvents.recipes(event => {
  // disable items we don't want
  event.remove({ output: 'fromanotherworld:flamethrower_mk_1' })
  event.remove({ output: 'repaired_disc_eleven:boom' })

  function replace_item(id, target, whole, tag) {
    event.remove({
      input: whole,
      output: id
    })

    event.replaceInput(
      { input: id },
      id,
      tag
    );

    event.replaceOutput(
      { output: id },
      id,
      target
    )
  }

  //adding recipes here
  event.shaped(
    Item.of('minecraft:iron_sword', 1)
    [
    'I',
    'I',
    'S'
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )

  event.shaped(
    Item.of('minecraft:iron_pickaxe', 1)
    [
    'III',
    ' S ',
    ' S '
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )

  event.shaped(
    Item.of('minecraft:iron_shovel', 1)
    [
    'I',
    'S',
    'S'
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )

  event.shaped(
    Item.of('minecraft:iron_axe', 1)
    [
    'II',
    'IS',
    ' S'
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:iron_axe', 1)
    [
    'II',
    'SI',
    'S '
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )

  event.shaped(
    Item.of('minecraft:iron_hoe', 1)
    [
    'II',
    ' S',
    ' S'
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:iron_hoe', 1)
    [
    'II',
    'S ',
    'S '
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    }
  )

  //alternate recipe for jukebox, can't figure out how to replace the vanilla recipe - Alex
  event.shaped(
    Item.of('minecraft:jukebox', 1)
    [
    'SNS',
    'NIN',
    'SNS'
    ],
    {
      S: 'minecraft:stick',
      N: 'minecraft:noteblock',
      I: 'minecraft:iron_nugget'
    }

  )





  // consolidate nuggets
  let replace_copper = (id) => replace_item(id, 'progression_reborn:copper_nugget', 'minecraft:copper_ingot', 'c:nuggets/copper')
  replace_copper('create:copper_nugget')
  replace_copper('consistency_plus:copper_nugget')
  let replace_diamond = (id) => replace_item(id, 'progression_reborn:diamond_nugget', 'minecraft:diamond', 'c:nuggets/diamond')
  replace_diamond('create_dd:diamond_shard')


  console.log('modified recipes for modpack');
});
