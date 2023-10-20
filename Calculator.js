
        
        let sum="";
        function operand(op1)
        {
            sum = sum + op1;
            document.getElementById("calc-operation").innerHTML = sum;
        }
        function operator(opt)
        {
            let text = String.fromCharCode(opt);
            sum += text;
            document.getElementById("calc-operation").innerHTML = sum;
        }
        function answer()
        {
            document.getElementById("calc-typed").innerHTML = eval(sum);
        }
        function AC()
        {
            sum="";
            document.getElementById("calc-typed").innerHTML = "0";
            document.getElementById("calc-operation").innerHTML = sum;
        }
