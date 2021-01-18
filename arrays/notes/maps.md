all objects have prototypes; even if we define new, empty objects as our maps, they still have access to the properties of the
prototype objects. In addition, with objects, keys can only be string values; if you want to create a mapping for any other value, that value will be silently converted into a string without anyone asking you anything!

hashmap.size() returns the # of elements in the hashmap
hashmap.get(<key>) returns the value of the element of the given key
hashmap.has(<key>) checks to see if the hashmap contains the key that is passed as an argument
hashmap.set(<key>, <value>) accepts 2 arguments and creates a new element to the hashmap
hashmap.delete(<key>) deletes the key/value pair that matches the key that is passed in as an argument
hashmap.clear() clears all elements from the hashmap

Because maps are collections, there’s nothing stopping us from iterating over them with for...of loops. (Remember, we used the for...of loop to iterate over values created by generators in chapter 6.) You’re also guaranteed that these values will be visited in the order in which they were inserted (something we can’t rely on when iterating over objects using the for...in loop).
