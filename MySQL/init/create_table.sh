#!/bin/sh

CMD_MYSQL="mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE}"
$CMD_MYSQL -e "create table user (
    id char(26) NOT NULL primary key,
    name varchar(50) NOT NULL,
    age int(3) NOT NULL
);

insert into user values ('00000000000000000000000001', 'hanako', 20);
insert into user values ('00000000000000000000000002', 'taro', 30);"

$CMD_MYSQL -e  "insert into article values (1, '記事1', '記事1です。');"
$CMD_MYSQL -e  "insert into article values (2, '記事2', '記事2です。');"