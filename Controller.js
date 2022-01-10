const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//exportação dos models do projeto
let usuario=models.Usuario;
let armazenamento=models.Armazenamento;
let item=models.Item;
let armazenamentoItem=models.ArmazenamentoItem;
let promocao=models.Promocao;
let lista=models.Lista;
let listaPromocao=models.ListaPromocao;

//Rotas do projeto
app.get('/test',(req,res)=>{
    res.send('Meu servidor backend já está rodando!');
});
//Realiza o login no sitema
app.post('/login', async(req,res)=>{
    let response=await usuario.findOne({
        where:{usuario:req.body.usuario, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});
//Criação do Usuario no banco
app.post('/cadrastroUsuario',async (req,res)=>{
    let response=await usuario.findOne({
        where:{usuario:req.body.usuario}
    });
    if(response === null){
        await usuario.create({
            nome:req.body.nome,
            usuario: req.body.usuario,
            senha: req.body.senha
            
        }),
        res.send(JSON.stringify('Usuario criado com sucesso'));
    }else{
        res.send(JSON.stringify('Usuario já existe no sistema'))
    }
    
});

//Verifica e altera a senha do usuario no banco
app.post('/verifyPass',async (req,res)=>{
    let response=await usuario.findOne({
        where:{id:req.body.id, senha: req.body.senhaAntiga}
    });
    if(response === null){
        res.send(JSON.stringify('Senha antiga não confere'));
    }else{
        if(req.body. novaSenha === req.body.confNovaSenha){
            response.senha=req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
        }else{
            res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
        }
    }
});

//Criação do item no banco
app.post('/cadrastroItem',async (req,res)=>{
    await item.create({
        nome: req.body.nome,
        codigo: req.body.codigo,
        usuarioId: req.body.idUser
        
    }),
    res.send(JSON.stringify('item criado com sucesso'));
    // console.log(req.body);
});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});