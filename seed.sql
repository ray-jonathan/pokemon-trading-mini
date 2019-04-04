insert into users
    (username, password)
values
    ('AshTheVeryBest', 'PikachuRox'),
    ('Mistywater99', 'BlubBlubBlub'),
    ('BrockTheBoss', 'R0ckS0lid'),
    ('Professor_oak', 'Ch00seUrFate')
;

insert into cards
    (name, picture, rarity)
values
    ('Charmander', 'https://images.pokemontcg.io/base1/46_hires.png', 'Common'),
    ('Zapdos', 'https://images.pokemontcg.io/base1/16_hires.png', 'Rare'),
    ('Growlithe', 'https://images.pokemontcg.io/base1/28_hires.png', 'Uncommon'),
    ('Jynx', 'https://images.pokemontcg.io/base1/31_hires.png', 'Uncommon'),
    ('Onix', 'https://images.pokemontcg.io/base1/56_hires.png', 'Common')
;

insert into ownedBy
    (user_id, card_id)
values
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 4),
    (3, 5),
    (3, 3),
    (4, 1),
    (4, 2),
    (4, 5)
;

insert into trades
    (old_user_id, new_user_id, card_id)
values
    (3, 1, 1),
    (2, 4, 5)
;