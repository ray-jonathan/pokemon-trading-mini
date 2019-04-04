create table users (
    id serial primary key,
    username varchar(200),
    password varchar(500)
);

create table cards (
    id serial primary key,
    name varchar(200),
    picture varchar(200),
    rarity varchar(50)
);

create table ownedBy (
    id serial primary key,
    user_id integer references users(id),
    card_id integer references cards(id)
);

create table trades (
    id serial primary key,
    old_user_id integer references users(id),
    new_user_id integer references users(id),
    card_id integer references cards(id),
);