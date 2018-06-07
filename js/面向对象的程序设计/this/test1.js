function A(){
    this.name = 'A';

    function AA(){
        this.name = 'AA';

        function AAA(){
            this.name = 'AAA';
        }
        AAA();
    }
    AA();
}

A();
console.log(global.name);