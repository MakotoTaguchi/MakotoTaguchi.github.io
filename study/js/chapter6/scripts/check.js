document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var result = [];
        var foods = document.getElementsByName('food');

        for (var i = 0, len = foods.length; i < len; i++) {
            var food = foods.item(i);
            if (food.checked) {
                result.push(food.value);
            }
        }
        window.alert(result.toString());
    }, false);
}, false);