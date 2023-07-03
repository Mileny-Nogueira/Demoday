import React from 'react';
import style from './HomeDemo.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Formalidade

import boa_noite_img from './Images/Formalidade/Boa noite.png';
import bom_dia_img from './Images/Formalidade/bom dia.png';
import boa_tarde_img from './Images/Formalidade/boa tarde.png';
import desculpa_img from './Images/Formalidade/Desculpa.png';
import obrigada_img from './Images/Formalidade/Obrigada.png';
import por_favor_img from './Images/Formalidade/por favor .png';

import boa_sorte_img from './Images/Formalidade/Boa Sorte.png';
import bem_vinda_img from './Images/Formalidade/Bem vinda.png';
import de_nada_img from './Images/Formalidade/De nada.png';
import maravilhosa_img from './Images/Formalidade/Maravilhosa.png';
import parabens_img from './Images/Formalidade/Parabéns.png';
import bonita_img from './Images/Formalidade/bonito.png';

import por_que_img from './Images/Formalidade/Por que.png';
import aceito_img from './Images/Formalidade/aceito.png';
import nao_sei_img from './Images/Formalidade/não sei.png';
import espere_img from './Images/Formalidade/espere.png';
import concordo_img from './Images/Formalidade/concordo.png';
import discordo_img from './Images/Formalidade/discordo.png';

import repete_img from './Images/Formalidade/repete.png';
import entendido_img from './Images/Formalidade/entendido.png';
import nao_entendi_img from './Images/Formalidade/não entendi.png';
import boa_semana_img from './Images/Formalidade/boa semana.png';
import sinta_a_vontade_img from './Images/Formalidade/sinta-se a vontade .png';
import com_licenca_img from './Images/Formalidade/Com licença.png';

//Desejos

import comer_img from './Images/Desejos/Comer.png';
import beber_img from './Images/Desejos/Beber.png';
import escovar_dentes_img from './Images/Desejos/Escovar.png';
import banhar_img from './Images/Desejos/Banhar.png';
import banheiro_img from './Images/Desejos/Banheiro.png';
import limpar_img from './Images/Desejos/Limpar.png';

import correr_img from './Images/Desejos/Correr.png';
import sair_img from './Images/Desejos/Sair.png';
import entrar_img from './Images/Desejos/Entrar.png';
import dormir_img from './Images/Desejos/Dormir.png';
import sentar_img from './Images/Desejos/Sentar.png';
import andar_img from './Images/Desejos/Andar.png';

import jogar_lixo_img from './Images/Desejos/Lixo fora .png';
import brincar_img from './Images/Desejos/Brincar.png';
import jogar_img from './Images/Desejos/Jogar.png';
import assistir_img from './Images/Desejos/Assistir.png';
import ler_img from './Images/Desejos/Ler.png';
import descansar_img from './Images/Desejos/Descansar.png';

import trocar_roupa_img from './Images/Desejos/Trocar de Roupa.png';
import nao_img from './Images/Desejos/Não.png';
import sim_img from './Images/Desejos/Sim.png';
import abracar_img from './Images/Desejos/Abracar.png';
import beijar_img from './Images/Desejos/Beijar.png';
import ouvir_musica_img from './Images/Desejos/Musica.png';

import escolher_img from './Images/Desejos/Escolher.png';
import desenhar_img from './Images/Desejos/Desenhar.png';
import estudar_img from './Images/Desejos/Estudar.png';
import casa_img from './Images/Desejos/Casa.png';
import quarto_img from './Images/Desejos/Quarto.png';
import segurar_img from './Images/Desejos/Segurar.png';

//Sentimentos - Emoções

import amor_img from './Images/Sentimentos/Amor.png';
import feliz_img from './Images/Sentimentos/Feliz.png';
import medo_img from './Images/Sentimentos/Medo.png';
import raiva_img from './Images/Sentimentos/Raiva.png';
import surpresa_img from './Images/Sentimentos/Surpreso.png';
import triste_img from './Images/Sentimentos/Triste.png';

import nojo_img from './Images/Sentimentos/Nojo.png';
import curiosa_img from './Images/Sentimentos/Curioso.png';
import dor_img from './Images/Sentimentos/Dor.png';
import duvida_img from './Images/Sentimentos/Duvida.png';
import calma_img from './Images/Sentimentos/Calmo.png';
import ansiosa_img from './Images/Sentimentos/Ansiedade.png';

import alegre_img from './Images/Sentimentos/alegre.png';
import gostei_img from './Images/Sentimentos/Gostei.png';
import nao_gostei_img from './Images/Sentimentos/Não gostei.png';
import quero_img from './Images/Sentimentos/quero.png';
import nao_quero_img from './Images/Sentimentos/Não quero.png';
import satisfeita_img from './Images/Sentimentos/satisfeito.png';

import confianca_img from './Images/Sentimentos/Confiança.png';
import ciumes_img from './Images/Sentimentos/ciumes.png';
import empatia_img from './Images/Sentimentos/empatia.png';
import animada_img from './Images/Sentimentos/animado.png';
import relaxada_img from './Images/Sentimentos/Relaxado.png';
import paciencia_img from './Images/Sentimentos/Paciencia.png';

import nervosa_img from './Images/Sentimentos/nervoso.png';
import saudade_img from './Images/Sentimentos/saudade.png';
import respeito_img from './Images/Sentimentos/respeito.png';
import interesse_img from './Images/Sentimentos/interesse.png';
import bom_humor_img from './Images/Sentimentos/bom humor.png';
import mau_humor_img from './Images/Sentimentos/Mal humor.png';

//Pessoa - Pronomes

import eu_img from './Images/Pessoa - Pronomes/Eu.png';
import voce_img from './Images/Pessoa - Pronomes/Você.png';
import ele_img from './Images/Pessoa - Pronomes/Ele.png';
import ela_img from './Images/Pessoa - Pronomes/Ela.png'
import nos_img from './Images/Pessoa - Pronomes/Nós.png';
import voces_img from './Images/Pessoa - Pronomes/Vocês.png';

import eles_img from './Images/Pessoa - Pronomes/Eles.png';
import elas_img from './Images/Pessoa - Pronomes/Elas.png';


//Áudios das Cards

//Formalidade - Vozes Femininas (Mileny)

import boa_noite_audio from './Audios/Formalidades/Vozes - Mileny/Boa noite.m4a';
import bom_dia_audio from './Audios/Formalidades/Vozes - Mileny/Bom dia.m4a';
import boa_tarde_audio from './Audios/Formalidades/Vozes - Mileny/Boa tarde.m4a';
import desculpa_audio from './Audios/Formalidades/Vozes - Mileny/Desculpa.m4a';
import obrigada_audio from './Audios/Formalidades/Vozes - Mileny/Obrigada.m4a';
import por_favor_audio from './Audios/Formalidades/Vozes - Mileny/Por favor.m4a';

import boa_sorte_audio from './Audios/Formalidades/Vozes - Mileny/Boa sorte.m4a';
import bem_vinda_audio from './Audios/Formalidades/Vozes - Mileny/Bem-vinda.m4a';
import de_nada_audio from './Audios/Formalidades/Vozes - Mileny/De nada.m4a';
import maravilhosa_audio from './Audios/Formalidades/Vozes - Mileny/Maravilhosa.m4a';
import parabens_audio from './Audios/Formalidades/Vozes - Mileny/Parabéns.m4a';
import bonita_audio from './Audios/Formalidades/Vozes - Mileny/Bonita.m4a';

import por_que_audio from './Audios/Formalidades/Vozes - Mileny/Por que.m4a';
import aceito_audio from './Audios/Formalidades/Vozes - Mileny/Aceito.m4a';
import nao_sei_audio from './Audios/Formalidades/Vozes - Mileny/Não sei.m4a';
import espere_audio from './Audios/Formalidades/Vozes - Mileny/Espere.m4a';
import concordo_audio from './Audios/Formalidades/Vozes - Mileny/Concordo.m4a';
import discordo_audio from './Audios/Formalidades/Vozes - Mileny/Discordo.m4a';

import repete_audio from './Audios/Formalidades/Vozes - Mileny/Repete.m4a';
import entendido_audio from './Audios/Formalidades/Vozes - Mileny/Entendido.m4a';
import nao_entendi_audio from './Audios/Formalidades/Vozes - Mileny/Não entendi.m4a';
import boa_semana_audio from './Audios/Formalidades/Vozes - Mileny/Boa semana.m4a';
import sinta_a_vontade_audio from './Audios/Formalidades/Vozes - Mileny/Sinta-se à vontade.m4a';
import com_licenca_audio from './Audios/Formalidades/Vozes - Mileny/Com licença.m4a';


//Desejos - Vozes Femininas (Mileny)

import comer_audio from './Audios/Desejos/Vozes - Mileny/Comer.m4a';
import beber_audio from './Audios/Desejos/Vozes - Mileny/Beber.m4a';
import escovar_dentes_audio from './Audios/Desejos/Vozes - Mileny/Escovar os dentes.m4a';
import banhar_audio from './Audios/Desejos/Vozes - Mileny/Banhar.m4a';
import banheiro_audio from './Audios/Desejos/Vozes - Mileny/Banheiro.m4a';
import limpar_audio from './Audios/Desejos/Vozes - Mileny/Limpar.m4a';

import correr_audio from './Audios/Desejos/Vozes - Mileny/Correr.m4a';
import sair_audio from './Audios/Desejos/Vozes - Mileny/Sair.m4a';
import entrar_audio from './Audios/Desejos/Vozes - Mileny/Entrar.m4a';
import dormir_audio from './Audios/Desejos/Vozes - Mileny/Dormir.m4a';
import sentar_audio from './Audios/Desejos/Vozes - Mileny/Sentar.m4a';
import andar_audio from './Audios/Desejos/Vozes - Mileny/Andar.m4a';

import jogar_lixo_audio from './Audios/Desejos/Vozes - Mileny/Jogar no lixo.m4a';
import brincar_audio from './Audios/Desejos/Vozes - Mileny/Brincar.m4a';
import jogar_audio from './Audios/Desejos/Vozes - Mileny/Jogar.m4a';
import assistir_audio from './Audios/Desejos/Vozes - Mileny/Assistir.m4a';
import ler_audio from './Audios/Desejos/Vozes - Mileny/Ler.m4a';
import descansar_audio from './Audios/Desejos/Vozes - Mileny/Descansar.m4a';

import trocar_roupa_audio from './Audios/Desejos/Vozes - Mileny/Trocar de roupa.m4a';
import nao_audio from './Audios/Desejos/Vozes - Mileny/Não.m4a';
import sim_audio from './Audios/Desejos/Vozes - Mileny/Sim.m4a';
import abracar_audio from './Audios/Desejos/Vozes - Mileny/Abraçar.m4a';
import beijar_audio from './Audios/Desejos/Vozes - Mileny/Beijar.m4a';
import ouvir_musica_audio from './Audios/Desejos/Vozes - Mileny/Ouvir música.m4a';

import escolher_audio from './Audios/Desejos/Vozes - Mileny/Escolher.m4a';
import desenhar_audio from './Audios/Desejos/Vozes - Mileny/Desenhar.m4a';
import estudar_audio from './Audios/Desejos/Vozes - Mileny/Estudar.m4a';
import casa_audio from './Audios/Desejos/Vozes - Mileny/Casa.m4a';
import quarto_audio from './Audios/Desejos/Vozes - Mileny/Quarto.m4a';
import segurar_audio from './Audios/Desejos/Vozes - Mileny/Segurar.m4a';

//Sentimentos - Emoções - Vozes Femininas (Mileny)

import amor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Amor.m4a';
import feliz_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Feliz.m4a';
import medo_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Medo.m4a';
import raiva_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Raiva.m4a';
import surpresa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Surpresa.m4a';
import triste_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Triste.m4a';

import nojo_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nojo.m4a';
import curiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Curiosa.m4a';
import dor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dor.m4a';
import duvida_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dúvida.m4a';
import calma_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Calma.m4a';
import ansiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Ansiosa.m4a';

import alegre_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Alegre.m4a';
import gostei_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Gostei.m4a';
import nao_gostei_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Não gostei.m4a';
import quero_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Quero.m4a';
import nao_quero_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Não quero.m4a';
import satisfeita_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Satisfeita.m4a';

import confianca_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Confiança.m4a';
import ciumes_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Ciúmes.m4a';
import empatia_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Empatia.m4a';
import animada_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Animada.m4a';
import relaxada_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Relaxada.m4a';
import paciencia_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Paciência.m4a';

import nervosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nervosa.m4a';
import saudade_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Saudade.m4a';
import respeito_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Respeito.m4a';
import interesse_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Interesse.m4a';
import bom_humor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Bom humor.m4a';
import mau_humor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Mau humor.m4a';

//Pessoa - Pronomes - Vozes femininas (Mileny)

import eu_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Eu.m4a';
import voce_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Você.m4a';
import ele_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Ele.m4a';
import ela_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Ela.m4a';
import nos_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Nós.m4a';
import voces_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Vocês.m4a';

import eles_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Eles.m4a';
import elas_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Elas.m4a';


//Formalidades - Vozes Masculinas (Hitalo)

import boa_noite_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa Noite.m4a';
import bom_dia_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bom dia.m4a';
import boa_tarde_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa tarde.m4a';
import desculpa_audio2 from './Audios/Formalidades/Vozes - Hitalo/Desculpa.m4a';
import obrigado_audio2 from './Audios/Formalidades/Vozes - Hitalo/Obrigado.m4a';
import por_favor_audio2 from './Audios/Formalidades/Vozes - Hitalo/Por Favor.m4a';

import boa_sorte_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa sorte.m4a';
import bem_vindo_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bem Vindo.m4a';
import de_nada_audio2 from './Audios/Formalidades/Vozes - Hitalo/De nada.m4a';
import maravilhoso_audio2 from './Audios/Formalidades/Vozes - Hitalo/Maravilhoso.m4a';
import parabens_audio2 from './Audios/Formalidades/Vozes - Hitalo/Parabens.m4a';
import bonito_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bonito.m4a';

import por_que_audio2 from './Audios/Formalidades/Vozes - Hitalo/Por que_.m4a';
import aceito_audio2 from './Audios/Formalidades/Vozes - Hitalo/Aceito.m4a';
import nao_sei_audio2 from './Audios/Formalidades/Vozes - Hitalo/Nao sei.m4a';
import espere_audio2 from './Audios/Formalidades/Vozes - Hitalo/Espere.m4a';
import concordo_audio2 from './Audios/Formalidades/Vozes - Hitalo/Concordo.m4a';
import discordo_audio2 from './Audios/Formalidades/Vozes - Hitalo/Discordo.m4a';

import repete_audio2 from './Audios/Formalidades/Vozes - Hitalo/Repete.m4a';
import entendido_audio2 from './Audios/Formalidades/Vozes - Hitalo/Entendido.m4a';
import nao_entendi_img2 from './Audios/Formalidades/Vozes - Hitalo/Nao entendi.m4a';
import boa_semana_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa Semana.m4a';
import sinta_a_vontade_audio2 from './Audios/Formalidades/Vozes - Hitalo/Sinta-se a vontade.m4a';
import com_licenca_audio2 from './Audios/Formalidades/Vozes - Hitalo/Com licenca.m4a';

//Desejos - Vozes Masculinas (Hitalo)

import comer_audio2 from './Audios/Desejos/Vozes - Hitalo/Comer.m4a';
import beber_audio2 from './Audios/Desejos/Vozes - Hitalo/Beber.m4a';
import escovar_dentes_audio2 from './Audios/Desejos/Vozes - Hitalo/Escovar os dentes.m4a';
import banhar_audio2 from './Audios/Desejos/Vozes - Hitalo/Banhar.m4a';
import banheiro_audio2 from './Audios/Desejos/Vozes - Hitalo/Banheiro.m4a';
import limpar_audio2 from './Audios/Desejos/Vozes - Hitalo/Limpar.m4a';

import correr_audio2 from './Audios/Desejos/Vozes - Hitalo/Correr.m4a';
import sair_audio2 from './Audios/Desejos/Vozes - Hitalo/Sair.m4a';
import entrar_audio2 from './Audios/Desejos/Vozes - Hitalo/Entrar.m4a';
import dormir_audio2 from './Audios/Desejos/Vozes - Hitalo/Dormir.m4a';
import sentar_audio2 from './Audios/Desejos/Vozes - Hitalo/Sentar.m4a';
import andar_audio2 from './Audios/Desejos/Vozes - Hitalo/Andar.m4a';

import jogar_lixo_audio2 from './Audios/Desejos/Vozes - Hitalo/Jogar no Lixo.m4a';
import brincar_audio2 from './Audios/Desejos/Vozes - Hitalo/Brincar.m4a';
import jogar_audio2 from './Audios/Desejos/Vozes - Hitalo/Jogar.m4a';
import assistir_audio2 from './Audios/Desejos/Vozes - Hitalo/Assistir.m4a';
import ler_audio2 from './Audios/Desejos/Vozes - Hitalo/Ler.m4a';
import descansar_audio2 from './Audios/Desejos/Vozes - Hitalo/Descansar.m4a';

import trocar_roupa_audio2 from './Audios/Desejos/Vozes - Hitalo/Trocar de roupa.m4a';
import nao_audio2 from './Audios/Desejos/Vozes - Hitalo/Não.m4a';
import sim_audio2 from './Audios/Desejos/Vozes - Hitalo/Sim.m4a';
import abracar_audio2 from './Audios/Desejos/Vozes - Hitalo/Abraçar.m4a';
import beijar_audio2 from './Audios/Desejos/Vozes - Hitalo/Beijar.m4a';
import ouvir_musica_audio2 from './Audios/Desejos/Vozes - Hitalo/Ouvir Música.m4a';

import escolher_audio2 from './Audios/Desejos/Vozes - Hitalo/Escolher.m4a';
import desenhar_audio2 from './Audios/Desejos/Vozes - Hitalo/Desenhar.m4a';
import estudar_audio2 from './Audios/Desejos/Vozes - Hitalo/Estudar.m4a';
import casa_audio2 from './Audios/Desejos/Vozes - Hitalo/Casa.m4a';
import quarto_audio2 from './Audios/Desejos/Vozes - Hitalo/Quarto.m4a';
import segurar_audio2 from './Audios/Desejos/Vozes - Hitalo/Segurar.m4a';

//Sentimentos - Emoções - Vozes Masculinas (Hitalo)

import amor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Amor.m4a';
import feliz_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Feliz.m4a';
import medo_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Medo.m4a';
import raiva_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Raiva.m4a';
import surpreso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Surpreso.m4a';
import triste_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Triste.m4a';

import nojo_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Nojo.m4a';
import curioso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Curioso.m4a';
import dor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Dor.m4a';
import duvida_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Dúvida.m4a';
import calmo_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Calmo.m4a';
import ansioso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Ansioso.m4a';

import alegre_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Alegre.m4a';
import gostei_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Gostei.m4a';
import nao_gostei_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Não Gostei.m4a';
import quero_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Quero.m4a';
import nao_quero_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Não quero.m4a';
import satisfeito_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Satisfeito.m4a';

import confianca_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Confiança.m4a';
import ciumes_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Ciumes.m4a';
import empatia_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Empatia.m4a';
import animado_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Animado.m4a';
import relaxado_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Relaxado.m4a';
import paciencia_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Paciência.m4a';

import nervoso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Nervoso.m4a';
import saudade_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Saudade.m4a';
import respeito_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Respeito.m4a';
import interesse_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Interesse.m4a';
import bom_humor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Bom Humor.m4a';
import mau_humor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Mau Humor.m4a';

//Pessoa - Pronomes - Vozes masculinas (Hitalo)

import eu_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/Eu.m4a';
import voce_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/você.m4a';
import ele_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/ele.m4a';
import ela_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/ela.m4a';
import nos_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/nós.m4a';
import voces_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/vocês.m4a';

import eles_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/eles.m4a';
import elas_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/elas.m4a';


const HomeDemo = ({ searchText, handleCardAudio, selectedVoice }) => {

    //Variável para as cores de fundo das cards

    let formalidade_color = 'linear-gradient(180deg, #38B1FF 0%, rgba(138.96, 206.69, 250.75, 0) 100%)';
    let desejos_color = 'linear-gradient(180deg, #FFFF00 0%, #FFFFFF 100%';
    let sentimentos_color = 'linear-gradient(180deg, #FF4646 0%, rgba(255, 172.13, 172.13, 0) 100%)';
    let pessoa_color = 'linear-gradient(180deg, #FF8100 0%, rgba(255, 129.06, 0, 0) 100%)';


    //Props das Cards - Informações

    //Formalidade - Home
    const cardsFormalidade = [
        { card_img: boa_noite_img, card_alt: 'Boa Noite', card_text: 'Boa Noite', card_audio: selectedVoice === 'Mileny' ? boa_noite_audio : boa_noite_audio2 },
        { card_img: bom_dia_img, card_alt: 'Bom Dia', card_text: 'Bom Dia', card_audio: selectedVoice === 'Mileny' ? bom_dia_audio : bom_dia_audio2 },
        { card_img: boa_tarde_img, card_alt: 'Boa Tarde', card_text: 'Boa Tarde', card_audio: selectedVoice === 'Mileny' ? boa_tarde_audio : boa_tarde_audio2 },
        { card_img: desculpa_img, card_alt: 'Desculpa', card_text: 'Desculpa', card_audio: selectedVoice === 'Mileny' ? desculpa_audio : desculpa_audio2 },
        { card_img: obrigada_img, card_alt: 'Obrigado ou Obrigada', card_text: selectedVoice === 'Mileny' ? 'Obrigada' : 'Obrigado', card_audio: selectedVoice === 'Mileny' ? obrigada_audio : obrigado_audio2 },
        { card_img: por_favor_img, card_alt: 'Por favor', card_text: 'Por Favor', card_audio: selectedVoice === 'Mileny' ? por_favor_audio : por_favor_audio2 },

        { card_img: boa_sorte_img, card_alt: 'Boa Sorte', card_text: 'Boa Sorte', card_audio: selectedVoice === 'Mileny' ? boa_sorte_audio : boa_sorte_audio2 },
        { card_img: bem_vinda_img, card_alt: 'Bem-Vindo ou Bem-Vinda', card_text: selectedVoice === 'Mileny' ? 'Bem-Vinda' : 'Bem-Vindo', card_audio: selectedVoice === 'Mileny' ? bem_vinda_audio : bem_vindo_audio2 },
        { card_img: de_nada_img, card_alt: 'De Nada', card_text: 'De Nada', card_audio: selectedVoice === 'Mileny' ? de_nada_audio : de_nada_audio2 },
        { card_img: maravilhosa_img, card_alt: 'Maravilhoso ou Maravilhosa', card_text: selectedVoice === 'Mileny' ? 'Maravilhosa' : 'Maravilhoso', card_audio: selectedVoice === 'Mileny' ? maravilhosa_audio : maravilhoso_audio2 },
        { card_img: parabens_img, card_alt: 'Parabéns', card_text: 'Parabéns', card_audio: selectedVoice === 'Mileny' ? parabens_audio : parabens_audio2 },
        { card_img: bonita_img, card_alt: 'Bonito ou Bonita', card_text: selectedVoice === 'Mileny' ? 'Bonita' : 'Bonito', card_audio: selectedVoice === 'Mileny' ? bonita_audio : bonito_audio2 },

        { card_img: por_que_img, card_alt: 'Por Que?', card_text: 'Por Que?', card_audio: selectedVoice === 'Mileny' ? por_que_audio : por_que_audio2 },
        { card_img: aceito_img, card_alt: 'Aceito', card_text: 'Aceito', card_audio: selectedVoice === 'Mileny' ? aceito_audio : aceito_audio2 },
        { card_img: nao_sei_img, card_alt: 'Não Sei', card_text: 'Não Sei', card_audio: selectedVoice === 'Mileny' ? nao_sei_audio : nao_sei_audio2 },
        { card_img: espere_img, card_alt: 'Espere', card_text: 'Espere', card_audio: selectedVoice === 'Mileny' ? espere_audio : espere_audio2 },
        { card_img: concordo_img, card_alt: 'Concordo', card_text: 'Concordo', card_audio: selectedVoice === 'Mileny' ? concordo_audio : concordo_audio2 },
        { card_img: discordo_img, card_alt: 'Discordo', card_text: 'Discordo', card_audio: selectedVoice === 'Mileny' ? discordo_audio : discordo_audio2 },

        { card_img: repete_img, card_alt: 'Repete', card_text: 'Repete', card_audio: selectedVoice === 'Mileny' ? repete_audio : repete_audio2 },
        { card_img: entendido_img, card_alt: 'Entendido', card_text: 'Entendido', card_audio: selectedVoice === 'Mileny' ? entendido_audio : entendido_audio2 },
        { card_img: nao_entendi_img, card_alt: 'Não Entendi', card_text: 'Não Entendi', card_audio: selectedVoice === 'Mileny' ? nao_entendi_audio : nao_entendi_img2 },
        { card_img: boa_semana_img, card_alt: 'Boa Semana', card_text: 'Boa Semana', card_audio: selectedVoice === 'Mileny' ? boa_semana_audio : boa_semana_audio2 },
        { card_img: sinta_a_vontade_img, card_alt: 'Sinta-se à Vontade', card_text: 'Sinta-se à Vontade', card_audio: selectedVoice === 'Mileny' ? sinta_a_vontade_audio : sinta_a_vontade_audio2 },
        { card_img: com_licenca_img, card_alt: 'Com Licença', card_text: 'Com Licença', card_audio: selectedVoice === 'Mileny' ? com_licenca_audio : com_licenca_audio2 }
    ]

    //Desejos - Home

    const cardsDesejos = [
        { card_img: comer_img, card_alt: 'Comer', card_text: 'Comer', card_audio: selectedVoice === 'Mileny' ? comer_audio : comer_audio2 },
        { card_img: beber_img, card_alt: 'Beber', card_text: 'Beber', card_audio: selectedVoice === 'Mileny' ? beber_audio : beber_audio2 },
        { card_img: escovar_dentes_img, card_alt: 'Escovar os Dentes', card_text: 'Escovar os Dentes', card_audio: selectedVoice === 'Mileny' ? escovar_dentes_audio : escovar_dentes_audio2 },
        { card_img: banhar_img, card_alt: 'Banhar', card_text: 'Banhar', card_audio: selectedVoice === 'Mileny' ? banhar_audio : banhar_audio2 },
        { card_img: banheiro_img, card_alt: 'Banheiro', card_text: 'Banheiro', card_audio: selectedVoice === 'Mileny' ? banheiro_audio : banheiro_audio2 },
        { card_img: limpar_img, card_alt: 'Limpar', card_text: 'Limpar', card_audio: selectedVoice === 'Mileny' ? limpar_audio : limpar_audio2 },

        { card_img: correr_img, card_alt: 'Correr', card_text: 'Correr', card_audio: selectedVoice === 'Mileny' ? correr_audio : correr_audio2 },
        { card_img: sair_img, card_alt: 'Sair', card_text: 'Sair', card_audio: selectedVoice === 'Mileny' ? sair_audio : sair_audio2 },
        { card_img: entrar_img, card_alt: 'Entrar', card_text: 'Entrar', card_audio: selectedVoice === 'Mileny' ? entrar_audio : entrar_audio2 },
        { card_img: dormir_img, card_alt: 'Dormir', card_text: 'Dormir', card_audio: selectedVoice === 'Mileny' ? dormir_audio : dormir_audio2 },
        { card_img: sentar_img, card_alt: 'Sentar', card_text: 'Sentar', card_audio: selectedVoice === 'Mileny' ? sentar_audio : sentar_audio2 },
        { card_img: andar_img, card_alt: 'Andar', card_text: 'Andar', card_audio: selectedVoice === 'Mileny' ? andar_audio : andar_audio2 },

        { card_img: jogar_lixo_img, card_alt: 'Jogar no Lixo', card_text: 'Jogar no Lixo', card_audio: selectedVoice === 'Mileny' ? jogar_lixo_audio : jogar_lixo_audio2 },
        { card_img: brincar_img, card_alt: 'Brincar', card_text: 'Brincar', card_audio: selectedVoice === 'Mileny' ? brincar_audio : brincar_audio2 },
        { card_img: jogar_img, card_alt: 'Jogar', card_text: 'Jogar', card_audio: selectedVoice === 'Mileny' ? jogar_audio : jogar_audio2 },
        { card_img: assistir_img, card_alt: 'Assistir', card_text: 'Assistir', card_audio: selectedVoice === 'Mileny' ? assistir_audio : assistir_audio2 },
        { card_img: ler_img, card_alt: 'Ler', card_text: 'Ler', card_audio: selectedVoice === 'Mileny' ? ler_audio : ler_audio2 },
        { card_img: descansar_img, card_alt: 'Descansar', card_text: 'Descansar', card_audio: selectedVoice === 'Mileny' ? descansar_audio : descansar_audio2 },

        { card_img: trocar_roupa_img, card_alt: 'Trocar de Roupa', card_text: 'Trocar de Roupa', card_audio: selectedVoice === 'Mileny' ? trocar_roupa_audio : trocar_roupa_audio2 },
        { card_img: nao_img, card_alt: 'Não', card_text: 'Não', card_audio: selectedVoice === 'Mileny' ? nao_audio : nao_audio2 },
        { card_img: sim_img, card_alt: 'Sim', card_text: 'Sim', card_audio: selectedVoice === 'Mileny' ? sim_audio : sim_audio2 },
        { card_img: abracar_img, card_alt: 'Abraçar', card_text: 'Abraçar', card_audio: selectedVoice === 'Mileny' ? abracar_audio : abracar_audio2 },
        { card_img: beijar_img, card_alt: 'Beijar', card_text: 'Beijar', card_audio: selectedVoice === 'Mileny' ? beijar_audio : beijar_audio2 },
        { card_img: ouvir_musica_img, card_alt: 'Ouvir Música', card_text: 'Ouvir Música', card_audio: selectedVoice === 'Mileny' ? ouvir_musica_audio : ouvir_musica_audio2 },

        { card_img: escolher_img, card_alt: 'Escolher', card_text: 'Escolher', card_audio: selectedVoice === 'Mileny' ? escolher_audio : escolher_audio2 },
        { card_img: desenhar_img, card_alt: 'Desenhar', card_text: 'Desenhar', card_audio: selectedVoice === 'Mileny' ? desenhar_audio : desenhar_audio2 },
        { card_img: estudar_img, card_alt: 'Estudar', card_text: 'Estudar', card_audio: selectedVoice === 'Mileny' ? estudar_audio : estudar_audio2 },
        { card_img: casa_img, card_alt: 'Casa', card_text: 'Casa', card_audio: selectedVoice === 'Mileny' ? casa_audio : casa_audio2 },
        { card_img: quarto_img, card_alt: 'Quarto', card_text: 'Quarto', card_audio: selectedVoice === 'Mileny' ? quarto_audio : quarto_audio2 },
        { card_img: segurar_img, card_alt: 'Segurar', card_text: 'Segurar', card_audio: selectedVoice === 'Mileny' ? segurar_audio : segurar_audio2 },
    ]

    //Sentimentos - Home

    const cardsSentimentos = [
        { card_img: amor_img, card_alt: 'Amor', card_text: 'Amor', card_audio: selectedVoice === 'Mileny' ? amor_audio : amor_audio2 },
        { card_img: feliz_img, card_alt: 'Feliz', card_text: 'Feliz', card_audio: selectedVoice === 'Mileny' ? feliz_audio : feliz_audio2 },
        { card_img: medo_img, card_alt: 'Medo', card_text: 'Medo', card_audio: selectedVoice === 'Mileny' ? medo_audio : medo_audio2 },
        { card_img: raiva_img, card_alt: 'Raiva', card_text: 'Raiva', card_audio: selectedVoice === 'Mileny' ? raiva_audio : raiva_audio2 },
        { card_img: surpresa_img, card_alt: 'Surpreso ou Surpresa', card_text: selectedVoice === 'Mileny' ? 'Surpresa' : 'Surpreso', card_audio: selectedVoice === 'Mileny' ? surpresa_audio : surpreso_audio2 },
        { card_img: triste_img, card_alt: 'Triste', card_text: 'Triste', card_audio: selectedVoice === 'Mileny' ? triste_audio : triste_audio2 },

        { card_img: nojo_img, card_alt: 'Nojo', card_text: 'Nojo', card_audio: selectedVoice === 'Mileny' ? nojo_audio : nojo_audio2 },
        { card_img: curiosa_img, card_alt: 'Curioso ou Curiosa', card_text: selectedVoice === 'Mileny' ? 'Curiosa' : 'Curioso', card_audio: selectedVoice === 'Mileny' ? curiosa_audio : curioso_audio2 },
        { card_img: dor_img, card_alt: 'Dor', card_text: 'Dor', card_audio: selectedVoice === 'Mileny' ? dor_audio : dor_audio2 },
        { card_img: duvida_img, card_alt: 'Dúvida', card_text: 'Dúvida', card_audio: selectedVoice === 'Mileny' ? duvida_audio : duvida_audio2 },
        { card_img: calma_img, card_alt: 'Calma ou Calmo', card_text: selectedVoice === 'Mileny' ? 'Calma' : 'Calmo', card_audio: selectedVoice === 'Mileny' ? calma_audio : calmo_audio2 },
        { card_img: ansiosa_img, card_alt: 'Ansioso ou Ansiosa', card_text: selectedVoice === 'Mileny' ? 'Ansiosa' : 'Ansioso', card_audio: selectedVoice === 'Mileny' ? ansiosa_audio : ansioso_audio2 },

        { card_img: alegre_img, card_alt: 'Alegre', card_text: 'Alegre', card_audio: selectedVoice === 'Mileny' ? alegre_audio : alegre_audio2 },
        { card_img: gostei_img, card_alt: 'Gostei', card_text: 'Gostei', card_audio: selectedVoice === 'Mileny' ? gostei_audio : gostei_audio2 },
        { card_img: nao_gostei_img, card_alt: 'Não Gostei', card_text: 'Não Gostei', card_audio: selectedVoice === 'Mileny' ? nao_gostei_audio : nao_gostei_audio2 },
        { card_img: quero_img, card_alt: 'Quero', card_text: 'Quero', card_audio: selectedVoice === 'Mileny' ? quero_audio : quero_audio2 },
        { card_img: nao_quero_img, card_alt: 'Não Quero', card_text: 'Não Quero', card_audio: selectedVoice === 'Mileny' ? nao_quero_audio : nao_quero_audio2 },
        { card_img: satisfeita_img, card_alt: 'Satisfeito ou Satisfeita', card_text: selectedVoice === 'Mileny' ? 'Satisfeita' : 'Satisfeito', card_audio: selectedVoice === 'Mileny' ? satisfeita_audio : satisfeito_audio2 },

        { card_img: confianca_img, card_alt: 'Confiança', card_text: 'Confiança', card_audio: selectedVoice === 'Mileny' ? confianca_audio : confianca_audio2 },
        { card_img: ciumes_img, card_alt: 'Ciúmes', card_text: 'Ciúmes', card_audio: selectedVoice === 'Mileny' ? ciumes_audio : ciumes_audio2 },
        { card_img: empatia_img, card_alt: 'Empatia', card_text: 'Empatia', card_audio: selectedVoice === 'Mileny' ? empatia_audio : empatia_audio2 },
        { card_img: animada_img, card_alt: 'Animado ou Animada', card_text: selectedVoice === 'Mileny' ? 'Animada' : 'Animado', card_audio: selectedVoice === 'Mileny' ? animada_audio : animado_audio2 },
        { card_img: relaxada_img, card_alt: 'Relaxado ou Relaxada', card_text: selectedVoice === 'Mileny' ? 'Relaxada' : 'Relaxado', card_audio: selectedVoice === 'Mileny' ? relaxada_audio : relaxado_audio2 },
        { card_img: paciencia_img, card_alt: 'Paciência', card_text: 'Paciência', card_audio: selectedVoice === 'Mileny' ? paciencia_audio : paciencia_audio2 },

        { card_img: nervosa_img, card_alt: 'Nervoso ou Nervosa', card_text: selectedVoice === 'Mileny' ? 'Nervosa' : 'Nervoso', card_audio: selectedVoice === 'Mileny' ? nervosa_audio : nervoso_audio2 },
        { card_img: saudade_img, card_alt: 'Saudade', card_text: 'Saudade', card_audio: selectedVoice === 'Mileny' ? saudade_audio : saudade_audio2 },
        { card_img: respeito_img, card_alt: 'Respeito', card_text: 'Respeito', card_audio: selectedVoice === 'Mileny' ? respeito_audio : respeito_audio2 },
        { card_img: interesse_img, card_alt: 'Interesse', card_text: 'Interesse', card_audio: selectedVoice === 'Mileny' ? interesse_audio : interesse_audio2 },
        { card_img: bom_humor_img, card_alt: 'Bom Humor', card_text: 'Bom Humor', card_audio: selectedVoice === 'Mileny' ? bom_humor_audio : bom_humor_audio2 },
        { card_img: mau_humor_img, card_alt: 'Mau Humor', card_text: 'Mau Humor', card_audio: selectedVoice === 'Mileny' ? mau_humor_audio : mau_humor_audio2 }

    ]

    const cardsPessoa = [
        { card_img: eu_img, card_alt: 'Eu', card_text: 'Eu', card_audio: selectedVoice === 'Mileny' ? eu_audio : eu_audio2 },
        { card_img: voce_img, card_alt: 'Você', card_text: 'Você', card_audio: selectedVoice === 'Mileny' ? voce_audio : voce_audio2 },
        { card_img: ele_img, card_alt: 'Ele', card_text: 'Ele', card_audio: selectedVoice === 'Mileny' ? ele_audio : ele_audio2 },
        { card_img: ela_img, card_alt: 'Ela', card_text: 'Ela', card_audio: selectedVoice === 'Mileny' ? ela_audio : ela_audio2 },
        { card_img: nos_img, card_alt: 'Nós', card_text: 'Nós', card_audio: selectedVoice === 'Mileny' ? nos_audio : nos_audio2 },
        { card_img: voces_img, card_alt: 'Vocês', card_text: 'Vocês', card_audio: selectedVoice === 'Mileny' ? voces_audio : voces_audio2 },

        { card_img: eles_img, card_alt: 'Eles', card_text: 'Eles', card_audio: selectedVoice === 'Mileny' ? eles_audio : eles_audio2 },
        { card_img: elas_img, card_alt: 'Elas', card_text: 'Elas', card_audio: selectedVoice === 'Mileny' ? elas_audio : elas_audio2 }
    ]


    //Buscar cards - Formalidade - Home

    const filteredCardsFormalidade = cardsFormalidade.filter((card) => 
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Desejos - Home

    const filteredCardsDesejos = cardsDesejos.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Sentimentos - Emoções - Home

    const filteredCardsSentimentos = cardsSentimentos.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Desejos - Página própria

    const filteredCardsPessoa = cardsPessoa.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );
    

    //Código JSX

    return (
        <main>
            {/*Cards de Formalidade*/}
                
            <section id={style.formalidade}>
                <h2>Formalidade: </h2>
                <div>
                    {filteredCardsFormalidade.length > 0 ? (
                        filteredCardsFormalidade.map((card, index) => (
                            <Cards
                                key={index}
                                card_color={formalidade_color}
                                card_img={card.card_img}
                                card_alt={card.card_alt}
                                card_text={card.card_text}
                                card_audio={card.card_audio}
                                handleCardAudio={handleCardAudio}
                            />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado :(</p>
                    )}
                </div>
            </section>

            {/*Cards de Desejos*/}

            <section id={style.desejos}>
                <h2>Desejos: </h2>
                <div>
                    {filteredCardsDesejos.length > 0 ? (
                        filteredCardsDesejos.map((card, index) => (
                            <Cards 
                                key={index}
                                card_color={desejos_color}
                                card_img={card.card_img}
                                card_alt={card.card_alt}
                                card_text={card.card_text}
                                card_audio={card.card_audio}
                                handleCardAudio={handleCardAudio}
                            />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado :(</p>
                    )}
                </div>
            </section>

            {/*Cards de Sentimentos - Emoções */}

            <section id={style.sentimentos}>
                <h2>Sentimentos: </h2>
                <div>
                    {filteredCardsSentimentos.length > 0 ? (
                        filteredCardsSentimentos.map((card, index) => (
                            <Cards
                                key={index}
                                card_color={sentimentos_color}
                                card_img={card.card_img}
                                card_alt={card.card_alt}
                                card_text={card.card_text}
                                card_audio={card.card_audio}
                                handleCardAudio={handleCardAudio}
                            />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado :(</p>
                    )}
                </div>
            </section>

             {/*Cards de Pessoa*/}
                
             <section id={style.pessoa}>
                <h2>Pessoa - Pronomes: </h2>
                <div>
                    {filteredCardsPessoa.length > 0 ? (
                        filteredCardsPessoa.map((card, index) => (
                            <Cards
                                key={index}
                                card_color={pessoa_color}
                                card_img={card.card_img}
                                card_alt={card.card_alt}
                                card_text={card.card_text}
                                card_audio={card.card_audio}
                                handleCardAudio={handleCardAudio}
                            />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado :(</p>
                    )}
                </div>
            </section>
        </main>
    )
}

export default HomeDemo