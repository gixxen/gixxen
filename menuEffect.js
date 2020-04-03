var buttons = document.querySelectorAll('.button');
var effects = document.querySelectorAll('.effect');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].effect = effects[i];
    buttons[i].addEventListener('mouseenter', hoverEffect);
    buttons[i].addEventListener('mouseleave', hoverEffectOut);
    buttons[i].addEventListener('click', effectClick);

    function effectClick(event) {
        var target = event.target;
        var hover = target.effect;
        if (document.querySelectorAll('.effectClick').length > 0) {
            document.querySelectorAll('.effectClick').forEach(element => {
                element.classList.remove('effectClick');
            });
        }
        hover.classList.add('effectClick');
        hover.classList.remove('effectActive', 'effectActiveOut');
        console.log('hello')
    }
    function hoverEffect(event) {
        var target = event.target;
        var hover = target.effect;
        if (hover.classList.contains('effectClick')) {

        } else {
            hover.classList.remove('effectActiveOut');
            hover.classList.add('effectActive');
        }
    }
    function hoverEffectOut(event) {
        var target = event.target;
        var hover = target.effect;
        if (hover.classList.contains('effectClick')) {
            
        } else {
            hover.classList.remove('effectActive');
            hover.classList.add('effectActiveOut');
        }
    }
}

