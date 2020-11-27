const mongoose = require("mongoose")


//configurando o mongoose
//conectanto ao banco de dados
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/goodhelp", {
	useMongoClient: true
}).then(() => {
	console.log("MongoDB conectado...")
}).catch((err) => {
	console.log("houve um erro ao se conectar ao mongoDB: "+err)
})


// Definindo os models


//model medico
const medicoSchema = mongoose.Schema({
	nome: {
		type: String,
		require: true
	},
	crm: {
		type: Number,
		requore: true
	},
	idade: {
		type: Number,
		require: true
	},
	sexo: {
		type: String,
		require: true
	},
	telefone: {
		type: Number,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	especialidade: {
		type: String,
		require: true
	},
	disponilidade_mensal: {
		type: String,
		require: true
	},

})


//model paciente
const pacienteSchema = mongoose.Schema({

	nome: {
		type: String,
		require: true
	},
	numero_paciente: {
		type: Number,
		require: true
	},
	idade: {
		type: Number,
		require: true
	},
	sexo: {
		type: String,
		require: true
	},
	telefone: {
		type: Number,
		require: true
	},
	motivo: {
		type: String,
		require: true
	}	
	
})


//Collections
mongoose.model("medicos", medicoSchema)
mongoose.model("pacientes", pacienteSchema)


const medico = mongoose.model('medicos')

new medico({
	nome: "Aline Morais",
	crm: 8652,
	idade: 30,
	sexo: "F",
	telefone: 111111111,
	email: "aline@email.com",
	disponibilidade_mensal: 2,
	especialidade: "Psicologa",

}).save().then(() => {
	console.log("cadastro do Medico cirado com Sucesso!")
}).catch((err) => {
	console.log("Houve um erro ao registrar o medico: "+err)
})

const paciente = mongoose.model('pacientes')

new paciente({
	nome: "Marcos Alencar",
	telefone: 999999999,
	sexo: "M",
	idade: 35,
	motivo:"Depressão",

}).save().then(() => {
	console.log("Cadastro do Paciente criado com sucesso!")
}).catch((err) => {
	console.log("Houve um erro ao registrar o Paciente: "+err)
})