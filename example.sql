select * 
	from users
where id = 1;

select *
	from cards;

select *
	from cards
where id = 1;

select c.*
	from cards c
	inner join ownedBy ob
		on c.id = card_id
where user_id = 2;

select count(c.*)
	from cards c
	inner join ownedBy ob
		on c.id = card_id
where card_id = 1;