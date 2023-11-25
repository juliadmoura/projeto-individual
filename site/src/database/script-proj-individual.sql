-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE projetoindividual;

USE projetoindividual;

CREATE TABLE decadas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	ano char(4)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_decada INT,
	FOREIGN KEY (fk_decada) REFERENCES decada(id)
);

insert into decadas values
(null, '1950'),
(null, '1960'),
(null, '1970'),
(null, '1980'),
(null, '1990'),
(null, '2000'),
(null, '2010');


alter table usuario add column cpf char(11);

describe usuario;

select * from usuario;