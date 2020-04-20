## Project python BI

## Client type

A startup dedicated to deliver little things by drone´s to high buildings
where the logistic could be easier with this method

Conditions:

    1.- They want to identify potential locations.
    2.- Surrounded by ecommerce, software and hardware companies.
    3.- In cities with high buildings.
    4.- Investors want´s to appreciate the map.


-------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------


# Step 1

Filtering data with pymongo by getting rid of the companies that don´t meet specifications

# Step 2 

Creating a new data base with the filtering data to mongo antlas

# Step 3 
Creation of an api in nodejs feeded with the new data (controlers folder, file business controller)


    Expressjs server
    Route creation that allows get request 
    Controller creation to conect to the data base
    Send the data to the new route


# Step 4

Consuming a mapbox api and using the '3d-buildings' style

# Step 5 

Linking the nodejs api with the  mapbox api to show all the points in the map
Lat and lng are needed but also we can show the category code

# Step 6 

Creating the rest front end of the page and styles given with bootstrap and a responsive landing page from codepen

# Step 7

Deploying the page in heroku free server 

