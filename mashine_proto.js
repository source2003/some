<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Machine Proto Javascritp</title>
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

            Machine.prototype.methodName = function () {
                console.log(this._enabled);
                console.log(this._power);
            };

            var coffeeMachine = new Machine(10000);

            coffeeMachine.methodName();
            coffeeMachine.enable();

            console.log(coffeeMachine._enabled);
            console.log('Github');
            
        </script>
    </body>
</html>
