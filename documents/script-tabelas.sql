CREATE DATABASE stardew_valley;
USE stardew_valley;

-- Criação das Tabelas
CREATE TABLE personagem(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
aniversario VARCHAR(50),
genero CHAR(1),
CONSTRAINT chk_genero CHECK(genero IN('M', 'F')),
endereco VARCHAR(100),
casavel TINYINT,
CONSTRAINT chk_casavel CHECK(casavel IN(0, 1)),
presente_favorito VARCHAR(50),
caminho_img VARCHAR(100)
);

INSERT INTO personagem VALUES
	(DEFAULT, 'Alex', '13 de Verão', 'M', 'Estrada do Rio nº 1', 1, 'Café da manhã completo', '../assets/img-caminho/alex.png'),
	(DEFAULT, 'Abigail', '13 de Outono', 'F', 'Armazém do Pierre', 1, 'Ametista', '../assets/img-caminho/abigail.png'),
	(DEFAULT, 'Harvey', '14 de Inverno', 'M', 'Clínica do Harvey', 1, 'Café', '../assets/img-caminho/harvey.png'),
	(DEFAULT, 'Shane', '20 de Primavera', 'M', 'Casa da Marnie', 1, 'Pimenta', '../assets/img-caminho/shane.png'),
	(DEFAULT, 'Penny', '2 de Outono', 'F', 'Trailer', 1, 'Melão', '../assets/img-caminho/penny.png'),
	(DEFAULT, 'Leah', '23 de Inverno', 'F', 'Cabana da Leah', 1, 'Salada', '../assets/img-caminho/leah.png'),
	(DEFAULT, 'Sebastian', '10 de Inverno', 'M', 'Casa da Montanha', 1, 'Lágrima congelada', '../assets/img-caminho/sebastian.png'),
	(DEFAULT, 'Elliott', '5 de Outono', 'M', 'Cabana na Praia', 1, 'Lasanha de Lagosta', '../assets/img-caminho/elliott.png'),
	(DEFAULT, 'Maru', '10 de Verão', 'F', 'Casa da Montanha', 1, 'Bateria', '../assets/img-caminho/maru.png'),
	(DEFAULT, 'Haley', '14 de Primavera', 'F', 'Casa Sul da Praça', 1, 'Girassol', '../assets/img-caminho/haley.png'),
	(DEFAULT, 'Emily', '27 de Primavera', 'F', 'Casa Sul da Praça', 1, 'Ametista', '../assets/img-caminho/emily.png'),
	(DEFAULT, 'Sam', '17 de Verão', 'M', 'Casa Oeste da Praça', 1, 'Pizza', '../assets/img-caminho/sam.png'),
    
	(DEFAULT, 'Linus', '3 de Inverno', 'M', 'Tenda na Montanha', 0, 'Bagas silvestres', '../assets/img-caminho/linus.png'),
	(DEFAULT, 'Robin', '21 de Outono', 'F', 'Carpintaria', 0, 'Espaguete', '../assets/img-caminho/robin.png'),
	(DEFAULT, 'Demetrius', '19 de Verão', 'M', 'Casa da Montanha', 0, 'Torta de Morango', '../assets/img-caminho/demetrius.png'),
	(DEFAULT, 'Jodi', '11 de Outono', 'F', 'Casa Oeste da Praça', 0, 'Torta de Mirtilo', '../assets/img-caminho/jodi.png'),
	(DEFAULT, 'Kent', '4 de Primavera', 'M', 'Casa Oeste da Praça', 0, 'Vagem verde', '../assets/img-caminho/kent.png'),
	(DEFAULT, 'Caroline', '7 de Inverno', 'F', 'Armazém do Pierre', 0, 'Peixe cozido', '../assets/img-caminho/caroline.png'),
	(DEFAULT, 'Pierre', '26 de Primavera', 'M', 'Armazém do Pierre', 0, 'Pizza vegetal', '../assets/img-caminho/pierre.png'),
	(DEFAULT, 'Gus', '8 de Verão', 'M', 'Saloon Fruta Estelar', 0, 'Diamante', '../assets/img-caminho/gus.png'),
	(DEFAULT, 'Pam', '18 de Primavera', 'F', 'Trailer', 0, 'Cerveja', '../assets/img-caminho/pam.png'),
	(DEFAULT, 'George', '24 de Outono', 'M', 'Casa ao Sul da Praça', 0, 'Alcachofra assada', '../assets/img-caminho/george.png'),
	(DEFAULT, 'Evelyn', '20 de Inverno', 'F', 'Casa ao Sul da Praça', 0, 'Torta de Ruibarbo', '../assets/img-caminho/evelyn.png'),
	(DEFAULT, 'Clint', '26 de Inverno', 'M', 'Ferraria', 0, 'Jade', '../assets/img-caminho/clint.png'),
	(DEFAULT, 'Marnie', '18 de Outono', 'F', 'Rancho da Marnie', 0, 'Diamante', '../assets/img-caminho/marnie.png'),
	(DEFAULT, 'Lewis', '7 de Primavera', 'M', 'Casa do Prefeito', 0, 'Pimenta', '../assets/img-caminho/lewis.png'),
	(DEFAULT, 'Willy', '24 de Verão', 'M', 'Cabana de Pesca', 0, 'Peixe assado', '../assets/img-caminho/willy.png'),
	(DEFAULT, 'Krobus', '1 de Inverno', 'M', 'Esgoto', 0, 'Diamante', '../assets/img-caminho/krobus.png'),
	(DEFAULT, 'Sandy', '15 de Outono', 'F', 'Oásis (Deserto)', 0, 'Cristal de Fogo', '../assets/img-caminho/sandy.png'),
	(DEFAULT, 'Wizard', '17 de Inverno', 'M', 'Torre do Mago', 0, 'Essência Vazia', '../assets/img-caminho/wizard.png'),
	(DEFAULT, 'Leo', '26 de Verão', 'M', 'Ilha Gengibre', 0, 'Manga', '../assets/img-caminho/leo.png');


CREATE TABLE fazenda(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50),
descricao VARCHAR(100),
dica VARCHAR(100),
caminho_img VARCHAR(100)
);

INSERT INTO fazenda (tipo, descricao, dica, caminho_img) VALUES
	('Fazenda Padrão', 
	 'Espaço amplo para cultivo e criação de animais.', 
	 'Ideal para iniciantes focados em agricultura.', 
	 '../assets/img-fazenda/padrao.png'),

	('Fazenda do Rio', 
	 'Grande área de pesca com pouca terra para cultivo.', 
	 'Ótima para quem quer lucrar pescando.', 
	 '../assets/img-fazenda/rio.png'),

	('Fazenda Florestal', 
	 'Menos espaço agrícola, mas com troncos e forragem renováveis.', 
	 'Boa para forrageamento e madeira.', 
	 '../assets/img-fazenda/floresta.png'),

	('Fazenda na Colina', 
	 'Terreno irregular com chance de veios de minério.', 
	 'Perfeita para quem gosta de mineração.', 
	 '../assets/img-fazenda/colina.png'),

	('Fazenda Selvagem', 
	 'Terreno amplo, mas monstros aparecem à noite.', 
	 'Desafiadora — ideal para combate.', 
	 '../assets/img-fazenda/selvagem.png'),

	('Fazenda dos Quatro Cantos', 
	 'Dividida em quatro áreas com características de outras fazendas.', 
	 'Excelente para jogo em grupo ou versatilidade.', 
	 '../assets/img-fazenda/quatro_cantos.png'),

	('Fazenda na Praia', 
	 'Visual bonito, com boa pesca, mas sem irrigadores.', 
	 'Boa para desafio e estética.', 
	 '../assets/img-fazenda/praia.png'),

	('Fazenda da Colina do Prado', 
	 'Paisagem calma com abelhas e flores especiais.', 
	 'Focada em mel, flores e relaxamento.', 
	 '../assets/img-fazenda/prado.png'),

	('Fazenda da Montanha', 
	 'Terreno frio com lago congelado no inverno.', 
	 'Melhor para quem adora pescar e minerar.', 
	 '../assets/img-fazenda/montanha.png');


CREATE TABLE pet(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
tipo VARCHAR(50),
caminho_img VARCHAR(100)
);

INSERT INTO pet (nome, tipo, caminho_img) VALUES
	('Cachorro marrom', 'Cachorro', '../assets/img-pet/cachorro_marrom.png'),
	('Cachorro dourado', 'Cachorro', '../assets/img-pet/cachorro_dourado.png'),
	('Cachorro preto', 'Cachorro', '../assets/img-pet/cachorro_preto.png'),

	('Gato cinza', 'Gato', '../assets/img-pet/gato_cinza.png'),
	('Gato laranja', 'Gato', '../assets/img-pet/gato_laranja.png'),
	('Gato branco', 'Gato', '../assets/img-pet/gato_branco.png'),

	('Tartaruga', 'Tartaruga', '../assets/img-pet/tartaruga.png');

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
genero CHAR(1) NOT NULL,
CONSTRAINT chk_genero_usuario CHECK(genero IN('M', 'F', 'O')),
dt_nascimento DATE NOT NULL,
senha VARCHAR(255) NOT NULL,
pontuacao_quiz INT
);

create table fazenda_usuario(
id INT,
fk_usuario INT UNIQUE,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
nome_fazenda VARCHAR(100),
fk_fazenda_favorita INT,
FOREIGN KEY (fk_fazenda_favorita) REFERENCES fazenda(id),
fk_pet_favorito INT,
FOREIGN KEY (fk_pet_favorito) REFERENCES pet(id),
fk_personagem_favorito INT,
FOREIGN KEY (fk_personagem_favorito) REFERENCES personagem(id),
coisa_favorita VARCHAR(100),
perfeicao TINYINT,
CONSTRAINT chk_perfeicao CHECK(perfeicao IN(0, 1)),
verdadeira_perfeicao TINYINT,
CONSTRAINT chk_verdadeira_perfeicao CHECK(verdadeira_perfeicao IN(0, 1)),
PRIMARY KEY (id, fk_usuario)
);