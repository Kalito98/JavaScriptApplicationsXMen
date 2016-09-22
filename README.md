# JavaScriptApplicationsXMen

## Bookstore that sells books, dvd-s, comics, magazine.
- Base class Item with Name, Price, Id, Category
- Class Physical(sounds bad) that extends Item with Author, Pages
- Class Digital that extends Items with Rating, Duration
- Class Book that extends Physical with Cover, Summary
- Class Magazine that extends Physical with Theme, HasPresent (boolean)
- Class Comic that extends Physical with SuperheroName, Publisher
- Class Dvd that extends Digital with MovieSummary, YearOfPremiere
- Class Cd that extends Digital with Songs, SongsCount
