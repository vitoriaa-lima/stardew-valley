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

CREATE TABLE fazenda(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50),
descricao VARCHAR(100),
dica VARCHAR(100),
caminho_img VARCHAR(100)
);

CREATE TABLE pet(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
tipo VARCHAR(50),
caminho_img VARCHAR(100)
);

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
CONSTRAINT chk_genero CHECK(genero IN('M', 'F', 'O')),
dt_nascimento DATE NOT NULL,
senha VARCHAR(255) NOT NULL,
nome_fazenda VARCHAR(100) NOT NULL,
fk_pet_favorito INT NOT NULL,
fk_fazenda_favorita INT NOT NULL,
fk_personagem_favorito INT NOT NULL,
FOREIGN KEY (fk_pet_favorito) REFERENCES pet(id),
FOREIGN KEY (fk_fazenda_favorita) REFERENCES fazenda(id),
FOREIGN KEY (fk_personagem_favorito) REFERENCES personagem(id),
coisa_favorita VARCHAR(100) NOT NULL,
perfeicao TINYINT NOT NULL,
CONSTRAINT chk_perfeicao CHECK(perfeicao IN(0, 1)),
verdadeira_perfeicao TINYINT NOT NULL,
CONSTRAINT chk_verdadeira_perfeicao CHECK(verdadeira_perfeicao IN(0, 1)),
pontuacao_quiz INT
);