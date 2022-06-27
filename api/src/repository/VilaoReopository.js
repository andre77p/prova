import {con} from './connection.js'

export async function adcionarVilao (vilao){
    const comando = 
    `insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder )
    values(?,?,?);`

    const [resposta] = await con.query(comando,[vilao.nome,vilao.maldades,vilao.poder]) 
    vilao.id = resposta.insertId;
    return vilao;
}

export async function ListarTodosVilao(){
    const comando = 
    `select id_vilao   'id',
    nm_vilao 'nome',
    ds_maldades  'maldades',
    bt_super_poder 'poder'
from tb_vilao`;

const [linhas] = await con.query(comando);
return linhas;
}