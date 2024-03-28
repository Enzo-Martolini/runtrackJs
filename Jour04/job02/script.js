document.addEventListener("DOMContentLoaded", function() {

    var jsonTableau = '{"name": "John", "age": 30, "city": "Marseille"}'

    function jsonValueKey(jsonString, key){

        var jsonObject = JSON.parse(jsonString);
        console.log(jsonObject)

        return jsonObject[key]
        }
    
        console.log(jsonValueKey(jsonTableau, 'age'))

})
 