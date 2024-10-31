import React, {useState} from "react";

const PassCheck = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };
    const checkPasswordStrength = (password) => {
        let strength = 'weak';
        const criteria = [
            {regex: /.{8,}/, message: '8 characters'},
            {regex: /[a-z]/, message: 'Lowercase letters'},
            {regex : /[A-Z]/, message: 'Uppercase letters'},
            {regex: /[0-9]/, message: 'Numbers'},
            {regex: /[^A-Za-z0-9]/, message: 'Special characters'}
    ];

        const passCriteria = criteria.filter(criterion => criterion.regex.test(password));

        switch (passCriteria.length) {
            case 5:
                strength = 'Very strong';
                break;
            case 4:
                strength = 'Strong';
                break;
            case 3:
                strength = 'Medium';
                break;
            default:
                strength = 'Weak';
                break;
        }
        
        setStrength(strength);

    };

    return (
        <>
        <div style={{padding : '20px', fontFamily : 'Arial, sans-serif'}}>
        <h2> Password Strength Checker</h2><br />
        <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={{padding: '10px', width: '300px',fontSize: '16px' , fontColor: 'black'}}
            />
        <br /><br />
            <div
             style={{
                marginTop: '10px', 
                fontSize: '18px', 
                color: 
                  strength === 'Very Weak' ? 'darkred' : 
                  strength === 'Weak' ? 'red' : 
                  strength === 'Moderate' ? 'yellow' : 
                  strength === 'Strong' ? 'green' : 
                  strength === 'Very Strong' ? 'darkgreen' : 'green'
              }}>
                <strong>Password strength:</strong> {strength}
                </div>
        </div>
        </>
    );
};

export default PassCheck;