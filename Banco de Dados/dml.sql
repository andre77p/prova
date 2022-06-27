use vilaoDB;


insert tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
		values ("Coringa", "Nunca tira o sorriso do rosto", true);
        
insert tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
		values ("Voldemort", "Oque Voldemort não tem de nariz, tem de crueldade", true);
        
select id_vilao,
       nm_vilao,
       ds_maldades,
       bt_super_poder 
from tb_vilao

        select * from tb_vilao;