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

    // consolidate nuggets
    let replace_copper = (id) => replace_item(id, 'progression_reborn:copper_nugget', 'minecraft:copper_ingot', 'c:nuggets/copper')
    replace_copper('create:copper_nugget')
    replace_copper('consistency_plus:copper_nugget')
    let replace_diamond = (id) => replace_item(id, 'progression_reborn:diamond_nugget', 'minecraft:diamond', 'c:nuggets/diamond')
    replace_diamond('create_dd:diamond_shard')


    console.log('modified recipes for modpack');
});
