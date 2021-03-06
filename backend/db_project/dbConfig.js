class Database{
	constructor(){}

	async createDatabase(){
		const mysqlCreate = require("mysql2");
		const conn = mysqlCreate.createConnection({
			host:'localhost',
			user: 'root',
			password: 'a'
		});
		conn.query("CREATE DATABASE IF NOT EXISTS EngSoftDB");
		conn.end();
	}
	
	async createTables(){
		const conn = await this.connect();
		const createUsers = "CREATE TABLE IF NOT EXISTS Users (id INT AUTO_INCREMENT, email VARCHAR(100) NOT NULL UNIQUE, name VARCHAR(20) NOT NULL, password VARCHAR(100) NOT NULL, professor BOOLEAN NOT NULL DEFAULT FALSE, PRIMARY KEY (id, email))";
		const createSubjects = "CREATE TABLE IF NOT EXISTS Subjects (code VARCHAR(6) NOT NULL PRIMARY KEY, subjectName VARCHAR(60) NOT NULL)";
		const createProfData = "CREATE TABLE IF NOT EXISTS ProfData (id INT PRIMARY KEY, description VARCHAR(2000), price INT, FOREIGN KEY (id) REFERENCES Users (id) ON DELETE CASCADE)";
		const createMessages = "CREATE TABLE IF NOT EXISTS Messages (idSender INT, idReceiver INT, time DATETIME, status BOOLEAN NOT NULL DEFAULT FALSE, text VARCHAR(2000), PRIMARY KEY (idSender, idReceiver, time), FOREIGN KEY (idSender) REFERENCES Users (id) ON DELETE CASCADE, FOREIGN KEY (idReceiver) REFERENCES Users (id) ON DELETE CASCADE)";
		const createSubProf = "CREATE TABLE IF NOT EXISTS SubProf (professor INT, subject VARCHAR(6), FOREIGN KEY (professor) REFERENCES Users (id) ON DELETE CASCADE, FOREIGN KEY (subject) REFERENCES Subjects (code) ON DELETE CASCADE	)";

		conn.query(createUsers);
		conn.query(createSubjects);
		conn.query(createSubProf);
		conn.query(createProfData);
		conn.query(createMessages);


		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC203', 'Programação e Desenvolvimento de Software I')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC638', 'Introdução à Lógica Computacional')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('MAT038', 'Geometria Analítica e Álgebra Linear')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC204', 'Programação e Desenvolvimento de Software II')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC216', 'Matemática Discreta')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC639', 'Álgebra Linear Computacional')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('MAT001', 'Calculo Diferencial e Integral I')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC011', 'Introdução a Banco de Dados')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC114', 'Introdução a Sistemas Lógicos')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC205', 'Estruturas de Dados')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('EST032', 'Probabilidade')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('MAT039', 'Calculo Diferencial e Integral II')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC006', 'Organização de Computadores I')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC129', 'Fundamentos da Teoria da Computação')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC206', 'Algoritmos I')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC212', 'Introdução à Ciência dos Dados')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('MAT034', 'Álgebra A')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC299', 'Linguagens de Programação')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC035', 'Pesquisa Operacional')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC207', 'Algoritmos II')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('MAT040', 'Equações Diferenciais C')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC053', 'Compiladores I')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC603', 'Engenharia de Software')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC605', 'Sistemas Operacionais')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('FIS156', 'Introdução à Física Estatística Computacional')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC023', 'Redes de Computadores')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC636', 'Ética na Computação')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC641', 'Fundamentos de Sistemas Paralelos e Distribuídos')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC642', 'Introdução à Inteligência Artificial')");
		conn.query("INSERT INTO Subjects (code, subjectName) VALUES ('DCC637', 'Computação e Sociedade')");

		conn.end();
	}

	async connect(){
		const mysql = require("mysql2/promise");
		const connection = await mysql.createConnection("mysql://root:a@localhost:3306/EngSoftDB");
		return connection;
	}

	async disconnect(conn){
		conn.end();
	}

}

module.exports = Database;