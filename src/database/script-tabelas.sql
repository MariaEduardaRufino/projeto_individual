-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
create database projeto_individual;

use projeto_individual;


create table usuario(
id int primary key auto_increment,
nome varchar(100),
sobrenome varchar(100),
email varchar(100),
senha varchar(50));




create table integrante(
idIntegrante int primary key auto_increment,
nomeIntegrante varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);