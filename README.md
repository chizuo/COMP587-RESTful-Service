# COMP 587 - RESTful Web Service
### This RESTful API connects the [presentation tier](https://github.com/chizuo/COMP587-Project-App) to the [data tier](#) of the [system under test](https://github.com/chizuo/COMP587-Project)

---
## Routes
#### `GET` movies `{host url}/v1/movie/`
expects a preference object that is shaped...
```
{
    "country": "us", (country ISO 3166 Alpha-2 code as a string)
    "service": ["netflix"], (an array of strings)
    "genre": ["Action"], (an array of strings)
    "page": 1, (a positive number, either as a string or integer)
    "orderBy": "original_title" (a string that is either "original_title" or "year")
}
```
