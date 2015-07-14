# substitutor 
*Substitutor* is a simple to use String replacement Javascript library that facilitates using placeholders in strings literals 
that are substituted with dynamic context value's passed at the runtime.

### Examples
```javascript
1.  nameJson= {
        "first":"John",
        "last":"Doe"
        }

var fullName = substitutor('My name is {first} {last} ', nameJson);
```

> Output: My name is John Doe


```javascript
2.  userJson={
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
3.  populationData={
    "max":"India",
    "min":"Japan",
	"India":"1.25 billion",
	"USA":"318.9 million",
	"Japan":"127.3 million"

}

var output = substitutor('Max Population:{max} ({{max}}) & Min Population :{min} ({{min}})', populationData);
```

> Output: Max Population:India (1.25 billion) & Min Population :Japan (127.3 million)
