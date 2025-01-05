ServerEvents.tags('item', event => {
  event.add('c:nuggets/copper', 'create:copper_nugget')
  event.add('c:nuggets/copper', 'consistency_plus:copper_nugget')
  event.add('c:nuggets/copper', 'progression_reborn:copper_nugget')

  event.add('c:nuggets/diamond', 'progression_reborn:diamond_nugget')
  event.add('c:nuggets/diamond', 'create_dd:diamond_shard')

  console.log('modified tags for modpack');
})
