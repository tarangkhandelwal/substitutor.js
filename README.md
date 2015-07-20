# substitutor 
*Substitutor* is a simple to use String replacement Javascript library that facilitates using placeholders in strings literals 
that are substituted with dynamic context value's passed at the runtime.

###Features
1. Supports Nested Place Holders.  Ex: {address.street.name}  
2. Support for n-level Recursive PlaceHolders. 
 <br>Ex: { { { { id } } } } . Here replacement will happen four times starting from innermost placeholder


### Examples
```javascript
1.  Basic JSObject
nameJson= {
        "first":"John",
        "last":"Doe"
        }

var fullName = substitutor('My name is {first} {last} ', nameJson);
```

> Output: My name is John Doe


```javascript
2. Nested JSObject 
userJson={
    "name": {
        "first": "John",
        "last": "Doe"
    },
    "phone": {
        "work": "1234567",
        "home": "4444444"
    }
}

var fullName = substitutor(' {name.first} {name.last} : ( Work {phone.work} )', userJson);
```

> Output: John Doe : ( Work 1234567 )


```javascript
3. Double PlaceHolders 
populationData={
    "max":"India",
    "min":"Japan",
	"India":"1.25 billion",
	"USA":"318.9 million",
	"Japan":"127.3 million"

}

var output = substitutor('Max Population:{max} ({{max}}) & Min Population :{min} ({{min}})', populationData);
```

> Output: Max Population:India (1.25 billion) & Min Population :Japan (127.3 million)

```javascript
4.  Basic Array
var arr=[404, 'Page Not Found'];
var output = substitutor('Error Code {0} is {1}',arr);

```

> Output: Error Code 404 is Page Not Found


```javascript
5. Multi Dimensional Array 
var arr=[["Engineer","John"],"abc University"]
var output = substitutor(' {0.1} ,an {0.0} from {1}', arr);

```

> Output: John ,an Engineer from abc University
