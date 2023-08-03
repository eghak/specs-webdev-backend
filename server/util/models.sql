create table user (
    id serial primary key,
    username varchar(20),
    password varchar (100)
);

insert into user (username, password)
values('John', '1234');