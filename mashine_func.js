<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <script>
        function Machine(power) {
            this._power = power;
            this._enabled = false;

            this.enable = function() {
                this._enabled = true;
            };

            this.disable = function() {
                this._enabled = false;
            };
        }

        function CoffeeMachine(power) {
            Machine.apply(this, arguments);

            console.log(this._enabled); // false
            console.log(this._power); // 10000
        }

        var coffeeMachine = new CoffeeMachine(10000);
        coffeeMachine.enable();
        console.log(coffeeMachine._enabled);

        </script>
    </body>
</html>
