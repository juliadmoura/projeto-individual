-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE projetoindividual;

USE projetoindividual;

CREATE TABLE decada (
	iddecada INT PRIMARY KEY AUTO_INCREMENT,
	ano char(4)
);

CREATE TABLE usuario (
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_decada INT,
	FOREIGN KEY (fk_decada) REFERENCES decada(iddecada)
);

insert into decada values
(null, '1950'),
(null, '1960'),
(null, '1970'),
(null, '1980'),
(null, '1990'),
(null, '2000'),
(null, '2010');

create table quiz (
idquiz int primary key auto_increment,
pontuacao int,
fkusuario int,
FOREIGN KEY (fkusuario) REFERENCES usuario(idusuario)
);


describe usuario;
truncate table decada;
select * from usuario;