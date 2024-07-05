model.sendIconList = function()
{
    var list = model.strategicIcons();

    engine.call('handle_icon_list', list, 48);
}
