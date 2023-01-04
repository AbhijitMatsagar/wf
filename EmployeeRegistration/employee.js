            function validate_form(){
                var dob = document.getElementById('dob').value;
                dob = new Date(dob);

                var doj = document.getElementById('doj').value;
                doj=new Date(doj)

                var salary = document.getElementById('salary').value;

                curr_date = new Date();

                if(dob >= curr_date){
                    alert("Invalid Date of birth");
                    return false;
                }else if(doj <= dob){
                    alert("Invalid date of joining");
                    return false;
                }else if(salary <= 0){
                    alert("Invalid salary");
                    return false;
                }
                return true;
            }