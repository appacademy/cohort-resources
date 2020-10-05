## Frontend Routes
Our components are organized as follows:
+ `Root`
  + `App`
    + `NavBar`
    + (main component goes here)
    + `Footer`

The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

+ `/`
  + `Splash`
+ `/login`
  + `SessionForm`
+ `/signup`
  + `SessionForm`
+ `/feed`
  + `ChirpIndex`
    + `ChirpIndexItem`
+ `/users/:userId`
  + `ProfileComponent`
  + `ChirpIndex`
    + `ChirpIndexItem`
+ `/chirps/new`
  + `ChirpForm`
+ `/chirps/:chirpId`
  + `ChirpShow`
+ `/chirps/:chirpId/edit`
  + `ChirpForm`
