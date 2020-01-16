# System Design

# Users 
    - username 
    - email 

# Chirps 
    - body (max 140 chars)
    - author_id => references users.id

# Likes 
    - liker_id => references users.id
    - chirp_id => references chirps.id

