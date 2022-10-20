# COMP 587 - RESTful Web Service
### This RESTful API connects the [presentation tier](https://github.com/chizuo/COMP587-Project-App) to the [data tier](#) of the [system under test](https://github.com/chizuo/COMP587-Project)

---
## Routes
#### `GET` movies `{host url}/v1/movie/`

**expects a preference object that is shaped...**
```
{
    "country": "us", (country ISO 3166 Alpha-2 code as a string)
    "service": ["netflix","hulu"], (an array of strings)
    "genre": ["Action","Comedy"], (an array of strings)
    "page": 1, (a positive number, either as a string or integer)
    "orderBy": "original_title" (a string that is either "original_title" or "year")
}
```
**response object by the service is shaped...**
```
{
    "results": [], (a list of movie objects)
    "total_pages": 4 (an integer informing you how many pages worth of results the service has based on provided criteria)
}
```
**movie object is shaped...**
```
{
    "imdbID": string,
    "imdbRating": int,
    "imdbVoteCount": int,
    "posterURL": string,
    "title": string,
    "genres": list of strings,
    "countries": list of strings,
    "year": int,
    "runtime": int,
    "cast": list of strings,
    "director": list of strings,
    "overview": string,
    "tagline": string,
    "videoURL": string
}
```


